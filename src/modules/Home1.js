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

function Home1() {
    return (
        <motion.div className="home init"
            variants={wrapperMotion}
            exit={"exit"}
        >
            <Home />
        </motion.div>
    );
}

export default Home1;