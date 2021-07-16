
import Image from "next/image"
import Navbar from "./Navbar"
function Banner() {
    return (
        <div className=" bg-center bg-no-repeat h-screen w-screen "
            style={{ background: 'url("https://i.ibb.co/5WR8Nnm/3-D-earth-graphic-symbolizing-global-trade-vector-illustration.jpg") ', backgroundSize: 'cover' , backgroundRepeat:'no-repeat'}}>
        
            <Navbar/>

            <h1 className="text-6xl text-white mt-60 ml-44 font-bold">NEW  VISION  <br/>  NEW FUTURE</h1>


            <div className="flex ml-44 mt-40 ">
                <button className="bg-white px-4  py-2 text-blue-900 font-bold mr-5 rounded-lg">GET IN TOUCH</button>
                <button className="border-2 border-white px-4  py-2 text-white font-bold  rounded-lg">VIEW DEMO</button>
            </div>
           
            
        </div>
    )
}

export default Banner
