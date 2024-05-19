import Str from "./Str";

export function convertToTitleCase(str: string) {
    return str.toLowerCase().replace(/_/g, ' ').replace(/(^|\s)\w/g, function (match: string) {
        return match.toUpperCase();
    });
}

// Event emitter to emit PrepareEdit to the parent component
export const emitPrepareEdit = (row: any, action: any, data: any) => {
    const event = new CustomEvent('prepareEdit', {
        detail: { row, action, data }
    });
    window.dispatchEvent(event);
};

// Event emitter to emit statusUpdate to the parent component
export const emitStatusUpdate = (e: Event) => {
    e.preventDefault()
    const event = new CustomEvent('statusUpdate', {
        detail: e,
    });
    window.dispatchEvent(event);
};

// Event emitter to emit emitAjaxPost to the parent component
export const emitAjaxPost = (e: any) => {
    e.preventDefault()
    const event = new CustomEvent('ajaxPost', {
        detail: e,
    });
    window.dispatchEvent(event);
};

// Event emitter to emit emitAjaxPost to the parent component
export const emitAjaxPostDone = (response: any) => {
    const event = new CustomEvent('ajaxPostDone', {
        detail: response,
    });
    window.dispatchEvent(event);
};

export const baseURL = (uri: string) => import.meta.env.VITE_APP_BASE_API + (uri ? uri.replace(/\/+/, '/') : '')

interface Config {
    name: string;
    version: string;
    release: string;
    urls: {
        home: string;
        rolePermissions: string
    };
    storageName: string;
}

export const config: Config = {
    name: import.meta.env.VITE_APP_NAME || 'App name',
    version: 'v1.0',
    release: String(new Date().getFullYear()),
    urls: {
        home: import.meta.env.VITE_APP_HOME || '/',
        rolePermissions: import.meta.env.VITE_APP_ROLE_PERMISSION_PREFIX || '/auth'
    },
    storageName: Str.slug(import.meta.env.VITE_APP_NAME || 'App name')
};

export const environment: 'local' | 'production' = import.meta.env.VITE_APP_ENV || 'local'
export const tnymce_key: string = import.meta.env.VITE_APP_CRYPO_TINYMCE_KEY || ''

export const convertToLaravelPattern = (uri: string) => {
    // Replace :id with {id}
    const laravelPattern = uri.replace(/:\w+/g, (match) => `{${match.substring(1)}}`);
    return laravelPattern;
};

export const appendFromToDates = (useDate: boolean, fromToDates: Array<Date | string | undefined>) => {

    if (useDate && fromToDates && fromToDates.length == 2 && fromToDates[1]) {
        return `&from_date=${fromToDates[0]}&to_date=${fromToDates[1]}`
    }
    return ''

}

export const teamLogo = (logo: string | null | undefined) => {
    return logo ? baseURL(logo) : '/images/default_team_logo.png'
}

export const competitionLogo = (logo: string | null | undefined) => {
    return logo ? baseURL(logo) : '/images/default_team_logo.png'
}

export const countryLogo = (logo: string | null | undefined) => {
    return logo ? baseURL(logo) : '/images/default_team_logo.png'
}
