import React from 'react'
import Assignbody2 from './Assignbody2'
import { TbBulb } from "react-icons/tb";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RxSpeakerLoud } from "react-icons/rx";






function Assignbody() {
    const consultingFirm = ["Strategy", "Results", "Expertise", "Support"]
  return (
    <>
        <img src="image 1.jpg" alt="students image" className=''/>

 

        <div className=' w-[57rem] h-[20rem] bg-red-600 relative mt-[-11rem] m-[auto]'>
            <div className=' h-[30rem] w-[50rem] bg-black text-white flex flex-col items-center justify-center gap-[3rem] absolute top-[-12rem] left-[3.5rem]'>
                <p className=' text-[1.2rem]'>ABOUT TRAVEL AGENCY</p>
                <p className=' text-[3rem] font-bold'>Growth strategy</p>
                <p className=' text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tempore 
                    officiis quas necessitatibus doloribus quae repellendus unde dolorem eius ipsum 
                    placeat iusto, consequuntur dignissimos dolore distinctio ratione corporis porro
                    totam.
                </p>
                <button className=' text-[1.2rem] bg-red-500 w-[10rem] h-[5rem] flex items-center justify-center'>LEARN MORE</button>
            </div>
        </div>

        <div className='w-[60rem] h-[22rem] m-[auto] mt-[8rem] grid grid-cols-2'>
            <div className=' ml-[50px]'>
                <p className=' w-[70%] h-[100%] bg-red-500 font-bold text-8xl text-white pl-[20px]'>01</p>
            </div>
            <div>
                <p className=' text-[2.5rem] font-bold'>Providing information to a client</p>
                <p className=' text-2xl'>
                    Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money
                     hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed
                     but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led.
                </p>

            </div>
        </div>

        <div className=' mt-[8rem]'>
            <p className=' font-bold text-[2.7rem] m-[auto] text-center mb-[1rem]'>About Consulting Firm</p>
            <p className=' text-[1.2rem] text-center'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
          
            <div className=' mt-[5rem]'>
                <div className=' w-[95rem] h-[20rem] bg-[url(middle.jpg)] bg-top mt-[25rem] relative'>
                    <div className=' w-[15rem] h-[22rem] bg-white border border-black absolute top-[-150px] left-[200px] font-bold text-5xl flex flex-col items-center gap-[20px]'>
                        <TbBulb style={{border: "2px solid red", borderRadius: "50%", fontSize: "70px", color: "red", backgroundColor: "rgb(270, 208, 208)", marginTop: "30px", padding: "10px"}}/>
                        <p className=' font-bold text-2xl w-[100%] text-center'>{consultingFirm[0]}</p>
                    </div>

                     <div className=' w-[15rem] h-[22rem] bg-white border border-black absolute top-[-250px] left-[500px] font-bold text-5xl flex flex-col items-center gap-[20px]'>
                        <RxSpeakerLoud style={{border: "2px solid red", borderRadius: "50%", fontSize: "70px", color: "red", backgroundColor: "rgb(270, 208, 208)", marginTop: "30px", padding: "10px"}}/>
                        <p className=' font-bold text-2xl w-[100%] text-center'>{consultingFirm[1]}</p>
                        <p className=' w-[100%] h-[80%] text-[21px] p-[20px] font-light text-center'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur <br /><span className=' w-[60px] border-b-2 block text-center mt-[20px] m-[auto] '>MORE</span></p>
                    </div>

                     <div className=' w-[15rem] h-[22rem] bg-white border border-black absolute top-[-150px] right-[500px] font-bold text-5xl flex flex-col items-center gap-[20px]'>
                        <IoDiamondOutline style={{border: "2px solid red", borderRadius: "50%", fontSize: "70px", color: "red", backgroundColor: "rgb(270, 208, 208)", marginTop: "30px", padding: "10px"}}/>
                        <p className=' font-bold text-2xl w-[100%] text-center'>{consultingFirm[2]}</p>
                    </div>

                     <div className=' w-[15rem] h-[22rem] bg-white border border-black absolute top-[-250px] right-[200px] font-bold text-5xl flex flex-col items-center gap-[20px]'>
                        <MdOutlineSupportAgent  style={{border: "2px solid red", borderRadius: "50%", fontSize: "70px", color: "red", backgroundColor: "rgb(270, 208, 208)", marginTop: "30px", padding: "10px"}}/>
                        <p className=' font-bold text-2xl w-[100%] text-center'>{consultingFirm[3]}</p>
                    </div>
                </div>
            </div>
        </div>
        <Assignbody2 />
    </>
  )
}

export default Assignbody