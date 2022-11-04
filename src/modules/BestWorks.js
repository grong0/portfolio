import '../styles/BestWorks.css';
import tempImg from '../assets/tempImg.png';
import { motion } from 'framer-motion';

const scrollMotion = {
    from: {
        opacity: 0
    },
    to: {
        opacity: 1,
        transition: {
            duration: 1.5,
            delay: 1,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
            delay: 0,
            type: "spring"
            // ease: "easeInOut"
        }
    }
}
const descMotion = {
    from: {
        x: "30vw"
    },
    to: {
        x: "0vw",
        transition: {
            duration: 1,
            delay: 0.5,
            ease: "easeInOut"
        }
    },
    exit: {
        x: "30vw",
        transition: {
            duration: 0.5,
            delay: 0,
            type: "spring"
            // ease: "easeInOut"
        }
    }
}
const imgMotion = {
    from: {
        opacity: 0,
        x: "-50%",
        scale: "30%"
    },
    to: {
        opacity: 1,
        x: "-50%",
        scale: "100%",
        transition: {
            duration: 1,
            delay: 0.5,
            type: "spring"
        }
    },
    exit: {
        opacity: 0,
        x: "-50%",
        scale: "30%",
        transition: {
            duration: 0.5,
            delay: 0,
            type: "spring"
            // ease: "easeInOut"
        }
    }
}


function BestWorks() {

    return (
        <motion.div className="bestworks">
            {/* <div className="backdrop-blur"></div>
            <div className="button-wrapper">
                <button id="up"><i className="bi bi-arrow-up-circle-fill"></i></button>
                <button id="down"><i className="bi bi-arrow-down-circle-fill"></i></button>
            </div> */}
            <motion.div className="scroll-wrapper"
                variants={scrollMotion}
                initial={"from"}
                animate={"to"}
                exit={"exit"}
            >
                <i className="bi bi-arrow-down"></i>
                <p>SCROLL</p>
            </motion.div>
            
            <motion.div className="img-wrapper"
                variants={imgMotion}
                initial={"from"}
                animate={"to"}
                exit={"exit"}
            >
                <div className="img"><img src={tempImg} alt="temp"/></div>
                <div className="img"><img src={tempImg} alt="temp"/></div>
                <div className="img"><img src={tempImg} alt="temp"/></div>
                <div className="img"><img src={tempImg} alt="temp"/></div>
            </motion.div>
            <motion.div className="desc-wrapper backdrop-blur"
                variants={descMotion}
                initial={"from"}
                animate={"to"}
                exit={"exit"}
            >
                <div className="word-wrapper">
                    <h1 id="name">Lorem ipsum</h1>
                    <br />
                    <br />
                    <p id="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adipisci reiciendis, veniam aliquid iusto nam minus cum asperiores excepturi eum nisi ea quaerat facilis ipsa facere repellendus? Aspernatur, tempora. Aspernatur.</p>
                </div> 
            </motion.div>
        </motion.div>
    );
}

export default BestWorks;