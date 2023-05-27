// these should probabaly be in a .env file instead of hardcoded
export const BASE_API_URL = "http://localhost:5000/"
export const AUTH_BEARER = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

export async function callAPI (url) {
    let ret = null
    try {
        const res = await fetch(BASE_API_URL+url, {
            headers: {'Authorization': 'Bearer '+AUTH_BEARER}
        })
        ret = (await res.json())
    } catch(err) {
        ret = null
        console.log('Error! could not reach the API')
        console.log(err)
    }
    return ret
}
