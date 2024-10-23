import emailjs from "@emailjs/browser";
import { QueryClient } from "@tanstack/react-query";
import { FormEvent } from "react";

export const queryClient = new QueryClient()

export const FetchContact = async (e:FormEvent<HTMLFormElement>, formRef: React.RefObject<HTMLFormElement>) => {
    if (!formRef.current) throw new Error("Form reference is null");
    
    e.preventDefault();

    try {
        const result = await emailjs.sendForm(
            "YOUR_SERVICE_ID", 
            "YOUR_TEMPLATE_ID", 
            formRef.current, 
            {
                publicKey: "YOUR_PUBLIC_KEY",
            }
        );
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("메일 발송 중 에러가 발생했습니다.");
    }
};
