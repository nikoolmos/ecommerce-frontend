'use client';
import { useCallback, useEffect, useState } from "react";
import { login } from '../services/loginService';
import { useRouter } from "next/navigation";

export function useLoginController() {
    const [submit, setSubmit] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { push } = useRouter()


    useEffect(() => {
        if (submit) {
            login(email, password)
                .then((result) => {
                    console.log(result)
                    globalThis.localStorage.setItem('token', result.data.accessToken);
                    push('/listing')
                })
        }
    }, [submit]);

    const handleSubmit = useCallback((data: any) => {
        setSubmit(!submit);
        setEmail(data.email)
        setPassword(data.password);
    }, []);

    return {
        handleSubmit,
    };
}
