import Contact from "./Contact";
import Map from "./Map";

function Latest() {
    return (
        <div>
            <h3 className="font-bold text-blue-900 text-3xl text-center mt-24 mb-20 underline" >Latest of Newgen Intelligence</h3>

            <div className="flex w-9/12 mx-auto  justify-between">
                <div className="flex cursor-pointer">
                    <div className="grid h-16 w-16 border-gray-400 border-2 place-items-center">
                        <h1 className="font-bold text-gray-400 p-1 text-xl">Aug</h1>
                        <h2 className="font-bold text-gray-400  text-xl">16</h2>

                    </div>
                    <div className="ml-5">
                        <h3 className="font-medium text-blue-800 text-xl " >Business Insight and Analytics Event</h3>
                        <p className="">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed</p>
                    </div>
                  

                </div>


                <div className="flex cursor-pointer">
                    <div className="grid h-16 w-16 border-gray-400 border-2 place-items-center">
                        <h1 className="font-bold text-gray-400 p-1 text-xl">Aug</h1>
                        <h2 className="font-bold text-gray-400  text-xl">16</h2>

                    </div>
                    <div className="ml-5">
                        <h3 className="font-medium text-blue-800 text-xl" >Business Insight and Analytics Event</h3>
                        <p className="">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed</p>
                    </div>


                </div>
               
            </div>


            <div className="mt-44 ml-44 w-10/12 flex justify-between">
                <Map />
                <Contact />

            </div>

           

        </div>
    )
}

export default Latest
