import { Link } from "react-router-dom";
interface ResponsiveNav {
  isMobileNavOpen: boolean;
}
const ResponsiveNav = ({ isMobileNavOpen }: ResponsiveNav) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen z-10 w-full backdrop-blur-3xl transition-transform duration-300 ease-in-out overflow-hiddenbg-[#0a0c0f]/70 ${
        isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full p-5">
        <div className="flex flex-col items-start justify-end gap-4 h-full text-white font-sans heading-font text-5xl leading-14 font-semibold">
          <Link to={"#"} onClick={(e) => e.preventDefault()}>
            About
          </Link>
          <Link to={"#"} onClick={(e) => e.preventDefault()}>
            Uses
          </Link>
          <Link to={"#"} onClick={(e) => e.preventDefault()}>
            Post
          </Link>
          <Link to={"#"} onClick={(e) => e.preventDefault()}>
            Work
          </Link>
          <Link to={"#"} onClick={(e) => e.preventDefault()}>
            Contact
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default ResponsiveNav;
