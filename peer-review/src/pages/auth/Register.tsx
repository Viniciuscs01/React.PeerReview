import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='d-flex align-items-center justify-content-center w-25 m-auto vh-100'>
      <Form className='w-100'>
        <Form.Group className="mb-3 text-center" controlId="formCompanyLogo">
          <Image src="https://dummyimage.com/171x180/000/fff" roundedCircle />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control type="password" placeholder="Confirm your Password" />
        </Form.Group>

        <Form.Group className="d-flex flex-row-reverse justify-content-between" controlId="formBasicButtons">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Link to={"../login"} >
            <Button variant="secondary">Login</Button>
          </Link>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Register
