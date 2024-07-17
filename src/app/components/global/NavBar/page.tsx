import Link from "next/link";

const navItems = {
  "/": {
    name: "Home",
  },
  "/about": {
    name: "About",
  },
  "/projects": {
    name: "Projects",
  }, 
  "/contact": {
    name: "Contact",
  },
};

export default function NavBar() {
  return (
    <div className="flex p-4 bg-[--brown-transparent] items-center justify-center rounded-b-[40px]">
      <nav className="flex flex-row" id="nav">
        <div className="flex flex-row">
          <Link href={'/'}>
            <h2 className="text-6xl animate-fade-in">Chase</h2>
          </Link>
        </div>
      </nav>
    </div>
  );
}
