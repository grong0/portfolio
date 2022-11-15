import '../styles/BestWorks.css';
import { motion } from 'framer-motion';
import Image from './Image';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faArrowUp, faArrowDown, faPassport } from '@fortawesome/free-solid-svg-icons';

const descMotion = {
    from: {
        x: "30vw"
    },
    to: {
        x: "0vw",
        transition: {
            duration: 1,
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
const dirctionMotion = {
    fromTop: {
        y: "-50px",
        opacity: 0
    },
    fromBottom: {
        y: "50px",
        opacity: 0
    },
    fromLeft: {
        x: "-50xpx",
        opacity: 0
    },
    fromRight: {
        x: "50px",
        opacity: 0
    },
    to: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 1.5,
            delay: 1,
            ease: "easeInOut"
        }
    },
    // exit: {
    //     opacity: 0,
    //     transition: {
    //         duration: 0.5,
    //         delay: 0,
    //         type: "spring"
    //     }
    // },
    hover: {
        "border-width": "8px",
        scale: 1.05,
        transition: {
            type: "tween",
            duration: 0.2
        }
    },
    tap: {
        "border-width": "4px",
        scale: 0.95,
        transition: {
            type: "tween",
            duration: 0.2
        }
    },


    exitTop: {
        y: "-90px",
        opacity: 0,
        transition: {
            duration: 1,
            type: "spring"
        }
    },
    exitBottom: {
        y: "90px",
        opacity: 0,
        transition: {
            duration: 1,
            type: "spring"
        }
    },
    exitLeft: {
        x: "-90xpx",
        opacity: 0,
        transition: {
            duration: 1,
            type: "spring"
        }
    },
    exitRight: {
        x: "90px",
        opacity: 0,
        transition: {
            duration: 1,
            type: "spring"
        }
    }
    
}
// const bestworksMotion = {
//     exit: {
//         scale: "30%",
//         transition: {
//             duration: 1,
//             type: "spring"
//         }
//     }
// }








function BestWorks() {

    const scoutcodeRef = useRef();
    const mineolaroboRef = useRef();
    const accountsystemRef = useRef();
    const suscodeRef = useRef();
    const imgWrapperRef = useRef();
    const descTitleRef = useRef();
    const descDateRef = useRef();
    const descDescRef = useRef();

    var position = [0, 0]

    var currentEle = scoutcodeRef;

    function move() {
        switch (position[0]) {
            case 0:
                imgWrapperRef.current.scrollTo({
                    top: 50,
                    behavior: 'smooth'
                });
                currentEle = scoutcodeRef;
                descTitleRef.current.innerHTML = "Scout Code"
                descDateRef.current.innerHTML = "March 2022 - May 2022"
                descDescRef.current.innerHTML = "A flask app that uses data from a script that gets data on every team in a competition from the FIRST API. For example, the types of data it retrieves are total points, total fouls, the number of times a robot has done something, and so on. The app then represents this data with graphs and tables. It also creates its own leaderboard based on things we want in a team. Let's say your team is looking for another team with a robot that is a good scorer; the leaderboard will weigh accordingly. Stats that demonstrate scoring potential will be weighted as more of a priority over stats that demonstrate defense."
                break;
            case 1:
                imgWrapperRef.current.scrollTo({
                    top: 1293,
                    behavior: 'smooth'
                });
                currentEle = mineolaroboRef;
                descTitleRef.current.innerHTML = "Mineola Robotics Website"
                descDateRef.current.innerHTML = "Augest 2022 - Present"
                descDescRef.current.innerHTML = "A website for the Mineola Robotics team that I'm currently developing. It will showcase what our team stands for and what we've done. Since it's not FRC-specific, it will also cover all divisions we have teams for, like FLL, FTC, and FRC."
                break;
            case 2:
                imgWrapperRef.current.scrollTo({
                    top: 2536,
                    behavior: 'smooth'
                });
                currentEle = accountsystemRef;
                descTitleRef.current.innerHTML = "Account System"
                descDateRef.current.innerHTML = "May 2022 - June 2022"
                descDescRef.current.innerHTML = "My group's final project for our Python/HTML class in our Junior year. We decided to make the project a clicker game, and I was in charge of coding the account system for this website to store the user's data. I have never made an account system and used PHP before, but I used this opportunity to learn something new that I was curious about. When we finished, you could sign up with your name, username, email, and password and log in afterward with that information. It would save your information to a JSON file and encrypt the password. Once you had an account, you could log in, and the navbar text would change to greet you."
                break;
            case 3:
                imgWrapperRef.current.scrollTo({
                    top: 3780,
                    behavior: 'smooth'
                });
                currentEle = suscodeRef;
                descTitleRef.current.innerHTML = "School iPad Script"
                descDateRef.current.innerHTML = "March 2022 - March 2022"
                descDescRef.current.innerHTML = "A script that I created to expose a serious flaw with the security and privacy of my school's student accounts. The fault that it revealed is that every student's Apple ID password was the same. Knowing this, I made a simple script that would first take in information from a Google Sheet to put together a student email and then use that email to log into its respective iCloud account. It would then access the find my iPhone service, get the school iPad coordinates, then plot it on a map. After showing this to my principal and explaining the dangers of everyone having the same password, the passwords changed."
                break;
        }
        console.log("second case statement")
        switch (position[1]) {
            case 0:
                console.log("case 0")
                currentEle.current.scrollTo({
                    left: 223,
                    behavior: "smooth"
                })
                break;
            case 1:
                console.log("case 1")
                currentEle.current.scrollTo({
                    left: 1406,
                    behavior: "smooth"
                })
                break;
            case 2:
                console.log("case 2")
                currentEle.current.scrollTo({
                    left: 2589,
                    behavior: "smooth"
                })
                break;
            case 3:
                console.log("case 3")
                currentEle.current.scrollTo({
                    left: 3772,
                    behavior: "smooth"
                })
                break;
            case 4:
                console.log("case 4")
                currentEle.current.scrollTo({
                    left: 4956,
                    behavior: "smooth"
                })
                break;
            case 5:
                console.log("case 5")
                currentEle.current.scrollTo({
                    left: 6139,
                    behavior: "smooth"
                })
                break;
            case 6:
                console.log("case 6")
                currentEle.current.scrollTo({
                    left: 7322,
                    behavior: "smooth"
                })
                break;
        }
    }

    function posToEle(position) {
        switch (position) {
            case 0:
                return scoutcodeRef;
            case 1:
                return mineolaroboRef;
            case 2:
                return accountsystemRef;
            case 3:
                return suscodeRef;
        }
    }
    function changePos(direction) {
        if (direction == "down") {
            (position[0] != 3) ? position[0] += 1 : position[0] = 0;
            position[1] = 0;
            move();
        } else if (direction == "up") {
            (position[0] != 0) ? position[0] -= 1 : position[0] = 3;
            position[1] = 0;
            move();
        } else if (direction == "left") {
            (position[1] != 0) ? position[1] -= 1 : position[1] = posToEle(position[0]).current.childElementCount - 1;
            move();
        } else if (direction == "right") {
            (position[1] != posToEle(position[0]).current.childElementCount - 1) ? position[1] += 1 : position[1] = 0;
            move();
        }
        console.log(position);
    }
    useEffect(() => {
        function checkerImgWrapper(){
            switch (imgWrapperRef.current.scrollTop) {
                case 50:
                    position = [0, 0];
                    currentEle = scoutcodeRef;
                    move();
                    console.log(position);
                    break;
                case 1293:
                    position = [1, 0];
                    currentEle = mineolaroboRef;
                    move();
                    console.log(position);
                    break;
                case 2536:
                    position = [2, 0];
                    currentEle = accountsystemRef;
                    move();
                    console.log(position);
                    break;
                case 3780:
                    position = [3, 0];
                    currentEle = suscodeRef;
                    move();
                    console.log(position);
                    break;
                default:
                    break;
            }
        }
        function checkerCurrentEle() {
            switch (currentEle.current.scrollLeft) {
                case 223:
                    position[1] = 0;
                    console.log(position);
                    break;
                case 1406:
                    position[1] = 1;
                    console.log(position);
                    break;
                case 2589:
                    position[1] = 2;
                    console.log(position);
                    break;
                case 3772:
                    position[1] = 3;
                    console.log(position);
                    break;
                case 4956:
                    position[1] = 4;
                    console.log(position);
                    break;
                case 6139:
                    position[1] = 5;
                    console.log(position);
                    break;
                case 7322:
                    position[1] = 6;
                    console.log(position);
                    break;
                default:
                    break;
            }
        }
        imgWrapperRef.current.addEventListener("scroll", checkerImgWrapper);
        scoutcodeRef.current.addEventListener("scroll", checkerCurrentEle);
        mineolaroboRef.current.addEventListener("scroll", checkerCurrentEle);
        accountsystemRef.current.addEventListener("scroll", checkerCurrentEle);
        suscodeRef.current.addEventListener("scroll", checkerCurrentEle);
    })

    return (
        <motion.div className="bestworks" >
            {/* <motion.div className="scroll-wrapper"
                variants={scrollMotion}
                initial={"from"}
                animate={"to"}
                exit={"exit"}
            >
                <i className="bi bi-arrow-down"></i>
                <p>SCROLL</p>
            </motion.div> */}
            <div className="buttons">
                <motion.button
                    variants={dirctionMotion}
                    initial={"fromTop"}
                    animate={"to"}
                    exit={"exitTop"}
                    whileHover={"hover"}
                    whileTap={"tap"}
                    onClick={() => changePos("up")}
                    className="vertScrollButton" id='up'
                >
                    <FontAwesomeIcon icon={faArrowUp}    />
                </motion.button>
                <motion.button
                    variants={dirctionMotion}
                    initial={"fromBottom"}
                    animate={"to"}
                    exit={"exitBottom"}
                    whileHover={"hover"}
                    whileTap={"tap"}
                    onClick={() => changePos("down")}
                    className="vertScrollButton" id='down'
                >
                    <FontAwesomeIcon icon={faArrowDown}  />
                </motion.button>
                <motion.button
                    variants={dirctionMotion}
                    initial={"fromLeft"}
                    animate={"to"}
                    exit={"exitLeft"}
                    whileHover={"hover"}
                    whileTap={"tap"} 
                    onClick={() => changePos("left")}
                    className="horScrollButton"  id='left'
                >
                    <FontAwesomeIcon icon={faArrowLeft}  />
                </motion.button>
                <motion.button
                    variants={dirctionMotion}
                    initial={"fromRight"}
                    animate={"to"}
                    exit={"exitRight"}
                    whileHover={"hover"} 
                    whileTap={"tap"}
                    onClick={() => changePos("right")}
                    className="horScrollButton"  id='right'
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </motion.button>
            </div>
            
            <motion.div className="img-wrapper"
                variants={imgMotion}
                initial={"from"}
                animate={"to"}
                exit={"exit"}
                ref={imgWrapperRef}
            >
                
                {/* scrollTop: 50 */}
                <div className='carosel' id='scoutcode' ref={scoutcodeRef}>
                    <div className="img"><Image src={process.env.PUBLIC_URL + '/assets/bestworks/scoutcode-homepage.webp'} fallback={process.env.PUBLIC_URL + '/assets/scoutcode-homepage.jpg'} alt="scoutcode-homepage"/></div>
                    <div className="img"><Image src={process.env.PUBLIC_URL + '/assets/bestworks/scoutcode-leaderboard.webp'} fallback={process.env.PUBLIC_URL + '/assets/scoutcode-leaderboard.jpg'} alt="scoutcode-leaderboard"/></div>
                    <div className="img"><Image src={process.env.PUBLIC_URL + '/assets/bestworks/scoutcode-data1.webp'} fallback={process.env.PUBLIC_URL + '/assets/scoutcode-data1.jpg'} alt="scoutcode-data1"/></div>
                    <div className="img"><Image src={process.env.PUBLIC_URL + '/assets/bestworks/scoutcode-data2.webp'} fallback={process.env.PUBLIC_URL + '/assets/scoutcode-data2.jpg'} alt="scoutcode-data2"/></div>
                    <div className="img"><Image src={process.env.PUBLIC_URL + '/assets/bestworks/scoutcode-data3.webp'} fallback={process.env.PUBLIC_URL + '/assets/scoutcode-data3.jpg'} alt="scoutcode-data3"/></div>
                    <div className="img"><Image src={process.env.PUBLIC_URL + '/assets/bestworks/scoutcode-data4.webp'} fallback={process.env.PUBLIC_URL + '/assets/scoutcode-data4.jpg'} alt="scoutcode-data4"/></div>
                    <div className="img"><Image src={process.env.PUBLIC_URL + '/assets/bestworks/scoutcode-data5.webp'} fallback={process.env.PUBLIC_URL + '/assets/scoutcode-data5.jpg'} alt="scoutcode-data5"/></div>
                </div>

                {/* scrollTop: 1293 */}
                <div className='carosel' id='mineolarobo' ref={mineolaroboRef}>
                    <div className="img"><Image src={process.env.PUBLIC_URL + '/assets/bestworks/mineolarobo-welcomescreen.webp'} fallback={process.env.PUBLIC_URL + '/assets/mineolarobo-welcomescreen.jpg'} alt="mineolarobo-welcomescreen"/></div>
                    <div className="img"><Image src={process.env.PUBLIC_URL + '/assets/bestworks/mineolarobo-nav.webp'} fallback={process.env.PUBLIC_URL + '/assets/mineolarobo-nav.jpg'} alt="mineolarobo-nav"/></div>
                </div>

                {/* scrollTop: 2536 */}
                <div className='carosel' id='accountsystem' ref={accountsystemRef}>
                    <div className="img"><Image src={process.env.PUBLIC_URL + '/assets/bestworks/accountsystem-homepage-global.webp'} fallback={process.env.PUBLIC_URL + '/assets/accountsystem-homepage-global.jpg'} alt="accountsystem-homepage-global"/></div>
                    <div className="img"><Image src={process.env.PUBLIC_URL + '/assets/bestworks/accountsystem-signup.webp'} fallback={process.env.PUBLIC_URL + '/assets/accountsystem-signup.jpg'} alt="accountsystem-signup"/></div>
                    <div className="img"><Image src={process.env.PUBLIC_URL + '/assets/bestworks/accountsystem-homepage-signedin.webp'} fallback={process.env.PUBLIC_URL + '/assets/accountsystem-homepage-signedin.jpg'} alt="accountsystem-homepage-signedin"/></div>
                </div>

                {/* scrollTop: 3780 */}
                <div className='carosel' id='suscode' ref={suscodeRef}>
                    <div className="img"><Image src={process.env.PUBLIC_URL + '/assets/bestworks/suscode-mapin.webp'} fallback={process.env.PUBLIC_URL + '/assets/suscode-mapin.jpg'} alt="suscode-mapin"/></div>
                    <div className="img"><Image src={process.env.PUBLIC_URL + '/assets/bestworks/suscode-mapout.webp'} fallback={process.env.PUBLIC_URL + '/assets/suscode-mapout.jpg'} alt="suscode-mapout"/></div>
                </div>
            </motion.div>
            <motion.div className="desc-wrapper backdrop-blur"
                variants={descMotion}
                initial={"from"}
                animate={"to"}
                exit={"exit"}
            >
                <div className="word-wrapper">
                    <h1 ref={descTitleRef}>Scout Code</h1>
                    <h2 ref={descDateRef}>March 2021 - May 2021</h2>
                    <p ref={descDescRef}>A flask app that uses data from a script that gets data on every team in a competition from the FIRST API. For example, the types of data it retrieves are total points, total fouls, the number of times a robot has done something, and so on. The app then represents this data with graphs and tables. It also creates its own leaderboard based on things we want in a team. Let's say your team is looking for another team with a robot that is a good scorer; the leaderboard will weigh accordingly. Stats that demonstrate scoring potential will be weighted as more of a priority over stats that demonstrate defense.</p>
                </div> 
            </motion.div>
        </motion.div>
    );
}

export default BestWorks;