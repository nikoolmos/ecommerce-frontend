import { useCallback, useEffect, useState } from "react";
import { RegisterService } from '../services/registerService';

export function useListingController() {
    const [submit, setSubmit] = useState(false);
    
    useEffect(() => {
         if(submit) {
          RegisterService.register();
         }
    }, [submit]);

    const handleSubmit = useCallback(() => {
        setSubmit(true);
    }, []);

    return {
        handleSubmit,
    };
}
