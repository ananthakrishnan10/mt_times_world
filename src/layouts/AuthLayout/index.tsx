import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import styles from './authLayout.module.scss';

export function AuthLayout() {
  return (
    <Container
      fluid
      className={`d-flex align-items-center justify-content-center ${styles.authContainer}`}
    >
      <Row className={`w-100 ${styles.maxWidth1024}`}>
        {/* Left Panel */}
        <Col
          xs={12}
          md={6}
          className="p-4 p-md-5 d-flex flex-column justify-content-center"
        >
          <Outlet />
        </Col>

        {/* Right Illustration */}
        <Col
          xs={12}
          md={6}
          className="d-none d-md-flex align-items-center justify-content-center bg-white"
        >
          <img
            src="/auth_illustration.jpg"
            alt="auth illustration"
            className={styles.authImage}
          />
        </Col>
      </Row>
    </Container>
  );
}
