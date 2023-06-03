import axios from "axios";
import { createErrorResponse, createSuccessResponse } from "./api-response";

export async function getScheduledAddDropRecords(token, leagueId, teamId) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        const config = { "x-access-token": token };
    
        const url = `${baseUrl}/roster/scheduleAddDrops/${leagueId}/${teamId}`

        const resp = await axios.get(url, { headers: config });
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err);
        return createErrorResponse(err);
    }
}

export async function addScheduleAddDropRecord(token, args) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        const config = { "x-access-token": token };
    
        const resp = await axios.post(
            `${baseUrl}/roster/scheduleAddDrop`,
            args,
            { headers: config });
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err);
        return createErrorResponse(err);
    }
}

export async function removeScheduleAddDropRecord(token, args) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        const config = { "x-access-token": token };
    
        const resp = await axios.post(
            `${baseUrl}/roster/removeScheduledAddDrop`,
            args,
            { headers: config });
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err);
        return createErrorResponse(err);
    }
}