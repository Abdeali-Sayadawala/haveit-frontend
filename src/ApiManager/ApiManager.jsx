import ENDPOINTS from './Endpoints.jsx';
import ApiMethods from './ApiMethods.jsx';

class ApiManager {
    static register = (params) => {
        const url = ENDPOINTS.REGISTER();
        return ApiMethods.post(url, params, false);
    }

    static login = (params) => {
        const url = ENDPOINTS.LOGIN();
        return ApiMethods.post(url, params, false);
    }

    static forgot_password = (params) => {
        const url = ENDPOINTS.FORGOT_PASS();
        return ApiMethods.post(url, params, false);
    }

    static reset_password = (query, params) => {
        const url = ENDPOINTS.RESET_PASS(query.token);
        return ApiMethods.post(url, params, false);
    }
}

export default ApiManager;