import axios from "axios"
import { createErrorResponse, createSuccessResponse } from "./api-response";

export async function setCode(token, code) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        // console.log(`calling setCode with token: ${token} and code${code}`)
        const config = { "x-access-token": token };
        const body = { code }
        const resp = await axios.post(
            `${baseUrl}/yahoo/setCode`,
            body,
            { headers: config });
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err)
        return createErrorResponse(err);
    }
}

