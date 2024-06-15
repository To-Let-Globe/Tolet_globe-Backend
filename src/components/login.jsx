import { Container, Row, Col } from "react-bootstrap";
import "../style/login.css";
import { Link } from 'react-router-dom';
import googleIcon from "../assets/img/Google.png";
export const Login= () =>{

    const googleAuth=()=>{
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        );
    };

    return(
        <section className="login" id="login">
            <h1 className="heading">Welcome to To-Let Globe</h1>
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col size={7} md={5} className="left">
                        <div className="left-container">
                             
                        </div>
                    </Col>
                    <Col size={15} md={5} className='form-container login-box mt-4'>
                        <div className="right-container">
                            <h2 style={{marginTop:"1rem"}}>Log IN</h2>
                            <Row>
                                <Col size={12}>
                                <input type="text" className="form-control mb-3" placeholder="Email"/>
                                <input type="text" className="form-control mb-3" placeholder="Password"/>
                                <button type="submit" className="btn btn-primary mt-3"><span>Log IN</span></button>
                                <p className="text">or</p>
                                <button className="google-btn" onClick={googleAuth}>
                                    <img src={googleIcon} alt="google-icon" style={{width:"20px"}}/>
                                    <span> Sign in with Google</span>
                                </button>
                                <p className="text">
                                    New User? <Link to="/signup">Sign UP</Link>
                                </p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                
                </Row>
            </Container>
        </section>
    )
}