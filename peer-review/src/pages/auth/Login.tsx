import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useLocalState } from '../../util/useLocalStorage';

const Login = () => {
  const navigate = useNavigate();
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (jwt != "") {
      navigate("../");
    }
  }, [jwt]);

  const handleInputChange = (event: any, setState: any) => {
    event.preventDefault();
    const target = event.target;
    setState(target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    authenticateUser();
  }

  const authenticateUser = async () => {
    setIsLoading(!isLoading);

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "user": {
        "email": username,
        "password": password
      }
    });

    var requestOptions = {
      method: 'POST',
      headers: headers,
      body: raw
    };

    const response = await fetch("http://127.0.0.1:3001/login", requestOptions);
    if (response.status == 200) {
      const auth = response.headers.get('Authorization') || "";
      setJwt(auth.split(" ")[1]);
    }

    setIsLoading((prev) => !prev);
  }

  return (
    <div className='d-flex align-items-center justify-content-center w-25 m-auto vh-100'>
      <Form className='w-100'>
        <Form.Group className="mb-3 text-center" controlId="formCompanyLogo">
          <Image src="https://dummyimage.com/171x180/000/fff" roundedCircle />
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
