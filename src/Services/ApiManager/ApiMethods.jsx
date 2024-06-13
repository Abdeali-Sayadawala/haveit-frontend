const BASE_URL = process.env.REACT_APP_API_BASEURL;

const getHeaders = (authentication) => {
    if (!authentication){
        return {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }
    else {
        return {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }    
}

class ApiMethods {
    static apiRequest(method, url, authentication, body = {}){
        url = BASE_URL + url;
        const requestOptions = {
            method: method,
            headers: getHeaders(authentication),
            body: JSON.stringify(body)
        };

        return new Promise((resolve, reject) => {
            fetch(url, requestOptions)
                .then((res) => {
                    // 1. check response.ok
                    if (res.ok) {
                        return res.json();
                    }
                    return reject(res); // 2. reject instead of throw
                })
                .then(resolve)
                .catch(reject)
        })
    }

    static get(url, authentication) {
        return this.apiRequest('GET', url, authentication=authentication);
    }

    static post(url, body, authentication) {
        return this.apiRequest('POST', url, authentication=authentication, body=body);
    }

    static put(url, body, authentication) {
        return this.apiRequest('POST', url, authentication=authentication, body=body);
    }

    static delete(url, authentication) {
        return this.apiRequest('DELETE', url, authentication=authentication);
    }
}

export default ApiMethods