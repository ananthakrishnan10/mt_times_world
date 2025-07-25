import { Outlet } from 'react-router-dom';
import styles from './dashboardLayout.module.scss';
import { Container } from 'react-bootstrap';

export function DashboardLayout() {
  return (
    <Container
      fluid
      className={`d-flex justify-content-center ${styles.dashboardContainer}`}
    >
      <div className={styles.maxWidthContainer}>
        <Outlet />
      </div>
    </Container>
  );
}
