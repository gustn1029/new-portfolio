import emailjs from "@emailjs/browser";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const FetchContact = async (
  formRef: React.RefObject<HTMLFormElement>
) => {
  if (!formRef.current) throw new Error("Form reference is null");

  try {
    const result = await emailjs.sendForm(
      import.meta.env.VITE_MAIL_ID,
      import.meta.env.VITE_MAIL_TEMPLET_ID,
      formRef.current,
      {
        publicKey: import.meta.env.VITE_MAIL_KEY,
      }
    );
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("메일 발송 중 에러가 발생했습니다.");
  }
};
