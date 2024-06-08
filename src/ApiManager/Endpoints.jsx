const ENDPOINTS = {
    LOGIN: () => 
        `/v1/auth/login`,
    REGISTER: () => 
        `/v1/auth/register`,
    FORGOT_PASS: () => 
        `/v1/auth/forgot-password`,
    RESET_PASS: (token) => 
        `/v1/auth/reset-password?token=${token}`
};

export default ENDPOINTS;