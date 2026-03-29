import { useCallback } from "react";
import RegisterForm, { LoginValues } from "./layout/loginForm";
import { useLoginController } from "./useLoginController";

export default function RegisterPage() {
    const { handleSubmit } = useLoginController();

    return (
        <div className="flex flex-col justify-center content-center p-20">
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    );
}