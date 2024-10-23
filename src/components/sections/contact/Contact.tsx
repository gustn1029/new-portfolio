import { ChangeEvent, useRef } from "react";
import SectionWrap from "../SectionWrap";
import { useMutation } from "@tanstack/react-query";
import { FetchContact } from "../../../utils/http";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { ContactMailData } from "../../../types";
import LabelLayout from "../../inputs/LabelLayout";
import {
  ButtonStyleEnum,
  ButtonStyleList,
} from "../../../types/enum/ButtonEnum";
import Title from "../../title/Title";

import { FaGithub } from "react-icons/fa6";
import { RiNotionFill } from "react-icons/ri";
import LabelInput from "../../inputs/labelInput/LabelInput";
import ErrorToolTip from "../../tooltip/ErrorToolTip";

interface ContactList {
  path: string;
  icon: JSX.Element;
  title: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const contactList: ContactList[] = [
    {
      path: "https://github.com/gustn1029?tab=repositories",
      icon: <FaGithub />,
      title: "GitHub",
    },
    {
      path: "https://www.notion.so/128bd9caac2a804c8212cd287e7a2551?pvs=12",
      icon: <RiNotionFill />,
      title: "Notion",
    },
  ];

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm<ContactMailData>();

  const contactMutation = useMutation<unknown, Error, ContactMailData>({
    mutationFn: () => FetchContact(formRef),
    onSuccess: () => {
      console.log("success");
      toast.success("작성하신 내용을 메일로 전달하였습니다.");
      reset();
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message);
    },
  });

  const onSubmit = async (data: ContactMailData) => {
    await contactMutation.mutateAsync(data);
  };

  // 이메일 정규식
  const rfc5322EmailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (
    <SectionWrap id="contact">
      <Title title="Contact" desc="많은 관심 부탁드립니다." />
      <div className="flex gap-[60px] justify-between items-center">
        <ul className="w-[calc(50%-30px)] flex gap-[30px] items-center justify-center">
          {contactList.map((contact) => (
            <li
              key={`contact__${contact.title}`}
              className={`${
                contact.title === "GitHub" ? "text-[4rem]" : "text-[5rem]"
              } text-gray-400 hover:text-white transition-color`}
            >
              <a href={contact.path} target="_blank">
                {contact.icon}
                <span className="sr-only">{contact.title}</span>
              </a>
            </li>
          ))}
        </ul>
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="w-[calc(50%-30px)] flex flex-col gap-[40px] bg-[#2d3038] p-[30px] rounded-[30px]"
        >
          <LabelInput
            type="email"
            register={register("from_name", {
              required: {
                value: true,
                message: "이메일 주소 입력은 필수입니다.",
              },
              pattern: {
                value: rfc5322EmailRegex,
                message: "올바른 이메일 형식이 아닙니다.",
              },
            })}
            inputId="from_name"
            errors={errors.from_name}
            label="이메일"
            placeholder="이메일을 입력해 주세요."
          />
          <LabelInput
            register={register("phone_number")}
            inputId="phone_number"
            errors={errors.phone_number}
            label="전화번호"
            placeholder="하이픈(-)을 포함한 전화번호를 입력해 주세요."
          />
          <LabelLayout inputId="message" label="내용">
            <textarea
              className="rounded-[20px] resize-none min-h-[200px] p-[20px]"
              placeholder="내용을 입력해 주세요."
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
            {errors && errors.message && errors.message.message && (
              <ErrorToolTip message={errors.message.message} />
            )}
          </LabelLayout>
          <input
            className={`block py-[10px] px-[20px] text-white cursor-pointer ${
              ButtonStyleList[ButtonStyleEnum.PRIMARY].value
            } rounded-[10px]`}
            type="submit"
            value="전송하기"
          />
        </form>
      </div>
    </SectionWrap>
  );
};

export default Contact;
