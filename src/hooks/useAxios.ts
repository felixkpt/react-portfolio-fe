import { useState } from 'react';
import axios, { AxiosError, AxiosRequestHeaders } from 'axios';
import { clearErrors, showErrors } from '@/utils/validation-errors';
import { useAuth } from '@/contexts/AuthContext';
import { publish } from '@/utils/events';
import { baseURL } from '@/utils/helpers';

interface ResultsInterface {
    results: any;
    message: string | undefined;
    status: number | undefined;
}

interface AxiosErrorResponseData {
    message?: string;
    errors?: any;
}

const useAxios = <T = any>() => {

    axios.defaults.baseURL = baseURL('api');
    const frontendUrl = window.location.origin;

    const [response, setResponse] = useState<T | ResultsInterface>({
        results: undefined,
        message: undefined,
        status: undefined,
    });

    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState<string | undefined>(undefined);

    // Create an Axios instance with a request interceptor
    const axiosInstance = axios.create();

    // Assuming you have a useAuth hook that manages user authentication and provides the user object with the token
    const { user, deleteUser } = useAuth();

    // Request interceptor to add Authorization header if user is authenticated
    axiosInstance.interceptors.request.use(
        (config) => {
            // Ensure config.headers is of type AxiosRequestHeaders
            if (!config.headers) {
                config.headers = {} as AxiosRequestHeaders; // Initialize as an empty object
            }

            // Add X-Frontend-URL header
            config.headers['X-Frontend-URL'] = frontendUrl;

            // Optionally add other headers here

            if (user) {
                // Add Authorization header if user is authenticated
                config.headers['Authorization'] = `Bearer ${user.token}`;
            }

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    const fetchData = async (config: any) => {

        let elementId: string | null = null;
        if (config?.elementId) {
            elementId = config.elementId;
        }

        clearErrors(elementId);
        setLoading(true);

        try {
            const resp = await axiosInstance(config);

            setErrors(undefined);

            if (resp.data?.message) {
                publish('notification', { message: resp.data.message, type: 'success', status: 200 });

                if (!resp.data?.results) {
                    setResponse({
                        results: undefined,
                        message: resp.data.message,
                        status: resp.status,
                    });
                    return {
                        results: undefined,
                        message: resp.data.message,
                        status: resp.status,
                    };
                }
            }

            setResponse({
                results: resp.data?.results,
                message: undefined,
                status: resp.status,
            });

            return {
                results: resp.data?.results,
                status: resp.status,
            };

        } catch (error) {
            const axiosError = error as AxiosError<AxiosErrorResponseData>;

            let message = undefined;
            let status = 0;

            if (axios.isAxiosError(axiosError)) {
                if (axiosError.response !== undefined) {
                    status = axiosError.response.status;

                    message = axiosError.response.data?.message || 'An error occurred.';
                    const errors = axiosError.response.data?.errors;
                    setErrors(message);

                    if (status && status !== 200 && status !== 201 && status !== 401 && (!errors || status !== 422)) {
                        publish('notification', { message, type: 'error', status });
                    }

                    if (status === 401 && message === 'Unauthenticated.') {
                        deleteUser();
                    }

                    // Handle validation errors in the response data
                    if (axiosError.response.data?.errors) {
                        showErrors(axiosError.response.data, elementId);
                    }

                } else {
                    message = 'We are experiencing server connection issues.';
                    setErrors(message);
                    publish('notification', { message, type: 'error', status: 0 });
                }
            } else {
                message = (error as Error)?.message || 'An unexpected error occurred.';
                setErrors(message);
                publish('notification', { message, type: 'error', status: 0 });
            }

            return { results: undefined, message, status };

        } finally {
            setLoading(false);
            setLoaded(true);
        }
    };

    const get = (url: string, config = {}) => fetchData({ method: 'GET', url, ...config });
    const post = (url: string, data = {}, config = {}) => fetchData({ method: 'POST', url, data, ...config });
    const put = (url: string, data = {}, config = {}) => fetchData({ method: 'POST', url, data, ...config, _method: 'patch' });
    const patch = (url: string, data = {}, config = {}) => fetchData({ method: 'POST', url, data, ...config, _method: 'patch' });
    const destroy = (url: string, data = {}, config = {}) => fetchData({ method: 'DELETE', url, data, ...config });
    const getFile = async (url: string, config = {}, placeholder: string | null = null) => {

        if (!url && placeholder) return placeholder;

        try {
            setLoading(true);
            const resp = await axiosInstance({
                method: 'GET',
                url: `/dashboard/file-repo/${url}`,
                responseType: 'blob', // This tells Axios to handle the response as a binary blob
                ...config,
            });

            const file = new Blob([resp.data], { type: resp.headers['content-type'] });
            return file;
        } catch (error) {
            // Error handling code...
        } finally {
            setLoading(false);
            setLoaded(true);
        }

        return '';
    };

    return { response, loading, loaded, errors, get, post, put, patch, destroy, getFile };
};

export default useAxios;
