import React, { useEffect, useRef, useState } from 'react'
import Assignfoot from './Assignfoot'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { use } from 'react';

function Assignbody6() {

        const [percent, setPercent] = useState(0)
        // const [percent2, setPercent2] = useState(0)
        const [hasStarted, setHasStarted] = useState(false);
        const maxPercent = 166;
        // const maxPercent2 = 99;
        const timerRef = useRef(null)
        // const timerRef2 = useRef(null)

        useEffect(()=>{
            const observer = new IntersectionObserver(
                ([entry]) => {
                 setHasStarted(entry.isIntersecting);
                },
                {
                    threshold: 0.5,
                }
            );
    
            if (timerRef.current) {
                observer.observe(timerRef.current);
            }
    
            return ()=> {
                if (timerRef.current) {
                    observer.unobserve(timerRef.current);
                }
            };
        },[])
    
    useEffect(()=>{
        let interval2;
        if (hasStarted) {
        interval2 = setInterval(()=>{
            setPercent((prevPercent)=>{
                if (prevPercent < maxPercent) {
                    return prevPercent + 1
                } else {
                    clearInterval(interval2)
                    return prevPercent
                }
            })
        }, 2000)
        } else {
            setPercent(0)
        }
    }, [])



  return (
    <>
        <div className=' h-[500px] mt-[500px] w-[70%] m-[auto] grid grid-cols-2'>
            <div>
                <img src="fine.jpg" alt="Beauty" className=' w-[80%] h-[90%] ml-[40px] mt-[25px]'/>
            </div>
            <div className='grid grid-cols-2 grid-rows-2 gap-[10px]'>
                <div className=' bg-white flex flex-col justify-center'>
                    <p className=' text-7xl font-bold text-left mb-[20px]' ref={timerRef}>{percent}+</p>
                    <p className=' text-[1.4rem] text-left text-gray-400'>Our current team count, ​vulputate enim nulla aliquet</p>
                </div>

                <div className=' bg-white flex flex-col justify-center'>
                    <p className=' text-7xl font-bold text-left mb-[20px]' ref={timerRef}>{percent}+</p>
                    <p className=' text-[1.4rem] text-left text-gray-400'>Our current team count, ​vulputate enim nulla aliquet</p>
                </div>

                <div className=' bg-white flex flex-col justify-center'>
                    <p className=' text-7xl font-bold text-left mb-[20px]' ref={timerRef}>{percent}+</p>
                    <p className=' text-[1.4rem] text-left text-gray-400'>Our current team count, ​vulputate enim nulla aliquet</p>
                </div>

                <div className=' bg-white flex flex-col justify-center'>
                    <p className=' text-7xl font-bold text-left mb-[20px]' ref={timerRef}>{percent}+</p>
                    <p className=' text-[1.4rem] text-left text-gray-400'>Our current team count, ​vulputate enim nulla aliquet</p>
                </div>
            </div>
        </div>


                                    {/* ABOUT US  */}

        <div className=' w-[70%] h-[500px] mt-[70px] m-[auto] grid grid-cols-3'>
            <div>
                <p className=' font-bold text-4xl m-[30px]'>About Us</p>
                <p className=' text-[1.3rem] text-gray-400 ml-[30px] mr-[80px]'>
                    A monthly digest of the latest news and venenat is urna resources.
                    our clinic was created to make your smile beautiful, healthy and snow-white.
                </p>
                <p className=' mt-[50px] font-bold text-5xl flex gap-[20px] justify-center ml-[30px] mr-[80px]'> 
                     <FaFacebookF style={{border: "2px solid red", borderRadius: "50%", fontSize: "60px", color: "white", backgroundColor: "red", padding: "10px"}}/>
                     <FaTwitter style={{border: "2px solid red", borderRadius: "50%", fontSize: "60px", color: "white", backgroundColor: "red", padding: "10px"}}/>
                     <FaInstagram style={{border: "2px solid red", borderRadius: "50%", fontSize: "60px", color: "white", backgroundColor: "red", padding: "10px"}}/>
                </p>
            </div>
            <div>
                <img src="Horse.png" alt="A man riding a horse" className=' w-[90%] h-[100%]' />
            </div>
            <div>
                <p className='text-4xl font-bold mt-[30px] mb-[30px]'>Contact Us</p>
                <p className=' text-[1.3rem] mb-[30px]'>Sample text. Click to select the text box. Click again or double click to start editing the text</p>
                <form action="">
                    <input type="text" name='names' placeholder="Enter your name" className=' bg-gray-300 mb-[20px] h-[50px] w-[100%] text-[1.3rem]'/>
                    <input type="text" name='email' placeholder='Enter a valid email address' className=' bg-gray-300 w-[100%] h-[50px] text-[1.3rem]'/>
                    <button type='submit' className=' w-[100%] h-[50px] bg-red-600 text-[1.2rem] text-white mt-[20px]'>Submit</button>
                </form>
            </div>
        </div>
        <Assignfoot />
    </>
  )
}

export default Assignbody6