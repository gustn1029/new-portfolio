import { useNavigate } from "react-router-dom";
import NavBar, { NavItem } from "../navBar/NavBar";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();
  const [isFlying, setIsFlying] = useState<boolean>(false);
  const navItem: NavItem[] = [
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#projects" },
  ];

  useEffect(() => {
    const handleScrollPosition = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = headerRef.current?.clientHeight;

      if (headerHeight && scrollPosition >= headerHeight) {
        setIsFlying(true);
      } else {
        setIsFlying(false);
      }
    };

    window.addEventListener("scroll", handleScrollPosition);

    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, []);

  const handleClickLogo = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };
  return (
    <header
      className={`w-full fixed left-[50%] translate-x-[-50%] top-0 py-[10px] z-[100] ${
        isFlying ? "bg-[rgba(28,30,36,0.85)]" : ""
      }`}
      ref={headerRef}
    >
      <div className="inner flex w-full justify-between items-center gap-[30px]">
        <button type="button" onClick={handleClickLogo}>
          <h1>
            <em className="font-bold text-white text-[1.7rem]">
              <span className="text-primary">K</span>HS
            </em>
            <span className="inline-block indent-[-9999px]">portfolio</span>
          </h1>
        </button>
        <NavBar navItem={navItem} />
      </div>
    </header>
  );
};

export default Header;
