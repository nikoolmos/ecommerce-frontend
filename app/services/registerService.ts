'use server';
import { API_URL } from "../utils/constants";

export class RegisterService {

    public static async register() {
        const endpoint = `${API_URL}/auth/register`;
        
        try {
            const result = globalThis.fetch(endpoint, {
                method: 'POST'
            });
            
            return result;
        } catch(error) {
            throw new Error('Cant Register New User');
        }
        
    }
}