import '../../style/home/home-1.css';
// import '../../style/home/home-2.css';
// import '../../style/home/home-3.css';
import '../../style/home/home-4.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'animate.css';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';
import { BottomImages } from './Bbackground';

export const HomeDown = () => {
  return (
      <Container fluid className="scrollable-content bottom-home">
        <Row className="justify-content-center align-items-center h-100 mb-5 mt-4 d-flex">
          <Col xs={15} md={8} lg={6}>
            <h1 className="tagline2 text-left">Welcome to To-Let Globe</h1>
            <h6 className="headline2 text-center">
              NO BROKERAGE ON  PGS | FLATS | HOUSES | OFFICES 
            </h6>
            <div className="input-bar mb-5 mt-4 d-flex justify-content-center align-items-center" id="inputGroup">
              <InputGroup className='w-85'>
                <Form.Control
                  placeholder="Search PG, Flats and Houses"
                  aria-label="Search PG, Flats and Houses"
                />
                <Button className='btn' onClick={() => console.log("connect")}>
                  Search
                </Button>
              </InputGroup>
            </div>
            <BottomImages />
          </Col>
        </Row>
      </Container>
    
  );
};