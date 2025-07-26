import { useState } from 'react';
import {
  Button,
  Card,
  Row,
  Col,
  Spinner,
  Nav,
  Offcanvas,
  Navbar,
  Container,
} from 'react-bootstrap';
import { useGetCountriesQuery } from '../../store/services/countries';
import { Slider, SectionHeader } from '../../components';

const REGIONS = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export function Home() {
  const [region, setRegion] = useState('All');
  const [visible, setVisible] = useState(8);
  const [showMenu, setShowMenu] = useState(false);

  const {
    data: countries,
    isLoading,
    isFetching,
  } = useGetCountriesQuery(region);

  const filtered = countries?.slice(0, visible) || [];

  const handleRegionChange = (newRegion: string) => {
    setRegion(newRegion);
    setVisible(8); // reset pagination
    setShowMenu(false);
  };

  return (
    <>
      {/* Tabs for desktop */}
      <Nav
        variant="tabs"
        className="justify-content-center d-none d-md-flex mb-3"
      >
        {REGIONS.map((r) => (
          <Nav.Item key={r}>
            <Nav.Link
              active={region === r}
              onClick={() => handleRegionChange(r)}
            >
              {r}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {/* Hamburger for mobile */}
      <Navbar bg="light" expand={false} className="d-md-none mb-3">
        <Container fluid>
          <Navbar.Brand>Countries</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={() => setShowMenu(true)}
          />
        </Container>
      </Navbar>

      <Offcanvas
        show={showMenu}
        onHide={() => setShowMenu(false)}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter by Region</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {REGIONS.map((r) => (
              <Nav.Link
                key={r}
                active={region === r}
                onClick={() => handleRegionChange(r)}
              >
                {r}
              </Nav.Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      <SectionHeader title="WELCOME" />

      {isLoading || isFetching ? (
        <div className="text-center py-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <div className="pt-2 pb-5">
            <Slider
              items={(countries || []).slice(0, 8).map((country) => ({
                id: country.name,
                content: (
                  <div className="text-center rounded shadow-sm">
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="img-fluid w-100"
                      style={{ objectFit: 'cover', height: 200 }}
                    />
                  </div>
                ),
              }))}
            />
          </div>

          {/* Country list cards */}
          <Row>
            {filtered.map((country) => (
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

          {/* Load more button */}
          {visible < (countries?.length || 0) && (
            <div className="text-center mt-3">
              <Button onClick={() => setVisible((v) => v + 8)}>
                Load more
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
}
