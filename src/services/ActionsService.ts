import { AxiosResponse } from 'axios';
import BaseService from '../services/common/BaseService';
// import { IPost } from './models';

const getActions = async (data = {}, query = {}): Promise<any> => {
    const baseService = new BaseService();
    const url = '/actionsData.json'
    const response: AxiosResponse<any> = await baseService.get(url);
    return response.data;
};

export { getActions };
export default {};
