export const environment = process.env.NODE_ENV || "development"
export const  backendUrl = process.env.NODE_ENV === 'production' ? `https://coffeehub.herokuapp.com` : 'https://localhost:5000'
