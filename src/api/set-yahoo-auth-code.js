import axios from "axios"

export default async function setCode(token, code) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        console.log(`calling setCode with token: ${token} and code${code}`)
        const config = {"x-access-token": token};
        const body = {code}
        const resp = await axios.post(
            `${baseUrl}/setCode`,
            body,
            {headers: config});
        return resp;
    } catch (err) {
        console.error(err)
    }
}
