import {motion} from 'framer-motion';
import Home from './Home';

const wrapperMotion = {
    
    exit: {
        scale: 3,
        opacity: 0,
        gap: "125px",
        // y: 125,
        transition: {
            duration: 1,
            type: "spring"
        }
    }
}

function Home2() {
    return (
        <motion.div className="home"
            variants={wrapperMotion}
            initial={"from"}
            animate={"to"}
            exit={"exit"}
        >
            <Home />
        </motion.div>
    );
}

export default Home2;