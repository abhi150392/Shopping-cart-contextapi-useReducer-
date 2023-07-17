import React from "react";
import { FaShoppingCart } from "react-icons/fa";
// import { AiFillDelete } from "react-icons/ai";
import { Container, Dropdown, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "./styles.css";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="search for a product"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              {/* <Badge>{cart.length}</Badge> */}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 200 }}>
              <span style={{ padding: 10 }}>Cart is Empty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
