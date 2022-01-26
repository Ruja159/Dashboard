import {Axios, AxiosResponse} from 'axios'
import BaseService from "./common/BaseService";

const getAllPaymentActions = async () => {
    const baseService = new BaseService();
    const url = '/paymentActions.json';
    const response: AxiosResponse<any> = await baseService.get(url)
    return response.data
}

export { getAllPaymentActions };
export default {};