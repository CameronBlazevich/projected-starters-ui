import axios from "axios";
import { createErrorResponse, createSuccessResponse } from "./api-response";


export async function getUserLeagues(token) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        console.log(`calling getUserLeagues...`)
        const config = {"x-access-token": token};
        const resp = await axios.get(`${baseUrl}/leagues/getUserLeagues`, {headers: config});
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err);
        return createErrorResponse(err);
    }
}