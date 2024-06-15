import '../../style/contact/contactus.css'
// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
import 'animate.css'
// import TrackVisibility from 'react-on-screen';
// import messageIMG from '../assets/img/message-img.png';
// import callIMG from '../assets/img/call-img.png';
// import facebook from '../assets/image/facebook.png';
// import instagram from '../assets/image/instagram.png';
// import twitter from '../assets/image/twitter.png';
// import location from '../assets/image/location.jpg';
export const ContactUs = () => {
  /* const formInitialDetails = {
        Name: '',
        email: '',
        message: '',
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Submit query');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Submit query");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ succes: true, message: 'Message sent successfully' });
        } else {
            setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
        }
    };*/
  const googlemaps =
    'https://www.google.com/maps/place/To-Let+Globe/@26.8465566,80.9797793,15z/data=!4m6!3m5!1s0x399bfd77577ba78f:0xd2d6f22d1b246815!8m2!3d26.8465566!4d80.9797793!16s%2Fg%2F11vhrqqb45?entry=ttu'
  return (
      <div class="innerdiv1">
        <a href={googlemaps} class="googlemaplink">
          <div class="imagediv2">
            <p class="imagediv2h1"> CONTACT US</p>
          </div>
        </a>
        <div class="headingd1">
          <p class="headingh1">GET IN TOUCH</p>
          <p class="headingh2">Have some questions?</p>
          <p class="headingh2">feel free to ask them anytime</p>

          <form class="contactusform">
            <input type="text" placeholder="Name" class="contactusinput" />
            <input type="email" placeholder="Email" class="contactusinput" />
            <input type="text" placeholder="Phone" class="contactusinput" />
            <input type="text" placeholder="Message" class="contactusinput" />
            <button class="contactusbutt">Send Message &rarr;</button>
          </form>
        </div>
      </div>
  )
}
