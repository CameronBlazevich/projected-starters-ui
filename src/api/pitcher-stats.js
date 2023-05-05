import axios from "axios";
import { createErrorResponse, createSuccessResponse } from "./api-response";


export async function getPitcherGameLog(token, pitcherId) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        const config = { "x-access-token": token };
        const resp = await axios.get(
            `${baseUrl}/pitcherStats/gameLog/${pitcherId}`,
            { headers: config });
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err);
        return createErrorResponse(err);
    }
}


export async function getPitcherSplits(token, playerId) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        const config = {"x-access-token": token};
        const resp = await axios.get(
            `${baseUrl}/pitcherStats/splits/${playerId}`, 
            { headers: config }
        );
        return createSuccessResponse(resp.data);
    } catch (err) {
        return createErrorResponse(err);
    }
}

export async function getSeasonStats(token, playerId) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        const config = {"x-access-token": token};
        const resp = await axios.get(
            `${baseUrl}/pitcherStats/seasons/${playerId}`, 
            { headers: config }
        );
        return createSuccessResponse(resp.data);
    } catch (err) {
        return createErrorResponse(err);
    }
}