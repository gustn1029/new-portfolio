import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-[30px] bg-[#1f2127] rounded-[20px_20px_0_0]">
      <section className="inner flex justify-between items-center">
        <strong className="text-[1.3rem] text-gray-600">
            KHS Portfolio
        </strong>
        <p className="text-gray-600 text-[0.8rem]">
          Copyright ⓒ 2024 KimHyeonSoo all rights reserved.
        </p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/%ED%98%84%EC%88%98-%EA%B9%80-a13b31129/"
              target="_blank"
              className="block text-[2rem] text-gray-500"
            >
              <FaLinkedin />
              <span className="sr-only">김현수 링크드인 주소</span>
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
