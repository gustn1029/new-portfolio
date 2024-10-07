export enum ButtonStyleEnum {
  PRIMARY,
  NORMAL,
  DANGER,
}

export const ButtonStyleList = [
  {
    type: ButtonStyleEnum.PRIMARY,
    value: "bg-gradient-to-r from-blue-500 to-blue-700 text-white",
  },
  { type: ButtonStyleEnum.NORMAL, value: "" },
  { type: ButtonStyleEnum.DANGER, value: "bg-[#ef4444] text-white" },
];
