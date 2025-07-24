import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const schema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
      'Must include 1 uppercase letter, 1 number, and 1 symbol'
    ),
  remember: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

export function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    navigate('/dashboard');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="fw-bold mb-3">Sign In</h3>
      <p className="mb-4">
        <small>
          New user? <a href="/auth/register">Create an account</a>
        </small>
      </p>

      <Form.Group controlId="username" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Username or email"
          {...register('username')}
          isInvalid={!!errors.username}
        />
        <Form.Control.Feedback type="invalid">
          {errors.username?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="password" className="mb-3">
        <Form.Control
          type="password"
          placeholder="Password"
          {...register('password')}
          isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group
        controlId="remember"
        className="d-flex align-items-center mb-4"
      >
        <Form.Check
          type="checkbox"
          label="Keep me signed in"
          {...register('remember')}
          className="me-2"
        />
      </Form.Group>

      <Button type="submit" variant="dark" className="w-100 mb-4 py-2">
        Sign In
      </Button>

      <div className="d-flex align-items-center mb-3">
        <div className="flex-grow-1 border-bottom"></div>
        <div className="mx-2 text-muted small">Or Sign In With</div>
        <div className="flex-grow-1 border-bottom"></div>
      </div>

      <Row className="text-center">
        <Col>
          <Button variant="outline-dark" className="rounded-circle me-2">
            <FaGoogle />
          </Button>
          <Button variant="outline-dark" className="rounded-circle me-2">
            <FaFacebook />
          </Button>
          <Button variant="outline-dark" className="rounded-circle me-2">
            <FaLinkedin />
          </Button>
          <Button variant="outline-dark" className="rounded-circle">
            <FaTwitter />
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
