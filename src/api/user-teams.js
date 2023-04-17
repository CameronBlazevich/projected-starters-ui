import { createErrorResponse, createSuccessResponse } from "./api-response";


export async function createTeam(token, teamId, leagueId, teamNickname) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        // console.log(`calling setTeamId with token: ${token} and teamId ${teamId}`)
        const config = { "x-access-token": token };
        const body = { teamId, leagueId, teamNickname }
        const resp = await axios.post(
            `${baseUrl}/teams/createTeam`,
            body,
            { headers: config });
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err);
        return createErrorResponse(err);
    }
}