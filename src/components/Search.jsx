import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({getWords}) => {
    
    const [word, setWord] = useState("");
    const [messageAtributes,setmessageAtributes]=useState("validation_Message");
    const handleOnchange = (e) => {
        setWord(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(word.length>0){
           getWords(word);
           console.log(typeof word);
           setmessageAtributes("validation_Message");
        }else
        {
            console.log("Ingresa una palabra");
            setmessageAtributes(messageAtributes+" active_Message");
        }
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="SearchContainer">
                    <label htmlFor="word">Find words that Rhyme with:</label>
                    <input id="word" className="buscadorInput" onChange={handleOnchange} value={word} type="text" placeholder="word" />
                    <button onClick={onSubmit}><i className="fas fa-search"></i></button>
                    <label htmlFor="word" className={messageAtributes}>Type a word</label>
                </div>
            </form>
        </>
    )
}

Search.propTypes = {
    getWords: PropTypes.func.isRequired
}

export default Search
