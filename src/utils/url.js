export const BASE_URL =
    process.env.NODE_ENV === 'production'
        ? process.env.REACT_APP_GITHUB_URL
        : process.env.REACT_APP_LOCAL_URL;
