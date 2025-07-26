import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './sectionHeader.module.scss';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <Container
      className={`${styles.sectionHeader} d-flex flex-column flex-md-row gap-2 align-items-center my-4`}
    >
      <div className={`${styles.line} mb-auto w-100 w-md-auto flex-grow-1`} />
      <h2 className="px-3 m-0">{title}</h2>
      <div className={`${styles.line} mt-auto w-100 w-md-auto flex-grow-1`} />
    </Container>
  );
};
