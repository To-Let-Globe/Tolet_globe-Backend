import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/navbar';

// import { Home } from './components/home/home';
import { Layout } from './components/layout';
import { Contact } from './components/contact/contactus';
import  {BlogPage } from './components/blog/blogpage';
import { Blog } from './components/blog/blog';
import {AboutUs} from './components/about/aboutus';
import { Login } from './components/login';
import {Service} from './components/service';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
   <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Layout/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/blogpage" element={<BlogPage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/about/" element={<AboutUs />} />
        </Routes>
        
      </BrowserRouter>
    </div>
   
);
}

export default App;
