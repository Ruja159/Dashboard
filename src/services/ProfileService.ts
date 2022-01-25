import { AxiosResponse } from 'axios';
import BaseService from '../services/common/BaseService';
// import { IPost } from './models';

const getProfile = async (data = {}, query = {}): Promise<any> => {
    const baseService = new BaseService();
    const url = '/profileData.json'
    const response: AxiosResponse<any> = await baseService.get(url);
    return response.data;
};

export { getProfile };
export default {};
