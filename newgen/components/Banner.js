
import Image from "next/image"
import Navbar from "./Navbar"

import Rotate from 'react-reveal/Rotate';

import { AiOutlineDown } from 'react-icons/ai';
function Banner({source , size , text , font , navbar , color}) {
    console.log(source)
     console.log(font)
    return (

     
        <div className=" bg-center bg-no-repeat h-screen w-screen  z-0 bg-opacity-0 mx-auto"
            style={{ background: `url("${source}") `, backgroundSize: `${size}` , backgroundRepeat:'no-repeat'}}>
        
            <Navbar background={navbar} />

            <Rotate bottom left duration={2500}>
                <h1 className={`${font} w-4/12 ${color} mt-60 ml-44 font-bold  z-40`} > {text} </h1>
            </Rotate>

           


            <div className="flex ml-44 mt-40 z-40">
                <button className="bg-white border-2 px-4  py-2 text-blue-900 font-bold mr-5 rounded-lg hover:bg-transparent hover:text-white hover:border-white ">COMMENCER</button>
                <button className="border-2 border-white px-4  py-2 text-white font-bold  rounded-lg  hover:bg-blue-900 ">VOIR DEMO</button>
            </div>

            <div className="w-screen grid place-items-center text-5xl mt-14 animate-bounce text-white">
               <AiOutlineDown className={`${color}`} />
              
            </div>
           
            
        </div>
    )
}

export default Banner
