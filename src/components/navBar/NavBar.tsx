export interface NavItem {
  text: string;
  href: string;
}

interface NavBarProps {
  navItem: NavItem[];
}

const NavBar = ({ navItem }: NavBarProps) => {
  return (
    <nav className="text-white">
      <ul className="flex gap-[30px]">
        {navItem.map((el) => (
          <li key={`${el.text}__${el.href}`}>
            <a href={el.href}  className={`block uppercase px-[15px] py-[10px]`} >{el.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
