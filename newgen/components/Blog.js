import Image from 'next/image'
import Link  from 'next/link'

import {
    CheckIcon,
    ChevronRightIcon

} from '@heroicons/react/outline'
function Blog() {
    return (
        <div className="w-10/12 mx-auto mt-44 grid  place-items-center ">

            <h3 className="font-bold text-blue-900 text-3xl text-center mt-7 mb-20 underline " >Nos Blogs</h3>

            <div className="flex">
              <Link href="/blogs">
                    <div className="shadow-lg grid mr-14 ml-10 group  w-7/12 cursor-pointer rounded-2xl">
                        <div className=" h-72 w-full rounded-t-2xl  " style={{ background: 'url("https://i.ibb.co/6tXkNP3/raw.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>  </div>

                        <h5 className="font-bold text-2xl group-hover:group-hover:text-blue-900 p-5  ">How We can Increase your business ?</h5>

                        <p className=" p-5  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br /> dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>

                        <br />
                        <button className="flex w w-2/5 border-2 border-none px-4 relative    mx-3.5 mb-5  py-2 group-hover:group-hover:text-blue-900 font-bold  rounded-lg ">Voir Plus
                            <ChevronRightIcon className="w-5 ml-3 mt-1" />
                        </button>

                    </div>

              </Link>
                
                <div className="shadow-lg grid  w-5/12 group cursor-pointer rounded-lg">
                    <div className="h-72 w-full rounded-t-2xl p-5" style={{ background: 'url("https://i.ibb.co/6tXkNP3/raw.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>  </div>

                    <h5 className="font-bold text-2xl group-hover:text-blue-900 p-5">How We can Increase your business ?</h5>

                    <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br /> dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                   
                    <br />
                    <button className="flex w w-2/5 border-2 border-none px-4 relative    mx-3.5 mb-5  py-2 group-hover:text-blue-900 font-bold  rounded-lg ">Voir Plus
                        <ChevronRightIcon className="w-5 ml-3 mt-1" />
                    </button>

                </div>
            </div>


            <div className="flex mt-10 ">
                <div className="shadow-lg grid mr-14 ml-10 group  w-4/12 cursor-pointer rounded-lg">
                    <div className="h-72 w-full rounded-t-2xl" style={{ background: 'url("https://i.ibb.co/6tXkNP3/raw.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>  </div>

                    <h5 className="font-bold text-2xl group-hover:text-blue-900 p-5  ">How We can Increase your business ?</h5>

                    <p className=" p-5  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br /> dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>

                    <br />
                    <button className="flex w w-2/5 border-2 border-none px-4 relative    mx-3.5 mb-5  py-2 group-hover:text-blue-900 font-bold  rounded-lg ">Voir Plus
                        <ChevronRightIcon className="w-5 ml-3 mt-1" />
                    </button>

                </div>

                <div className="shadow-lg grid  w-4/12  mr-14 ml-10 group cursor-pointer rounded-lg">
                    <div className="h-72 w-full rounded-t-2xl p-5" style={{ background: 'url("https://i.ibb.co/6tXkNP3/raw.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>  </div>

                    <h5 className="font-bold text-2xl group-hover:text-blue-900 p-5">How We can Increase your business ?</h5>

                    <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br /> dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>

                    <br />
                    <button className="flex w w-2/5 border-2 border-none px-4 relative    mx-3.5 mb-5  py-2 group-hover:text-blue-900 font-bold  ">Voir Plus
                        <ChevronRightIcon className="w-5 ml-3 mt-1" />
                    </button>

                </div>

                <div className="shadow-lg grid  w-4/12 group cursor-pointer rounded-lg">
                    <div className="h-72 w-full rounded-t-2xl p-5" style={{ background: 'url("https://i.ibb.co/6tXkNP3/raw.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>  </div>

                    <h5 className="font-bold text-2xl group-hover:text-blue-900 p-5">How We can Increase your business ?</h5>

                    <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br /> dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>

                    <br />
                    <button className="flex w w-2/5 border-2 border-none px-4 relative    mx-3.5 mb-5  py-2 group-hover:text-blue-900 font-bold   ">Voir Plus
                        <ChevronRightIcon className="w-5 ml-3 mt-1" />
                    </button>

                </div>
            </div>

            
            
        </div>
    )
}

export default Blog
