import Str from "./Str";

export function convertToTitleCase(str: string) {
    return str.toLowerCase().replace(/_/g, ' ').replace(/(^|\s)\w/g, function (match: string) {
        return match.toUpperCase();
    });
}


// Event emitter to emit emitAutoPost to the parent component
export const emitAutoPost = (e: any) => {
    e.preventDefault()
    const event = new CustomEvent('autoPost', {
        detail: e,
    });
    window.dispatchEvent(event);
};

export const baseURL = (uri: string) => {

    let base = String(import.meta.env.VITE_APP_BASE_API)
    base = base.endsWith('/') ? base : base + '/'

    if (uri) {

        // remove repeated slashes
        uri = uri.replace(/\/+/, '/')
        // remove first slash
        uri = uri.endsWith('/') === false ? uri : Str.afterFirst(base, '/')
        base = base + uri
    }

    return base

}

interface Config {
    name: string;
    version: string;
    release: string;
    urls: {
        home: string;
    };
    storageName: string;
}

export const config: Config = {
    name: import.meta.env.VITE_APP_NAME || 'App name',
    version: 'v1.0',
    release: String(new Date().getFullYear()),
    urls: {
        home: import.meta.env.VITE_APP_HOME || '/'
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
