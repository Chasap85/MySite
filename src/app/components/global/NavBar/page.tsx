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
    <div className="flex p-4 bg-linear-gradient items-center justify-center rounded-ee-3xlv">
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
