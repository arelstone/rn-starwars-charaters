export const config = {
    BASE_URL: 'https://swapi.dev/api/',
};

export const baseUrl = () => {
    return config.BASE_URL.replace(/\/\s*$/, '');
};
