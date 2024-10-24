export enum ButtonStyleEnum {
  PRIMARY,
  NORMAL,
  DANGER,
  SUBMIT,
}

export const ButtonStyleList = [
  {
    type: ButtonStyleEnum.PRIMARY,
    value: "bg-gradient-to-r from-blue-500 to-blue-700 text-white",
  },
  { type: ButtonStyleEnum.NORMAL, value: "" },
  { type: ButtonStyleEnum.DANGER, value: "bg-[#ef4444] text-white" },
  { type: ButtonStyleEnum.SUBMIT, value: "bg-gray-700 text-gray-500" },
];
