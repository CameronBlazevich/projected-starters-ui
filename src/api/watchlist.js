import axios from "axios";
import { createErrorResponse, createSuccessResponse } from "./api-response";


export async function getWatchedPlayers(token, leagueId) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        console.log(`calling getWatchedPlayers...`)
        const config = { "x-access-token": token };
        const resp = await axios.get(`${baseUrl}/watchlist/${leagueId}`, { headers: config });
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err);
        return createErrorResponse(err);
    }
}

export async function getWatchedPlayerIds(token, leagueId) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        console.log(`calling getWatchedPlayers...`)
        const config = { "x-access-token": token };
        const resp = await axios.get(`${baseUrl}/watchlist/getPlayerIds/${leagueId}`, { headers: config });
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err);
        return createErrorResponse(err);
    }
}

export async function addToWatchlistEntry(token, request) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        const config = { "x-access-token": token };
        const body = request;
        const resp = await axios.post(
            `${baseUrl}/watchlist/addToWatchlist`,
            body,
            { headers: config });
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err);
        return createErrorResponse(err);
    }
}

export async function removeFromWatchlistEntry(token, request) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        const config = { "x-access-token": token };
        const body = request;
        const resp = await axios.post(
            `${baseUrl}/watchlist/removeFromWatchlist`,
            body,
            { headers: config });
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err);
        return createErrorResponse(err);
    }
}
