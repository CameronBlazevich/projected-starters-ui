import axios from "axios";
import { createErrorResponse, createSuccessResponse } from "./api-response";


export async function getGameWeather() {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        console.log(`calling getGameWeather...`)
        
        const resp = await axios.get(`${baseUrl}/weather/`);
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err);
        return createErrorResponse(err);
    }
}