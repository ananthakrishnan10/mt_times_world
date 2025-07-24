import { useState } from 'react';
import { Button, Card, Row, Col, Spinner } from 'react-bootstrap';
import { useGetCountriesQuery } from '../../store/services/countries';

export function Home() {
  const { data: countries, isLoading } = useGetCountriesQuery();
  const [visible, setVisible] = useState(8);

  if (isLoading) return <Spinner animation="border" />;

  return (
    <>
      <h2 className="text-center my-4">Countries</h2>
      <Row>
        {countries?.slice(0, visible).map((country) => (
          <Col md={6} key={country.name} className="mb-3">
            <Card>
              <Card.Body className="d-flex align-items-center gap-3">
                <img
                  src={country.flag}
                  alt={country.name}
                  width={50}
                  height={30}
                  style={{ objectFit: 'cover' }}
                />
                <div>
                  <h5>{country.name}</h5>
                  <small>{country.region}</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {visible < (countries?.length || 0) && (
        <div className="text-center mt-3">
          <Button onClick={() => setVisible((v) => v + 8)}>Load more</Button>
        </div>
      )}
    </>
  );
}
