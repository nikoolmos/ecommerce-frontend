import { useCallback, useEffect, useState } from "react";
import { LoginService } from '../services/loginService';

export function useLoginController() {
    const [submit, setSubmit] = useState(false);
    
    useEffect(() => {
         if(submit) {
          LoginService.login();
         }
    }, [submit]);

    const handleSubmit = useCallback(() => {
        setSubmit(true);
    }, []);

    return {
        handleSubmit,
    };
}
