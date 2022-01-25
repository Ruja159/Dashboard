import { AxiosResponse } from 'axios';
import BaseService from '../services/common/BaseService';
// import { IPost } from './models';

const getAllTransactions = async (data = {}, query = {}): Promise<any> => {
    console.log("GET ASYNC TRANSACTIONS")
    const baseService = new BaseService();
    const url = '/transactions.json'
    const response: AxiosResponse<any> = await baseService.get(url);
    return response.data;
};

export { getAllTransactions };
export default {};
