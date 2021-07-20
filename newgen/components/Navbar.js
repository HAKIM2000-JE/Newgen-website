import Image from "next/image"
import Link from "next/link"


function Navbar({background}) {
    return (
        <div>
            

           
            <nav className={`bg-${background}`}>
            
                <div className="container mx-auto ">
                    <div className="sm:flex justify-around " >
                        <Image src="https://i.ibb.co/tDKR0TV/newgen-Logo.png" width={180} height={50} />
                       
                        

                        
                        <ul className="text-gray-400 sm:self-center text-base border-t sm:border-none ">
                            <li className="sm:inline-block ">
                              <Link href="/" >
                                    <a href="#" className="p-3 text-white">Home</a>
                              </Link>
                                
                            </li>
                            <li className="sm:inline-block">
                                <a href="#" className="p-3 hover:text-white">Product</a>
                            </li>
                            <li className="sm:inline-block">
                                <a href="#" className="p-3 hover:text-white">Company</a>
                            </li>
                            <li className="sm:inline-block">
                                <a href="#" className="p-3 hover:text-white">Blog</a>
                            </li>
                           

                           
                        </ul>
                    </div>
                </div>
            </nav>
            <hr className=" w-9/12 mx-auto "/>
            
        </div>
    )
}

export default Navbar
