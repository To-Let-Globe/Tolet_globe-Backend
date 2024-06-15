import '../../style/home/home-1.css';
import '../../style/home/home-4.css';
import { Col, Container, Row } from "react-bootstrap"
import { TopImages } from "./Tbackground"

export const HomeUp = () =>{
    return(
        <Container fluid className="top-home">
        <Row className="justify-content-center align-items-center h-20">
          <Col xs={12} md={8} lg={6}>
            <h1 className="tagline text-center">Welcome to To-Let Globe</h1>
            <h6 className="headline text-center">
              NO BROKERAGE ON PGS | FLATS | HOUSES | OFFICES
            </h6>
              <TopImages />
          </Col>
        </Row>
      </Container>
    )
}