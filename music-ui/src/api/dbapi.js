// these should probabaly be in a .env file instead of hardcoded
const BASE_API_URL = "http://localhost:5000/"
const AUTH_BEARER = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

export async function apiGet (url) {
    let ret = null
    try {
        const res = await fetch(BASE_API_URL+url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+AUTH_BEARER
            }
        })
        ret = (await res.json())
    } catch(err) {
        ret = null
        console.log('Error! could not reach the API')
        console.log(err)
    }
    return ret
}
/* for future use
export async function apiPost (url,body) {
    let ret = null
    try {
        const res = await fetch(BASE_API_URL+url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+AUTH_BEARER
            },
            body: body ? JSON.stringify(body) : null
        })
        ret = (await res.json())
    } catch(err) {
        ret = null
        console.log('Error! could not reach the API')
        console.log(err)
    }
    return ret
}
*/