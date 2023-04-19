import FadeIn from "./FramerMotion/FadeIn";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import data from "../Data/data";

const aboutContainer = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
}

const aboutContent ={
    hidden: { opacity: 0, y: -50 },
    visible: { 
        y: 0,
        opacity: 1,
        transition:{
            duration: 1
        }
    }
}

const About = ({reference}) => {
    const aboutRef = useRef(null);
    const isInView = useInView(aboutRef, { amount: 0.5 });

    return ( 
        <div className="section" id="about" ref={reference}>
            <div className="section-container">
                <motion.div 
                    className="about-me"
                    ref={aboutRef}
                    variants={aboutContainer}
                    initial="hidden"
                    animate={isInView && "visible"}
                >
                    <motion.h2 variants={aboutContent}>
                        About Me
                    </motion.h2>
                    <motion.p variants={aboutContent}>
                        {data.aboutMe.aboutMe_1}
                    </motion.p>
                    <motion.p variants={aboutContent}>
                        {data.aboutMe.aboutMe_2}
                    </motion.p>
                    <motion.p variants={aboutContent}>
                        {data.aboutMe.aboutMe_3}
                    </motion.p>
                </motion.div>
                <FadeIn>
                    <div className="background-container">
                        <h3>Learn me at a glance</h3>
                        <div className="background">
                            <h4>Location</h4>
                            <p>Looking for opportunities in Singapore and Malaysia</p>
                            <h4>Education</h4>
                            <p>Software Engineering Degree from Asia Pacific University {"(APU)"}</p>
                            <h4>IT Interests</h4>
                            <p>Artificial Inteligent(AI), Web, Desktop, and Mobile Application Development</p>
                            <h4>Characteristics</h4>
                            <p>Proactive, Self-Motivated, and Adaptable Team Player</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}

export default About;