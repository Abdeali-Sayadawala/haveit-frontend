import ENDPOINTS from './Endpoints.jsx';

const BASE_URL = process.env.REACT_APP_API_BASEURL;

class ApiManager {
    static register = (params) => {
        const url = BASE_URL + ENDPOINTS.REGISTER();
        const raw = JSON.stringify({
            "first_name": params.first_name,
            "last_name": params.last_name,
            "email": params.email,
            "password": params.password
        });
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: raw,
            redirect: "follow"
        };

        return fetch(url, requestOptions)
    }
}

export default ApiManager;