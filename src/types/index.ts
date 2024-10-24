import { ReactNode } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface CareerItem {
  period: string;
  company?: string;
  education?: string;
  desc: string[];
}

export interface ProjectOption {
  title: string;
  path: string;
  image: string;
  skills: string[];
  desc: string;
  projectInfo: string[];
}

export interface ContactMailData {
  from_name: string;
  message: string;
  phone_number: string;
}

export interface LabelLayoutProps {
  label: string;
  children?: ReactNode;
  inputId: string;
}

export interface LabelInputProps extends LabelLayoutProps {
  register: UseFormRegisterReturn<string>;
  type?: "text" | "number" | "date" | "password" | "file" | "email";
  placeholder?: string;
  errors?: FieldError;
}