import React from 'react';
import '../styles/components/about.css';
import profileImage from '../assets/images/profile.jpg';

function About() {
    return (
        <section className="about">
            <div className="about-content">
                <div className="text-content">
                    <h1 className="animate__animated animate__fadeInLeft">Issac Kondreddy</h1>
                    <h2 className="animate__animated animate__fadeInLeft">A Masters Student in Computer Science</h2>
                    <p className="animate__animated animate__fadeInUp">Hello! I'm Issac Kondreddy, a passionate developer specializing in Machine Learning, AI, and Python Development. My journey in tech began at the University of Central Missouri where I developed a deep interest in Artificial Intelligence.</p>
                    <p className="animate__animated animate__fadeInUp">Over the years, I've honed my skills through various projects and challenges, focusing on Machine Learning, Deep Learning, Quantum Machine learning, Computational Intelligence. I'm always eager to learn new technologies and apply them to solve real-world problems.</p>
                    <p className="animate__animated animate__fadeInUp">When I'm not coding, you can find me exploring new places, capturing moments through my camera, and indulging in Travelling, Chess, Badminton.</p>
                    <p className="animate__animated animate__fadeInUp">I'm excited to showcase my journey and the projects I've worked on. Feel free to scroll through my portfolio to learn more about my expertise and experiences!</p>
                    <div className="social-icons">
                        <a href="https://instagram.com/issac_.36/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/issackondreddy/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/Issac-Kondreddy" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="mailto:issackondreddyl@gmail.com"><i className="fas fa-envelope"></i></a>
                    </div>
                </div>
                <div className="image-content">
                    <img src={profileImage} alt="Issac Kondreddy" className="parallax" />
                </div>
            </div>
        </section>
    );
}

export default About;
