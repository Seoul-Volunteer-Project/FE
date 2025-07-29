import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./GlobalSidebarLayout.css";

function GlobalSidebarLayout({ menuItems }) {
  const location = useLocation();

  return (
    <div className="layout">
      <aside className="sidebar">
        {menuItems.map(({ label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive || location.pathname.startsWith(path)
                ? "active-link"
                : ""
            }
          >
            {label}
          </NavLink>
        ))}
      </aside>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default GlobalSidebarLayout;
