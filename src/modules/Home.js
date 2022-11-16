import '../styles/Home.css'
import { Link, useLocation } from 'react-router-dom';
import {motion} from 'framer-motion';
import { useEffect, useRef } from 'react';

const home1Motion = {
    from: {},
    to: {},
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
const home2Motion = {
    from: {
        scale: 3,
        opacity: 0,
        gap: "125px",
        // y: 125
    },
    to: {
        scale: 1,
        opacity: 1,
        gap: "50px",
        // y: 0,
        transition: {
            duration: 1,
            type: "spring"
        }
    },
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

const titleMotion = {
    from: {
        opacity: 0,
        scale: 1.3,
        y: 150
    },
    to: {
        opacity: [0, 1, 1],
        scale: [1.3, 1.3, 1],
        y: [150, 150, 0],
        transition: {
            duration: 3,
            delay: 0.6,
            ease: "easeInOut"
        }
    }
}
const parentMotion = {
    to: {
        transition: {
            staggerChildren: 0.1
        }
    },
    exit: {
        gap: "125px",
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
}
const bubbleMotion = {
    from: {
        opacity: 0
    },
    to: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 3,
            ease: "easeInOut"
        }
    },
    bounceInit: {
        scale: 0
    },
    bounce: {
        scale: 1,
        transition: {
            duration: 0.5,
            type: "spring"
        }
    },
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.5,
            type: "spring"
        }
    },
    tap: {
        scale: 0.95,
        transition: {
            duration: 0.5,
            type: "spring"
        }
    }
}

// h1
// variants={titleMotion} initial={"from"} animate={"to"}

// div
// variants={bubbleMotion} initial={"from"} animate={"to"}

function Home() {
    const location = useLocation().pathname;

    var variant = home1Motion;
    const wrapperRef = useRef();

    useEffect(() => {
        wrapperRef.current.classList.add("init");
        if ( !initPage ) {
            wrapperRef.current.classList.remove("init");
        }
    })

    if (!initPage) {
        variant = home2Motion;
    }

    return (
        <motion.div className='home'
            variants={variant}
            initial={"from"}
            animate={"to"}
            exit={"exit"}

            ref={wrapperRef}
        >
            <h1 id="title">Garrett Tupper</h1>
            <motion.div className="bubble-wrapper"
                // variants={location === "/_" ? parentMotion : {}}
                // exit={"exit"}
            >
                <motion.div id="about" 
                    variants={bubbleMotion} 
                    // initial={location === "/_" ? "bounceInit" : ""} 
                    // animate={location === "/_" ? "bounce" : ""} 
                    whileHover={"hover"} 
                    whileTap={"tap"}
                >
                    <Link onClick={() => {initPage = false}}  to="/portfolio/aboutme"><p>About Me</p></Link>
                </motion.div>
                <motion.div id="best" 
                    variants={bubbleMotion} 
                    // initial={location === "/_" ? "bounceInit" : ""} 
                    // animate={location === "/_" ? "bounce" : ""} 
                    whileHover={"hover"} 
                    whileTap={"tap"}
                >
                    <Link onClick={() => {initPage = false}}  to="/portfolio/bestworks"><p>Best Works</p></Link>
                </motion.div>
                <motion.div id="achievements" 
                    variants={bubbleMotion} 
                    // initial={location === "/_" ? "bounceInit" : ""} 
                    // animate={location === "/_" ? "bounce" : ""} 
                    whileHover={"hover"} 
                    whileTap={"tap"}
                >
                    <Link onClick={() => {initPage = false}}  to="/portfolio/achievements"> <p>Awards</p></Link>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Home;