import React, { useEffect } from "react";
import Logo from "../../images/logo.png";
import Hamburger from "./hamburger";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeMenu, toggleMenu } from "../../redux/slices/mobileMenu";
import { useMediaQuery } from "react-responsive";
import {
  HeaderContainer,
  LogoContainer,
  Navigation,
  Line,
  NavLink,
  NoLinks,
} from "./headerStyling";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch(); // Add this line
  const menuOpen = useSelector((state) => state.MenuOpenSlice.open); // Ensure the correct slice name is used
  const isNotMobile = useMediaQuery({ query: "(min-width: 768px)" });

  const handleLogoClick = () => navigate("/");

  const handleToggleMenu = () => {
    dispatch(toggleMenu()); // Dispatch the toggleMenu action
  };

  useEffect(() => {
    if (isNotMobile) {
      dispatch(closeMenu()); // Close the menu when the screen size changes
    }
  }, [isNotMobile, dispatch]);

  const links = [
    { name: "home", path: "/" },
    { name: "destination", path: "/destination" },
    { name: "crew", path: "/crew" },
    { name: "technology", path: "/technology" },
  ];

  return (
    <HeaderContainer>
      <Hamburger onClick={handleToggleMenu} /> {/* Use the handler function */}
      <LogoContainer
        src={Logo}
        alt="company logo"
        id="logo"
        onClick={handleLogoClick}
      />
      <Line />
      <Navigation role="navigation" className={menuOpen ? "active" : ""}>
        {links.length === 0 ? (
          <NoLinks>No links available</NoLinks>
        ) : (
          links.map((link, i) => (
            <NavLink
              aria-label={`link to the ${link.name} page`}
              tabIndex={0}
              key={i}
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
              onClick={() => dispatch(closeMenu())}
            >
              <span>0{i}</span> {link.name.toUpperCase()}
            </NavLink>
          ))
        )}
      </Navigation>
    </HeaderContainer>
  );
}
