import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ title }: { title: string }) => (
  <Link to="/" className="flex gap-2">
    <span>
      <ArrowLeft />
    </span>
    <span>{title}</span>
  </Link>
);

function Header() {
  const location = useLocation();

  const HeaderTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Task Manager";
      case "/add":
        return <NavLink title="Add Todo" />;
      case location.pathname.match(/\/edit\/\d+/)?.input:
        return <NavLink title="Edit Todo" />;
      default:
        return "Task Manager";
    }
  };

  return <nav className="bg-primary text-background p-4">{HeaderTitle()}</nav>;
}

export default Header;
