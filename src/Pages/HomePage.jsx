import React, { useState } from 'react'
import Search from '../components/Search'
import WordGrid from '../components/WordGrid';
import Pagination from '../components/Pagination';
import { motion } from 'framer-motion';

import logo from '../Img/logo.svg';

const HomePage = () => {

    const [wordList, setWordList] = useState([]);
    const [currentPage, setCurrenPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const wordsPerPage = 5;

    //Get current Words
    const lastWordIndex = (currentPage * wordsPerPage);
    const firstWordIndex = (lastWordIndex - wordsPerPage);
    const currentWords = wordList.slice(firstWordIndex, lastWordIndex);

    //Helps me to know when the first request has been done
    const [firstReq, SetFirstReq] = useState(false);

    const paginate = (number) => {
        setCurrenPage(number);
    }

    const getWords = async (word) => {
        setLoading(true);
        const response = await fetch(`https://api.datamuse.com/words?rel_rhy=${word}`);
        const data = await response.json();
        const words = data.map(item => {
            return item.word;
        })

        setWordList(words);
        setLoading(false);
        setCurrenPage(1);
        SetFirstReq(true);//if the firstReq is true,not found will be render when ListWord lenght=0
    }


    /*Animations */
    const pageVariants={
        in:{
            opacity:1,
            x:0
        },
        out:{
            opacity:0,
            x:"200%",
        },
    };

    const pageTransition={
        duration:0.5,
        ease:"easeOut"

    }

    return (
        <motion.div initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition} >
            <div className="homeContainer">
                <div className="logoContainer">
                    <h2>Rhymeit</h2>
                    <img id="logo" alt="logo" src={logo} />
                </div>
                <Search getWords={getWords} />
                <WordGrid wordList={currentWords} loading={loading} firstReq={firstReq} />
                <Pagination totalWords={wordList.length} wordsPerPage={wordsPerPage} paginate={paginate} currentPage={currentPage} />
            </div>
        </motion.div>
    )
}

export default HomePage;