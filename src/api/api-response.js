export const createErrorResponse = (err) => {
    const response = {success: false, error: err};
    return response;
}

export const createSuccessResponse = (responseData) => {
    const response = {success: true, data: responseData}
    return response;
}