export const environment = process.env.NODE_ENV || "development"
export const backendURL = process.env.NODE_ENV === 'production' ? 'https://coffee-hub.herokuapp.com' : process.env.REACT_APP_BACKEND_URL
