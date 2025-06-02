import React, { useEffect, useRef, useState } from 'react'
import Assignbody5 from './Assignbody5'

function Assignbody4() {
    const [percent, setPercent] = useState(0)
    const [percent2, setPercent2] = useState(0)
    const [hasStarted, setHasStarted] = useState(false);
    const maxPercent = 50;
    const maxPercent2 = 99;
    const timerRef = useRef(null)
    const timerRef2 = useRef(null)

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
        let interval;
        if (hasStarted){
            interval = setInterval(()=>{
            setPercent(prevPercent => {
                if(prevPercent < maxPercent) {
                    return prevPercent + 1
                } else {
                    clearInterval(interval)
                    return prevPercent
                }
            })
            }, 20)
        } else {
            setPercent(0)
        }
            
        
        return ()=> clearInterval(interval);
    }, [hasStarted])


// SECOND 

   useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry]) => {
                    setHasStarted(entry.isIntersecting);
            },
            {
                threshold: 0.5,
            }
        );

        if (timerRef2.current) {
            observer.observe(timerRef2.current);
        }

        return ()=> {
            if (timerRef2.current) {
                observer.unobserve(timerRef2.current);
            }
        };
    },[])

    useEffect(()=>{
        let interval2
        if (hasStarted){
             interval2 = setInterval(()=>{
            setPercent2(prevPercent2 => {
                if(prevPercent2 < maxPercent2) {
                    return prevPercent2 + 1
                } else {
                    clearInterval(interval2)
                    return prevPercent2
                }
            }, 200)
        })
        } else {
            setPercent2(0)
        }
       
        return ()=> clearInterval(interval2);
    }, [hasStarted])





  return (
    <>
        <div className= ' w-[74%] m-auto mt-20 mb-9'>
            <p className=' text-4xl font-bold w-[50%]'>We are the best agency to improve your deals</p>
            <p className=' text-2xl mt-4'>We work directly for our clients and put client’s interests first.</p>
        </div>
        
        <div className=' h-[30rem]  grid grid-cols-2 w-[70rem] m-[auto]'>
            <div><img src="chevrolet.webp" alt=""  className=' h-[100%]'/></div>

            <div className=' grid grid-rows-2'>
                <div className=' flex items-center justify-center gap-9'>
                    <div className=' w-[200px] h-[180px]'>
                        <p className='w-[100%] h-[60%]   text-7xl font-bold flex items-center justify-center' ref={timerRef}>{percent}%</p>
                        <p className=' font-light h-[40%] text-[0.9rem]'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    </div>
                    <div className=' w-[200px] h-[180px] flex flex-col '>
                        <p className='w-[100%] h-[60%] text-7xl font-bold flex items-center justify-center'ref={timerRef2}>{percent2}%</p>
                        <p className=' font-light h-[40%] text-[0.9rem]'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    </div>
                 
                </div>
                <div>
                    <p className=' text-[1.3rem] text-left pt-[50px] pl-[30px] w-[95%]'>Everything that can be necessary to create and manage new projects (startups) in modern conditions. From development of concept,
                        business plan and project management plan, to marketing strategy and tactics, as well as the system of customer attraction via 
                        the Internet and sales system.
                    </p>
                </div>
            </div>
        </div>
        <Assignbody5 />
    </>
  )
}

export default Assignbody4