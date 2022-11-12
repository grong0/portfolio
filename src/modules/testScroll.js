import { useRef } from 'react';
import { useEffect } from 'react';
import '../styles/testScroll.css';

const scrollElement = document.querySelector(".scroll");

var posValues = null;
var scrollElementHeight = null;
var pos = 0;

// function getCarouselPositions() {
//     posValues = [];
//     document.querySelectorAll('#container h1').forEach(function(div) {
//         posValues.push([div.offsetTop, div.offsetTop + div.offsetHeight]); // add to array the positions information
//     })
//     scrollElementHeight = document.querySelector(".scroll").offsetHeight/2;
// }
// getCarouselPositions(); // call it once

function goCarousel(direction) {

    var currentScrollTop = scrollElement.scrollTop;
    var currentScrollBottom = currentScrollTop + scrollElement.offsetHeight;

    // if (currentScrollTop === 0 && direction === 'next') {
    //     currentItem = 1;
    // } else if (currentScrollBottom === document.querySelector('#container').scrollHeight && direction === 'previous') {
    //     console.log('here')
    //     currentItem = posValues.length - 2;
    // } else {
    //     var currentMiddlePosition = currentScrollTop + halfContainer;
    //     for (var i = 0; i < posValues.length; i++) {
    //       if (currentMiddlePosition > posValues[i][0] && currentMiddlePosition < posValues[i][1]) {
    //         currentItem = i;
    //         if (direction === 'next') {
    //             currentItem++;
    //         } else if (direction === 'previous') {
    //             currentItem--    
    //         }
    //       }
    //     }
    // } 
    
    // document.getElementById('container').scrollTo({
    //     top: posValues[currentItem][0],
    //     behavior: 'smooth' 
    // });
}

// function next() {
//     if (position != 3) {
//         position += 1;
//     } else {
//         position = 0;
//     }
//     document.querySelector('.position').innerHTML = position;
// }
// function previous() {
//     if (position != 0) {
//         position -= 1;
//     } else {
//         position = 3;
//     }
//     document.querySelector('.position').innerHTML = position;
// }

// check = new Proxy({}, {
//     set: function(target, property, value) {
//         console.log("position value changed from " + target[property] + " to " + value);
//     }
// });

function TestScroll(){
    const ref = useRef(null);
    useEffect(() => {

        const element = ref.current;
        const input1 = document.querySelector(".scrollTop");
        const input2 = document.querySelector(".scrollBottom");

        return () => {
            element.addEventListener("scroll", () => {
                input1.innerHTML = "scrollTop : " + element.scrollTop;
                input2.innerHTML = "scrollBottom : " + element.scrollBottom;

                if (element.scrollTop == posValues[0]) {
                    position = 0;
                    document.querySelector('.position').innerHTML = position;
                } else if (element.scrollTop == posValues[1]) {
                    position = 1;
                    document.querySelector('.position').innerHTML = position;
                } else if (element.scrollTop == posValues[2]) {
                    position = 2;
                    document.querySelector('.position').innerHTML = position;
                } else if (element.scrollTop == posValues[3]) {
                    position = 3;
                    document.querySelector('.position').innerHTML = position;
                }
            });
            window.addEventListener("resize", getCarouselPositions);
        }
    }, []);
    return (
        <div className='container'>
            <div className="scroll" ref={ref}>
                <h1>Position 1</h1>
                <h1>Position 2</h1>
                <h1>Position 3</h1>
                <h1>Position 4</h1>
            </div>
            <p className='scrollTop'></p>
            <p className='scrollBottom'></p>
            <p className='position'></p>
            <div className='buttonsTest'>
                <button id='next' onClick={goCarousel('next')}>Next</button>
                <button id='previous' onClick={goCarousel('previous')}>Previous</button>
            </div>
        </div>
    );
}

export default TestScroll;