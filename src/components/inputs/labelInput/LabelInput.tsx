import LabelLayout from "../LabelLayout";
import { LabelInputProps } from "../../../types";
import ErrorToolTip from "../../tooltip/ErrorToolTip";

const LabelInput = (props: LabelInputProps) => {
  return (
    <LabelLayout {...props}>
      <input
        className="block w-full py-[10px] px-[20px] rounded-[30px] bg-[#23262D] text-gray-400 outline-none"
        type={props.type || "text"}
        id={props.inputId}
        {...props.register}
        placeholder={props.placeholder}
      />
      {props.errors && props.errors.message && props.errors.message && (
            <ErrorToolTip message={props.errors.message} />
          )}
    </LabelLayout>
  );
};

export default LabelInput;
