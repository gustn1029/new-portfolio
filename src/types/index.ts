import { ReactNode } from "react";
import { FieldErrors } from "react-hook-form";

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
  from_email: string;
  message: string;
}

export interface LabelLayoutProps {
  label: string;
  children: ReactNode;
  errors: FieldErrors<ContactMailData>;
  inputId: string;
}
