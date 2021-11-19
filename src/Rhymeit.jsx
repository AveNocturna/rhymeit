import { AnimatePresence } from 'framer-motion';

import NavBar from './components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Rhymeit = () => {
    /*Animation */
    return (
        <>
            <div className="main_Container">
                <Router>
                    <NavBar />
                    <AnimatePresence exitBeforeEnter >
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/about" component={AboutPage} />
                        </Switch>
                    </AnimatePresence>
                </Router>
            </div>
            <Footer />
        </>
    )
}

export default Rhymeit;