import Word from '../components/Word'
import loadingImg from '../Img/loading.gif'
import notFound from '../Img/notFound.png'
const WordGrid = ({ wordList = [], loading = false, firstReq = false }) => {

    
    //Decides what to render, (Data,loading, not found)
    const content = () => {
        if (loading) {
            return <img src={loadingImg} alt="Loading" id="loading" />; //Renders Loading
        } else {
            if (wordList.length > 0) {

                return (wordList.map(word => { return (<Word key={word} word={word} />) }));//Renders the data

            } else {

                if (firstReq) {//Renders not Found
                    return (
                        <div className="notFoundContainer">
                            <img src={notFound} alt="not found" />
                            <p>Oops! Nothing was found...</p>
                        </div>
                    );
                }
            }
        }
    }

    return (
        <div className="WordsGrid">
            {               
                content()
            }

        </div>
    )
}


export default WordGrid;
