import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../lib/nav";

export function SiteNav() {
  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-5">
      <div className="pointer-events-auto flex max-w-full flex-wrap items-center justify-center gap-1 rounded-full border border-white/10 bg-black/50 px-2 py-1.5 backdrop-blur-md">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-neutral-400 hover:text-white"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
