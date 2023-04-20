import axios from 'axios'
import { createErrorResponse, createSuccessResponse } from "./api-response";



export async function createTeam(token, teamId, leagueId, teamNickname) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        // console.log(`calling setTeamId with token: ${token} and teamId ${teamId}`)
        const config = { "x-access-token": token };
        const body = { teamId, leagueId, teamNickname }
        const resp = await axios.post(
            `${baseUrl}/userTeams/createUserTeam`,
            body,
            { headers: config });
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err);
        return createErrorResponse(err.response);
    }
}

export async function getRosteredProbablePitchers(token, leagueId, teamId) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        console.log(`calling getRosteredProbablePitchers...`)
        const config = { "x-access-token": token };
        const resp = await axios.get(`${baseUrl}/roster/getProjectedStarters/${leagueId}/${teamId}`, { headers: config });
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err);
        return createErrorResponse(err.response);
    }
}