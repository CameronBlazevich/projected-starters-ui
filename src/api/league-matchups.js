import axios from "axios";
import { createErrorResponse, createSuccessResponse } from "./api-response";

export async function getLeagueMatchupInfo(token, leagueId) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        const config = { "x-access-token": token };
        const resp = await axios.get(
            `${baseUrl}/leagueMatchups/${leagueId}`,
            { headers: config });
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err);
        return createErrorResponse(err);
    }
}