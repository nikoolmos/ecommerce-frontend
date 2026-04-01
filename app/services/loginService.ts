'use server';
import { API_URL } from "../utils/constants";

export async function login(email: string, password: string) {
        const endpoint = `${API_URL}/auth/login`;

        try {
            const result = await globalThis.fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            return await result.json();

        } catch (error) {
            throw new Error('Cant Login User');
        }
    }

