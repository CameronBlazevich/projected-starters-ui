import axios from "axios";
import { createErrorResponse, createSuccessResponse } from "./api-response";


export async function getTeamStats() {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        const resp = await axios.get(`${baseUrl}/teamStats`);
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err);
        return createErrorResponse(err);
    }
}
