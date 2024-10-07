import { Link } from "react-router-dom";
import { ButtonStyleEnum, ButtonStyleList } from "../../types/enum/ButtonEnum";

interface LinkButtonProps {
  children: React.ReactNode;
  buttonStyle?: ButtonStyleEnum;
  href: string;
  buttonClassName?: string;
}

/**
 * 기능 설정 버튼
 *
 * @param type 버튼 타입 설정
 * @param children 버튼 문구
 * @param buttonStyle 버튼의 스타일을 설정(ButtonStyleEnum)
 * @param props 버튼 태그에서 사용하는 기능 props로 전달하여 사용 가능
 * @returns
 */
const LinkButton = ({
  children,
  buttonStyle = ButtonStyleEnum.PRIMARY,
  href,
  buttonClassName,
  ...props
}: LinkButtonProps) => {
  return (
    <Link
      to={href}
      className={`px-[20px] py-[10px] rounded-[10px] transition-all duration-300 ${
        ButtonStyleList[buttonStyle].value
      } ${buttonClassName ? buttonClassName : ""}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
