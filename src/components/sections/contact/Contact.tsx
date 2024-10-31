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
import { SiVelog } from "react-icons/si";
import LabelInput from "../../inputs/labelInput/LabelInput";
import ErrorToolTip from "../../tooltip/ErrorToolTip";

import styles from "./contact.module.css";
import { useInView, motion } from "framer-motion";

interface ContactList {
  path: string;
  icon: JSX.Element;
  title: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const listRef = useRef<HTMLUListElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(listRef, {
    margin: "-70px",
  });

  const isInContactView = useInView(contactRef, {
    margin: "-50px",
  });

  const contactList: ContactList[] = [
    {
      path: "https://github.com/gustn1029?tab=repositories",
      icon: <FaGithub />,
      title: "GitHub",
    },
    {
      path: "https://velog.io/@gustn1029/posts",
      icon: <SiVelog />,
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

  const contactVariants = {
    hidden: { y: 70, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.6,
      },
    },
  };
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.6,
      },
    },
  };

  return (
    <SectionWrap id="contact">
      <motion.div
        ref={contactRef}
        variants={contactVariants}
        initial="hidden"
        animate={isInContactView ? "visible" : "hidden"}
      >
        <Title title="Contact" desc="많은 관심 부탁드립니다." />
        <div className="flex gap-[60px] justify-between items-center">
          <section className={`w-[calc(50%-30px)] relative ${styles.listWrap}`}>
            <h3 className="sr-only">GitHub, Notion 정보</h3>
            <motion.ul
              ref={listRef}
              variants={listVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex gap-[30px] items-center justify-center"
            >
              {contactList.map((contact) => (
                <motion.li
                  key={`contact__${contact.title}`}
                  variants={listItemVariants}
                  className={`text-[4rem] text-gray-400 hover:text-white transition-all`}
                >
                  <a href={contact.path} target="_blank">
                    {contact.icon}
                    <span className="sr-only">{contact.title}</span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </section>
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
                className="rounded-[20px] resize-none min-h-[200px] p-[20px] bg-[#23262D] text-gray-400 outline-none"
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
                ButtonStyleList[ButtonStyleEnum.SUBMIT].value
              } rounded-[10px]`}
              type="submit"
              value="전송하기"
            />
          </form>
        </div>
      </motion.div>
    </SectionWrap>
  );
};

export default Contact;
