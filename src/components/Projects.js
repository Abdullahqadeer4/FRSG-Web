import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import AVTR1 from '../assets/img/avatar1.jpeg'
import AVTR2 from '../assets/img/avatar2.jpeg'
import AVTR3 from '../assets/img/avatar3.jpeg'
import AVTR4 from '../assets/img/avatar4.jpeg'

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const Projects = () => {

  const projects = [
    {
      title: "FRSG",
      description: "Project 1",
      imgUrl: projImg1,
    },
    {
      title: "FRSG",
      description: "Project 2",
      imgUrl: projImg2,
    },
    {
      title: "FRSG",
      description: "Project 3",
      imgUrl: projImg3,
    },
    {
      title: "FRSG",
      description: "Project 4",
      imgUrl: projImg1,
    },
    {
      title: "FRSG",
      description: "Project 5",
      imgUrl: projImg2,
    },
    {
      title: "FRSG",
      description: "Project 6",
      imgUrl: projImg3,
    },
  ];
  const data = [
    {
      avatar: AVTR1,
      name: 'Tina Snow',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
    },
    {
      avatar: AVTR2,
      name: 'Robert Downey',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
    },
    {
      avatar: AVTR3,
      name: 'Bruce Wayne',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
    },
    {
      avatar: AVTR4,
      name: 'Zendaya Lastname',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
    }
  ]
  
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects and Testimonials</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <h2 >Projects</h2>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                          <h2>Testimonials</h2>
                          <Swiper 
                            className='container testimonials__container' 
                            modules={[Pagination]}
                            spaceBetween={40}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                          >
                            {data.map(({ avatar, name, review }, index) => (
                              <SwiperSlide key={index} className='testimonial'>
                                <div className='client__avatar'>
                                  <img src={avatar} alt='Avatar' />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod
                            neque provident velit, rem explicabo excepturi id illo molestiae
                            blanditiis, eligendi dicta officiis asperiores delectus quasi inventore
                            debitis quo.
                          </p>
                        </Tab.Pane>


                    <Tab.Pane eventKey="third">
                      <p> habiba Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
