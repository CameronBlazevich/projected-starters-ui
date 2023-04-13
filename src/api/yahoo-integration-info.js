import axios from "axios"

export async function setCode(token, code) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        console.log(`calling setCode with token: ${token} and code${code}`)
        const config = {"x-access-token": token};
        const body = {code}
        const resp = await axios.post(
            `${baseUrl}/yahoo/setCode`,
            body,
            {headers: config});
        return resp;
    } catch (err) {
        console.error(err)
    }
}

export async function setLeagueId(token, leagueId) {
    // validate format league id
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        console.log(`calling setLeagueId with token: ${token} and leagueId ${leagueId}`)
        const config = {"x-access-token": token};
        const body = {leagueId}
        const resp = await axios.post(
            `${baseUrl}/yahoo/setLeagueId`,
            body,
            {headers: config});
        return resp;
    } catch (err) {
        console.error(err);
    }
}

export async function setTeamId(token, teamId) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        console.log(`calling setTeamId with token: ${token} and teamId ${teamId}`)
        const config = {"x-access-token": token};
        const body = {teamId}
        const resp = await axios.post(
            `${baseUrl}/yahoo/setTeamId`,
            body,
            {headers: config});
        return resp;
    } catch (err) {
        console.error(err);
    }
}

export async function getYahooInfo(token) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        console.log(`calling getYahooInfo...`)
        const config = {"x-access-token": token};
        const resp = await axios.get(`${baseUrl}/yahoo/getYahooInfo`, {headers: config});
        return resp;
    } catch (err) {
        console.error(err);
    }
}