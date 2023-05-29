// these should probabaly be in a .env file instead of hardcoded
const BASE_API_URL = "http://localhost:5000/"
const AUTH_BEARER = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

export async function apiGet (url) {
    let res
    try {
        res = await fetch(BASE_API_URL+url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+AUTH_BEARER
            }
        })
        //res = (await res.json())
    } catch(err) {
        res = {
            ok: false,
            status: 500,
            headers: '',
            json: async () => { return {
                code: 500,
                message: 'Error! Could not reach the API',
                description: err
            }}
        }
    }
    return {
        ok: res.ok,
        status: res.status,
        headers: res.headers,
        body: res.status !== 204 ? await res.json() : null
    }
}
/* for future use
export async function apiPost (url,body) {
    let res = null
    try {
        const res = await fetch(BASE_API_URL+url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+AUTH_BEARER
            },
            body: body ? JSON.stringify(body) : null
        })
        res = (await res.json())
    } catch(err) {
        res = null
        console.log('Error! could not reach the API')
        console.log(err)
    }
    return res
}
*/