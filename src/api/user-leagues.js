import axios from "axios";
import { createErrorResponse, createSuccessResponse } from "./api-response";


export async function getUserLeagues(token) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        console.log(`calling getUserLeagues...`)
        const config = { "x-access-token": token };
        const resp = await axios.get(`${baseUrl}/leagues/getUserLeagues`, { headers: config });
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err);
        return createErrorResponse(err);
    }
}

export async function createUserLeague(token, leagueId, leagueTypeId) {
    // validate format league id
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        // console.log(`calling setLeagueId with token: ${token} and leagueId ${leagueId}`)
        const config = { "x-access-token": token };
        const body = { leagueId, leagueTypeId }
        const resp = await axios.post(
            `${baseUrl}/leagues/createUserLeague`,
            body,
            { headers: config });
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err);
        return createErrorResponse(err);
    }
}

export async function deleteUserLeague(token, leagueId) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        // console.log(`calling setLeagueId with token: ${token} and leagueId ${leagueId}`)
        const config = { "x-access-token": token };
        const body = { leagueId }
        const resp = await axios.post(
            `${baseUrl}/leagues/deleteUserLeague`,
            body,
            { headers: config });
        return resp;
    } catch (err) {
        console.error(err);
    }
}