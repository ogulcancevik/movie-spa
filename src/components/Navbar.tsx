import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/navbar.css';
const Navbar = () => {
  const { pathname } = useLocation();
  const routes = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'My List',
      path: '/my-list',
    },
  ];
  const activeLink = useMemo(() => {
    return routes.find((route) => route.path === pathname);
  }, [pathname]);
  return (
    <div className="navbar">
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <a
              className={activeLink === route ? 'active' : ''}
              href={route.path}
            >
              {route.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
