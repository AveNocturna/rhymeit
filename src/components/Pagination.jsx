import React from 'react'

const Pagination = ({ totalWords, wordsPerPage, paginate, currentPage }) => {
    
    /*Generating the pagination numbers */
    const totalPages = Math.ceil(totalWords / wordsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    //To show 3 Pagination numbers  only 
    const first = (currentPage - 1);
    const last = (currentPage + 2);
    const numbersTobeShown = pageNumbers.slice(first, last);
    
    /* Functions of the Pagination "Buttons" */
    const handlePrevious = () => {
        paginate(currentPage - 1);
    }
    const handleNext = () => {
        paginate(currentPage + 1);
    }
    const onPaginate = (num) => {
        paginate(num);
    }
    
    return (
        <div className="paginationContainer">
            {
                currentPage !== 1 ? <button onClick={handlePrevious} className="number"><i class="fas fa-caret-left"></i></button> : null
            }

            {
                numbersTobeShown.map(num => {
                    return <button onClick={() => { onPaginate(num) }} className={currentPage === num ? 'active number' : 'number'} >{num}</button>
                })
            }
            {
                (currentPage + 1) <= totalPages ? <button onClick={handleNext} className="number"><i class="fas fa-caret-right"></i></button> : null
            }
        </div>
    )
}

export default Pagination;