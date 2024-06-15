import '../../style/blog/blog.css'
import '../../style/blog/blog4.css'
import { Container, Typography } from '@mui/material';
import image1 from '../../assets/image/blog/image1.png'
import image2 from '../../assets/image/blog/image2.png'
import image3 from '../../assets/image/blog/image3.png'
import image4 from '../../assets/image/blog/image4.png'
import image5 from '../../assets/image/blog/image5.png'
import image6 from '../../assets/image/blog/image6.png'

import Rectangle1 from '../../assets/image/blog/Rectangle1.png'
import Rectangle2 from '../../assets/image/blog/Rectangle2.png'
import Rectangle3 from '../../assets/image/blog/Rectangle3.png'
import Rectangle4 from '../../assets/image/blog/Rectangle4.png'
import Rectangle5 from '../../assets/image/blog/Rectangle5.png'
import Rectangle6 from '../../assets/image/blog/Rectangle6.png'
import { Link } from 'react-router-dom';

export const Blog = () => {
  return (
    <section className="blog">
      <Container className='blog-container'>
        <Typography variant="h1" className="insights text-center">
          Our Insights and Stories
        </Typography>
        <Typography variant="body1" className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
        <div className="content">
          <div className="trending">
            <span className="cl">Trending</span>
            <span className="cla"> Latest</span>
          </div>
          <div className="row">
            <div className="col-md-4">
            <div className="boxes bo1">
                <Link to="/blog/blogpage"  style={{ textDecoration: 'none' }}>
                <div className="box-img"><img src={image1} alt='BlogImage' /></div>
                </Link>
                <div className="box-content">
                    <div className="date">
                        2 Nov, 23
                        <span className="vertical-line">|</span>
                        <span className="featured">Featured Updates</span>
                    </div>
                    <h2 className="heading">
                    Collaboration and Partnership Update!
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero reprehenderit natus, voluptas at amet minus ab Lorem
                    ipsum dolor sit amet consectetur{' '}
                    </p>
                    <div className="read">
                        <Link to="/blog/blogpage"  style={{ textDecoration: 'none' }}>
                        <p className="Readmore">Read More <i className="fa-solid fa-arrow-right arrow"></i></p>
                    
                      </Link>
                    </div>
                    <div className="boxdiv">
                    <div className="boxdiv1">
                        <div className="box-footer">
                        <div className="name">Bhaumik Kore</div>
                        </div>
                        <div className="designation">Full Stack Developer</div>
                    </div>
                    <div className="boxdiv2">
                        <div className="eyebox">
                        <i className="fa-solid fa-eye"></i>
                        <span>17</span>
                        </div>
                        <div className="eyebox">
                        <i className="fa-regular fa-heart"></i>
                        <span>22</span>
                        </div>
                    </div>
                    </div>
                    <hr className="hr1" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div className="boxes bo2">
                <Link to="/blog/blogpage"  style={{ textDecoration: 'none' }}>
                <div className="box-img"><img src={image2} alt='BlogImage'/></div>
                </Link>
                <div className="box-content">
                    <div className="date">
                        2 Nov, 23
                        <span className="vertical-line">|</span>
                        <span className="featured">Featured Updates</span>
                    </div>
                    <h2 className="heading">
                    Collaboration and Partnership Update!
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero reprehenderit natus, voluptas at amet minus ab Lorem
                    ipsum dolor sit amet consectetur{' '}
                    </p>
                    <div className="read">
                        <Link to="/blog/blogpage"  style={{ textDecoration: 'none' }}>
                        <p className="Readmore">Read More <i className="fa-solid fa-arrow-right arrow"></i></p>
                      </Link>
                    </div>
                    <div className="boxdiv">
                    <div className="boxdiv1">
                        <div className="box-footer">
                        <div className="name">Bhaumik Kore</div>
                        </div>
                        <div className="designation">Full Stack Developer</div>
                    </div>
                    <div className="boxdiv2">
                        <div className="eyebox">
                        <i className="fa-solid fa-eye"></i>
                        <span>17</span>
                        </div>
                        <div className="eyebox">
                        <i className="fa-regular fa-heart"></i>
                        <span>22</span>
                        </div>
                    </div>
                    </div>
                    <hr className="hr1" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div className="boxes bo3">
                <Link to="/blog/blogpage"  style={{ textDecoration: 'none' }}>
                <div className="box-img"><img src={image3} alt='BlogImage'/></div>
                </Link>
                <div className="box-content">
                    <div className="date">
                        2 Nov, 23
                        <span className="vertical-line">|</span>
                        <span className="featured">Featured Updates</span>
                    </div>
                    <h2 className="heading">
                    Collaboration and Partnership Update!
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero reprehenderit natus, voluptas at amet minus ab Lorem
                    ipsum dolor sit amet consectetur{' '}
                    </p>
                    <div className="read">
                        <Link to="/blog/blogpage"  style={{ textDecoration: 'none' }}>
                        <p className="Readmore">Read More <i className="fa-solid fa-arrow-right arrow"></i></p>
                      </Link>
                    </div>
                    <div className="boxdiv">
                    <div className="boxdiv1">
                        <div className="box-footer">
                        <div className="name">Bhaumik Kore</div>
                        </div>
                        <div className="designation">Full Stack Developer</div>
                    </div>
                    <div className="boxdiv2">
                        <div className="eyebox">
                        <i className="fa-solid fa-eye"></i>
                        <span>17</span>
                        </div>
                        <div className="eyebox">
                        <i className="fa-regular fa-heart"></i>
                        <span>22</span>
                        </div>
                    </div>
                    </div>
                    <hr className="hr1" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div className="boxes bo4">
                <Link to="/blog/blogpage"  style={{ textDecoration: 'none' }}>
                <div className="box-img"><img src={image3} alt='BlogImage'/></div>
                </Link>
                <div className="box-content">
                    <div className="date">
                        2 Nov, 23
                        <span className="vertical-line">|</span>
                        <span className="featured">Featured Updates</span>
                    </div>
                    <h2 className="heading">
                    Collaboration and Partnership Update!
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero reprehenderit natus, voluptas at amet minus ab Lorem
                    ipsum dolor sit amet consectetur{' '}
                    </p>
                    <div className="read">
                        <Link to="/blog/blogpage"  style={{ textDecoration: 'none' }}>
                        <p className="Readmore">Read More <i className="fa-solid fa-arrow-right arrow"></i></p>
                      </Link>
                    
                    </div>
                    <div className="boxdiv">
                    <div className="boxdiv1">
                        <div className="box-footer">
                        <div className="name">Bhaumik Kore</div>
                        </div>
                        <div className="designation">Full Stack Developer</div>
                    </div>
                    <div className="boxdiv2">
                        <div className="eyebox">
                        <i className="fa-solid fa-eye"></i>
                        <span>17</span>
                        </div>
                        <div className="eyebox">
                        <i className="fa-regular fa-heart"></i>
                        <span>22</span>
                        </div>
                    </div>
                    </div>
                    <hr className="hr1" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div className="boxes bo5">
                <Link to="/blog/blogpage"  style={{ textDecoration: 'none' }}>
                <div className="box-img"><img src={image4} alt='BlogImage'/></div>
                </Link>
                <div className="box-content">
                    <div className="date">
                        2 Nov, 23
                        <span className="vertical-line">|</span>
                        <span className="featured">Featured Updates</span>
                    </div>
                    <h2 className="heading">
                    Collaboration and Partnership Update!
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero reprehenderit natus, voluptas at amet minus ab Lorem
                    ipsum dolor sit amet consectetur{' '}
                    </p>
                    <div className="read">
                        <Link to="/blog/blogpage"  style={{ textDecoration: 'none' }}>
                        <p className="Readmore">Read More <i className="fa-solid fa-arrow-right arrow"></i></p>
                      </Link>
                    </div>
                    <div className="boxdiv">
                    <div className="boxdiv1">
                        <div className="box-footer">
                        <div className="name">Bhaumik Kore</div>
                        </div>
                        <div className="designation">Full Stack Developer</div>
                    </div>
                    <div className="boxdiv2">
                        <div className="eyebox">
                        <i className="fa-solid fa-eye"></i>
                        <span>17</span>
                        </div>
                        <div className="eyebox">
                        <i className="fa-regular fa-heart"></i>
                        <span>22</span>
                        </div>
                    </div>
                    </div>
                    <hr className="hr1" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div className="boxes bo6">
                <Link to="/blog/blogpage"  style={{ textDecoration: 'none' }}>
                <div className="box-img"><img src={image5} alt='BlogImage'/></div>
                </Link>
                <div className="box-content">
                    <div className="date">
                        2 Nov, 23
                        <span className="vertical-line">|</span>
                        <span className="featured">Featured Updates</span>
                    </div>
                    <h2 className="heading">
                    Collaboration and Partnership Update!
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero reprehenderit natus, voluptas at amet minus ab Lorem
                    ipsum dolor sit amet consectetur{' '}
                    </p>
                    <div className="read">
                        <Link to="/blog/blogpage"  style={{ textDecoration: 'none' }}>
                        <p className="Readmore">Read More <i className="fa-solid fa-arrow-right arrow"></i></p>
                      </Link>
                    </div>
                    <div className="boxdiv">
                    <div className="boxdiv1">
                        <div className="box-footer">
                        <div className="name">Bhaumik Kore</div>
                        </div>
                        <div className="designation">Full Stack Developer</div>
                    </div>
                    <div className="boxdiv2">
                        <div className="eyebox">
                        <i className="fa-solid fa-eye"></i>
                        <span>17</span>
                        </div>
                        <div className="eyebox">
                        <i className="fa-regular fa-heart"></i>
                        <span>22</span>
                        </div>
                    </div>
                    </div>
                    <hr className="hr1" />
                </div>
              </div>
            </div>
            </div>
          <div className="page-bar">
            <h4 className="next">{'<'} </h4>
            <div className="next">Previous</div>
            <div className="next">1</div>
            <div className="next">2</div>
            <div className="next">...</div>
            <div className="next">10</div>
            <div className="next">|</div>
            <div className="next">Next</div>
            <div className="next">{'>'}</div>
          </div>
        </div>
        <div className="column">
                    <h5>Categories</h5>
                </div>
                <div className="columimg">
                    <div className="coloumbox">
                        <img src={Rectangle5} alt="img" width="300px" className="img" />
                        <div className="block"><a href="/blog" className="column-header">News & Events</a><i className="fa-solid fa-arrow-right arrow"></i></div>
                    </div>
                    <div className="coloumbox">
                        <img src={Rectangle4} alt="img" width="300px" className="img" />
                        <div className="block"><a href="/blog" className="column-header">Feature Updates</a><i className="fa-solid fa-arrow-right arrow"></i></div>
                    </div>
                    <div className="coloumbox">
                        <img src={Rectangle1} alt="img" width="300px" className="img" />
                        <div className="block"><a href="/blog" className="column-header">Brand Collaboration</a><i className="fa-solid fa-arrow-right arrow"></i></div>
                    </div>
                    <div className="coloumbox">
                        <img src={Rectangle2} alt="img" width="300px" className="img" />
                        <div className="block"><a href="/blog" className="column-header">Life at To-Let</a><i className="fa-solid fa-arrow-right arrow"></i></div>
                    </div>
                    <div className="coloumbox">
                        <img src={Rectangle6} alt="img" width="300px" className="img" />
                        <div className="block"><a href="/blog" className="column-header">Internship Campaigns</a><i className="fa-solid fa-arrow-right arrow"></i></div>
                    </div>
                    <div className="coloumbox">
                        <img src={Rectangle3} alt="img" width="300px" className="img" />
                        <div className="block"><a href="/blog" className="column-header">Giveway & Offers</a><i className="fa-solid fa-arrow-right arrow"></i></div>
                    </div>
                </div>
      </Container>
    </section>
  )
}