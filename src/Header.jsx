import { FaAlignLeft } from "react-icons/fa6";
import Extra from "./Extra";
import { useState } from "react";

export default function Header () {
    const [mover, setMover] = useState(false)

    function changer (){
        setMover(!mover)
    }

    return(
        <>
        <div onClick={changer}>
        <Extra 
            mover ={mover}
        />
        </div>
            <header className=" flex justify-around items-center h-[60px]">
            <div className="">
                <h1 className=" text-3xl font-bold">Logo</h1>
            </div>
             <nav className=" hidden md:block ">
                <ul className=" flex gap-7 font-medium">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Gallery</li>
                    <li>Team</li>
                </ul>
             </nav>
             <div className=" md:hidden">
                <button onClick={changer}><FaAlignLeft /></button>
             </div>
             
        </header>
        </>
    
    )
}