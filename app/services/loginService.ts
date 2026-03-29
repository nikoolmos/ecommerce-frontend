'use server';
import { API_URL } from "../utils/constants";

export class LoginService {

    public static async login() {
        const endpoint = `${API_URL}/auth/login`;
        
        try {
            const result = await globalThis.fetch(endpoint, {
                method: 'POST'
            });
            
            return result;
        } catch(error) {
            throw new Error('Cant Login User');
        }
    }

};
