import axios from "axios";
import { createErrorResponse, createSuccessResponse } from "./api-response";


export async function getPitcherHitterMatchupHistory(token, request) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        const config = { "x-access-token": token };
        const body = request;
        const resp = await axios.post(
            `${baseUrl}/pitcherHitterMatchups`,
            body,
            { headers: config });
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err);
        return createErrorResponse(err);
    }
}