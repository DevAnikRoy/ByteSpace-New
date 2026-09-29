export type NavLink = {
  href: string;
  label: string;
};

export const mainLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "#courses", label: "Courses" },
  { href: "#creators", label: "Creators" },
];

export const authLinks: NavLink[] = [
  { href: "/login", label: "Sign In" },
  { href: "/signup", label: "Join Us" },
];
