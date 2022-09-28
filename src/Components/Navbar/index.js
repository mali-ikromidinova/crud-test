import { Nav, NavbarLink, NavbarLinks, NavbarTitle } from "./NavbarElements";

const Navbar = () => {
  return (
    <Nav>
      <NavbarTitle>Telecom Carrier</NavbarTitle>
      <NavbarLinks className="links">
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/create">Add New Item</NavbarLink>
      </NavbarLinks>
    </Nav>
  );
};

export default Navbar;
