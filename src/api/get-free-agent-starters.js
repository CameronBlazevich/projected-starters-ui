import axios from "axios"

export default async function getData(token) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        console.log(`calling getData with token: ${token}`)
        const resp = await axios({
            url: `${baseUrl}/getfreeagents/3/1`,
            method: 'get'
        });

        return resp;
    } catch (err) {
        console.error(err)
    }
}
