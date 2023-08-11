import { useContext, useState } from 'react';
import { Spinner, ToastContainer } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { Link, Outlet, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Toast from 'react-bootstrap/Toast'

const Login = () => {
  let params = useParams();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [show, setShow] = useState(false);

  const { authenticateUser, error } = useContext(AuthContext);

  const handleInputChange = (event: any, setState: any) => {
    const target = event.target;
    setState(target.value)
  }

  const handleSubmit = async (event: any) => {
    setIsLoading(true);
    event.preventDefault();
    await authenticateUser(username, password, params.id || "");

    !!error && setShow(true);

    setIsLoading((prev) => !prev);
  }

  return (
    <div className='d-flex align-items-center justify-content-center w-25 m-auto vh-100'>
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
        <Toast bg='danger' onClose={() => setShow(false)} show={show} delay={5000} autohide>
          <Toast.Header>
            <strong className="me-auto">Error</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>{error}</Toast.Body>
        </Toast>
      </ToastContainer>
      <Form className='w-100'>
        <Form.Group className="mb-3 text-center" controlId="formCompanyLogo">
          <Image src="https://dummyimage.com/180x180/000/fff" roundedCircle />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={username} required={true} onChange={(e) => handleInputChange(e, setUsername)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} required={true} onChange={(e) => handleInputChange(e, setPassword)} />
        </Form.Group>

        <Form.Group className="d-flex flex-row-reverse justify-content-between" controlId="formBasicButtons">
          <Button variant="primary" type="submit" onClick={handleSubmit} disabled={isLoading}>{isLoading ? <Spinner animation="border" size="sm" /> : "Submit"}</Button>
          <Link to={"../register"} >
            <Button variant="secondary" disabled={isLoading}>Register</Button>
          </Link>
        </Form.Group>
      </Form>
      <Outlet />
    </div >
  )
}

export default Login
