import { AboutTwoData } from "@/data";
import React from "react";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import Link from "./link";

const AccordionOne = () => {
    const { caption, blockTitle, lists, offer } = AboutTwoData;
    return (
        <section className="section_padding">
            <Container className="accordion_area py-3">
                <h1 className="text-center" style={{color: 'white'}}>
                    The VCA difference
                </h1>
                <div className="py-3 text-center" style={{ fontSize: '18px', color: "white" }} >We support every Associate with joy, curiosity, trust, expertise and by being real.</div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Do your thing and embrace technology</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                All our hospitals were once private practices that joined the VCA family because of their success as unique, individual hospitals. This drives our passion for preserving individual hospital culture and empowering leaders and medical professionals to make the best decisions for their hospital teams and patients.
                            </p>
                            <p>
                                Our commitment to trust is accompanied by resources to help support teams, pets, and communities. As a VCA Associate, you have the trust to make individual choices for your patients and clients. No treatment plans are dictated to you. In addition, there is support from local leadership when you want to add a service or equipment at your hospital.
                            </p>
                            <p>
                                Veterinary care is ever evolving to incorporate new technologies like apps and text messaging. VCA Associates exchange millions of text messages and pictures with clients every year in order to keep them informed and updated on hospitalized patients and lab results. This process is easy for the hospital teams and much appreciated by pet owners. By utilizing our 24/7 live chat through the myVCA app, VCA clients can connect with a dedicated licensed veterinary technician any time of the day or night to ask questions and get advice.
                            </p>
                            <div className="slide_button">
                                <Link href={'https://vcahospitals.com/myvca-text-appointment-reminders'} className="btn-blue">
                                    Learn More about the myVCA App
                                </Link>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Stay at the forefront of veterinary medicine.</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                As an Associate gain access and participate in VCA Clinical Studies dedicated to new discoveries and advancements in veterinary medicine, resulting in longer and healthier lives for pets and people. Veterinary clinical studies allow VCA hospitals to stay at the forefront of veterinary care for pets in order to provide quality care, better understand disease, improve treatment outcomes, and maintain quality of life.
                            </p>
                            <div className="slide_button pb-4">
                                <Link href={'https://vcahospitals.com/why-vca/clinical-studies'} className="btn-blue">
                                    Learn More about VCA Clinical Studies
                                </Link>
                            </div>
                            <p>
                                Our VCA Pet Cancer Care Alliance is moving the veterinary industry forward with a network of 35+ treatment centers with 65+ board certified veterinary oncologists focused on developing advanced cancer treatments. Each center is leading the way in treatment options, including chemotherapy, radiation therapy, immunotherapy and surgery. The Cancer Care Centers were formed in order to offer world-class treatment, improve the quality of life for pets, and cultivate open lines of communication and collaboration between oncologists, primary care veterinarians and pet owners.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Master your profession.</Accordion.Header>
                        <Accordion.Body>
                            <h4>Student Programs</h4>
                            <p>
                                VCA has several programs to help students become experts in their fields like our Externship Program, New Graduate Mentorship Program, and Internship Program which makes VCA the largest provider of post-graduate veterinary education in North America.
                            </p>
                            <h4>
                                Technician and Assistant Development Program
                            </h4>
                            <p>
                                VCA is committed to elevating the technicians within our hospitals and within the industry. With this commitment in mind, VCA created the Technician and Assistant Development Program. The goal of this program is to allow technicians and assistants to advance their medical, communication, and leadership skills. This program offers opportunities including scholarships for assistants to become certified veterinary technicians and paths to VTH for technicians.
                            </p>
                            <h4>
                                Continuing Education
                            </h4>
                            <p>
                                Every year since 2003, VCA has awarded multiple recipients North American Veterinary Conference Institute scholarships, which cover all expenses for travel and training in Orlando, Florida. That’s 273 scholarships and counting! In 2019, there were 29 scholarship winners recognized for clinical excellence, dedication to lifetime learning and leadership.
                            </p>
                            <p>
                                With WOOFUniversity® (a proprietary online learning platform), a Continuing Education Allowance and paid Continuing Education Days, VCA Associates have endless learning opportunities.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Take care of yourself.</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                VCA is dedicated to improving the health and well-being of all Associates. Our health and well-being program focuses on five key areas: healthy body, healthy mind, healthy finances, healthy career, and healthy community.
                            </p>
                            <p>
                                There is no denying that a career in veterinary medicine is incredibly rewarding while also presenting emotional and physical demands. We all have different needs at different times, and various aspects of well-being are going to resonate depending on where you are on your journey through life. By providing a variety of resources, tools and training, we help you take care of yourself so you can stay healthy, energized, and enjoy the important role you play in your community.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Give back to your community.</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Our social responsibility is all about our commitment to pets, to the families that love them, and to the communities where our lives come together. All 1000+ VCA hospitals and 30,000+ Associates are empowered to be a considerable force for good in the world. We take care of our people, and they take care of themselves, each other and their local communities.
                            </p>
                            <p>
                                VCA supports Mars’ commitment to end pet homelessness by encouraging and supporting pet adoption. We partner with more than 130 animal shelters and rescue organizations nationwide and provide veterinary care to more than 25,000 homeless and rescued pets per month.
                            </p>
                            <p>
                                When disaster strikes, VCA is there to help displaced and injured pets. We support our local communities through hurricanes, fires, and earthquakes by offering free boarding for displaced pets, collecting donations for necessary supplies and offering treatment for animals that need medical care.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </Container>
        </section>
    );
};

export default AccordionOne;
