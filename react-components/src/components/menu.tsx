import { NavLink } from 'react-router-dom';
export default function Menu() {
  const activeClassName = 'active';
  return (
    <nav>
      <div className="nav-center">
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutUs"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/delivery"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              Delivery Page
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
