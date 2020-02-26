import httpClient from '../base.service'

// Example service, let use this syntax with your code
export const signIn = (body) => {
    return httpClient.post(`auth/login`, body) // change link api
}