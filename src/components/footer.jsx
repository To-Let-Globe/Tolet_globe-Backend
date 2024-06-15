import { Col, Container, Row } from 'react-bootstrap'
import '../style/footer.css'
import image1 from '../assets/img/logo.jpeg'
export const Footer =()=>{
    return (
      <Container className='footer-container'>
      <footer class="text-center text-lg-start bg-body-tertiary text-muted">
        
        <section class="">
          <div class="container text-center text-md-start mt-5">
          
            <div class="row mt-3">

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Reach us</h6>
            <Row className="mb-1 mt-2">
              <Col md={2}>
              <i class="fas fa-phone me-3" style={{color:'white'}}></i>
              </Col>
              <Col>
              <p className='add-text'> +91-8707727347</p>
              </Col>
            </Row>
            <Row className="mb-1 mt-1">
              <Col  md={2}>
              <i class="fas fa-envelope me-3" style={{color:'white'}} ></i>
              </Col>
              <Col>
              <p className='add-text'> hello@toletglobe.in</p>
              </Col>
            </Row>
            <Row className="mb-1 mt-1">
              <Col  md={2}>
              <i class="fas fa-home me-3" style={{color:'white'}}></i>
              </Col>
              <Col>
              <p className='add-text'>D1/122 vipulkhand,Gomtinagar Lucknow, Uttar Pradesh</p>
              </Col>
            </Row>

          </div>
            
      
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
                <h6 class="text-uppercase fw-bold mb-4">
                  Quick Links
                </h6>
                <p>
                  <a href="#!" class="footer-link">About US</a>
                </p>
                <p>
                  <a href="#!" class="footer-link">Services</a>
                </p>
                <p>
                  <a href="#!" class="footer-link">Blogs</a>
                </p>
                <p>
                  <a href="#!" class="footer-link">Projects</a>
                </p>
              </div>
             
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              
                <h6 class="text-uppercase fw-bold mb-4">
                  Services
                </h6>
                <p>
                  <a href="#!" class="footer-link">Paying Guest</a>
                </p>
                <p>
                  <a href="#!" class="footer-link">Flat and Houses</a>
                </p>
                <p>
                  <a href="#!" class="footer-link">Offices</a>
                </p>
                <p>
                  <a href="#!" class="footer-link">Shops and Godown</a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-center" >
                <img src={image1} alt="logo"style={{width:"60px"}}/>
                <p style={{textAlign:"center",fontSize:"12px", color:'#999'}}>One-stop solution for all your brokerage free rental needs </p>
              </div>
             
             
            </div>
           
          </div>
        </section>
        
        <div class="text-center footer-tag p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)",color:"white"}}>
          <a class="footer-link fw-bold" href="/">© 2023 To-Let Globe -- Lucknow</a>
          <div className='footer-icon'>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
        
      </footer>
      </Container>
     
    )
}