import { NavLink } from "react-router-dom";

const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
  isActive ? "active" : "";

export function NavBar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={`employees`} className={navLinkStyle}>
            Employees
          </NavLink>
        </li>
        <li>
          <NavLink to="/tribes" className={navLinkStyle}>
            Tribes
          </NavLink>
        </li>
        <div className="separator-line"></div>
        <li>
          {/* <NavLink to={`employee-report`} className={navLinkStyle}>
            Employees Report
          </NavLink> */}
        </li>
      </ul>
    </nav>
  );
}
