import axios from 'axios';
import { CompanyData } from '../models/CompanyModel';

const API_URL = 'http://localhost:8080/api/v1/company'; 

class AuthClientService {
    async register(companyData: CompanyData): Promise<any> {
      try {
        const response = await axios.post(`${API_URL}/register`, companyData);
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  
    async login(authData: { email: string; password: string }): Promise<any> {
      try {
        const response = await axios.post(`${API_URL}/login`, authData);
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  }
  
  export default new AuthClientService();