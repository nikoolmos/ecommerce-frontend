import { useCallback } from "react";
import RegisterForm, { RegistryValues } from "./layout/registerForm";
import { useRegisterController } from "./useRegisterController";

export default function RegisterPage() {
    const { handleSubmit } = useRegisterController();

    return (
        <div className="flex flex-col justify-center content-center p-20">
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    );
}