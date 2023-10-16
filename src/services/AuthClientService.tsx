import axios from 'axios';
import { UserData } from '../models/UserModel';

const API_URL = 'http://localhost:8080/api/v1/auth'; 

class AuthClientService {
    async register(userData: UserData): Promise<any> {
      try {
        const response = await axios.post(`${API_URL}/register`, userData);
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