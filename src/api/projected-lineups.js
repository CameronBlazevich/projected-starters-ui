import axios from "axios";
import { createErrorResponse, createSuccessResponse } from "./api-response";


export async function getProjectedLineups(leagueId, teamId, token) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        const config = { "x-access-token": token }; 
        const resp = await axios.get(`${baseUrl}/projectedLineups/${leagueId}/${teamId}`,
            { headers: config }
        );
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err);
        return createErrorResponse(err);
    }
}