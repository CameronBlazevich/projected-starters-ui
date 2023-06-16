import axios from 'axios'
import { createErrorResponse, createSuccessResponse } from './api-response';


export async function getLiveGameData() {
    try {
        const url = 'https://statsapi.mlb.com/api/v1.1/game/717909/feed/live';
        const response = await axios.get(url);
        return createSuccessResponse(response.data);
    } catch (error) {
        console.log(error);
        return createErrorResponse(error);
    }
}

export async function getRosteredPlayers(token) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        const config = { "x-access-token": token };
        const resp = await axios.get(
            `${baseUrl}/gamecast/allRosteredPlayers`,
            { headers: config });
        return createSuccessResponse(resp.data);
    } catch (error) {
        console.log(error)
    }
}

