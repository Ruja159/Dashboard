
import axios, { AxiosStatic } from 'axios';

class HttpClient {
    private service: AxiosStatic;

    constructor() {
        const service = axios;
        service.defaults.timeout = 20000;
        service.defaults.baseURL = '../jsonData'
        service.defaults.withCredentials = true;

        this.service = axios;
    }

    async get(tempURL: string) {
        const { service } = this;
        return service.get(tempURL);
    }

    async delete(tempURL: string) {
        const { service } = this;
        return service.delete(tempURL);
    }

    async post(tempURL: string, data: object) {
        const { service } = this;
        return service.post(tempURL, data);
    }

    async put(tempURL: string, data: object) {
        const { service } = this;
        return service.put(tempURL, data);
    }

}

export default HttpClient;