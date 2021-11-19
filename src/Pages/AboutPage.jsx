import React from 'react'
import { motion } from 'framer-motion';
const AboutPage = () => {
    const dataMuseLink = "https://www.datamuse.com/api/";


    const pageVariants={
        in:{
            opacity:1,
            x:0
        },
        out:{
            opacity:0,
            x:"-100%",
        },
    };

    const pageTransition={
        duration:0.5,
        ease:"easeOut"

    }

    return (
        <motion.div initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition} >
            <div className="aboutContainer">
                <h2>About</h2>
                <div className="aboutDescription">
                    <p>Rhyme It is a Web App that helps poets and composer, find words that rhyme with a given word, using the  <a href={dataMuseLink} target="_blank" rel="noopener noreferrer">Data Muse</a>  Api</p>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutPage;
