import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed left-[50%] translate-x-[-50%] top-0 inner z-[100]">
      <Link to={"/"}>
        <h1>
          <em className="font-bold text-white text-[1.7rem]"><span className="text-[#3b82f6]">K</span>HS</em>
          <span className="inline-block indent-[-9999px]">portfolio</span>
        </h1>
      </Link>
    </header>
  );
};

export default Header;
