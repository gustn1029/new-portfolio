import { ChangeEvent, FormEvent, useRef } from "react";
import SectionWrap from "../SectionWrap";
import { useMutation } from "@tanstack/react-query";
import { FetchContact } from "../../../utils/http";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { ContactMailData } from "../../../types";
import ErrorToolTip from "../../tooltip/ErrorToolTip";
import LabelLayout from "../../inputs/LabelLayout";
import {
  ButtonStyleEnum,
  ButtonStyleList,
} from "../../../types/enum/ButtonEnum";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const contactMutation = useMutation<
    unknown,
    Error,
    FormEvent<HTMLFormElement>
  >({
    mutationFn: (e) => FetchContact(e, formRef),
    onSuccess: () => {
      console.log("success");
      toast.success("작성하신 내용을 메일로 전달하였습니다.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm<ContactMailData>();

  const onSubmit = async () => {
    reset();
  };

  // 이메일 정규식
  const rfc5322EmailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (
    <SectionWrap id="contact">
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <LabelLayout inputId="from_mail" errors={errors} label="이메일">
          <input
            type="email"
            id="from_mail"
            {...register("from_email", {
              required: {
                value: true,
                message: "이메일 주소를 입력해 주세요.",
              },
              pattern: {
                value: rfc5322EmailRegex,
                message: "올바른 이메일 형식이 아닙니다.",
              },
            })}
          />
        </LabelLayout>
        <LabelLayout inputId="message" errors={errors} label="내용">
          <textarea
            id="message"
            {...register("message", {
              required: {
                value: true,
                message: "전달하실 내용을 입력해 주세요.",
              },
              maxLength: {
                value: 1000,
                message: "내용은 최대 1000자까지 입력 가능합니다.",
              },
              onChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
                const value = e.target.value;
                if (value.length > 1000) {
                  setValue("message", value.slice(0, 1000));
                }
              },
            })}
          ></textarea>
        </LabelLayout>
        <input
          className={`block py-[10px] px-[20px] text-white ${
            ButtonStyleList[ButtonStyleEnum.PRIMARY].value
          } rounded-[10px]`}
          type="submit"
          value="전송하기"
        />
      </form>
    </SectionWrap>
  );
};

export default Contact;
