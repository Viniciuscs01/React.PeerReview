import { Outlet, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


const Header = () => {

  const { user } = useContext(AuthContext)

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to={""}>{user.company?.name}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={""}>Home</Nav.Link>
            <Nav.Link as={Link} to={"my-reviews"}>My Reviews</Nav.Link>
            <Nav.Link as={Link} to={"given-reviews"}>Given Reviews</Nav.Link>
            {user.role == "admin" && <Nav.Link as={Link} to={"given-reviews"}>Manage Reviews</Nav.Link>}
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: {user.name}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
};
export default Header;
