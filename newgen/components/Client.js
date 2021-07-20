// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'



import { Swiper, SwiperSlide } from 'swiper/react'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
import 'swiper/swiper-bundle.css';

import {
    CheckIcon,
    ChevronRightIcon

} from '@heroicons/react/outline'

import Image from 'next/image'


function Client() {
    return (
        <div className=' w-10/12 mx-auto text-center'>

            <h3 className="font-bold text-blue-900 text-3xl text-center mt-7  underline" >Temoignage</h3>


            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className=""
            >


                <SwiperSlide className=" grid place-items-center w-11/12 ">
                    <div className="ml-28">
                       

                        <div className="grid place-items-center mr-10">
                            <p className="flex relative  top-56 right-10 rounded-lg  text-lg  bg-gray-200 text-blue-900 px-10 py-10">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br /> dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                            </p>


                            <img src="https://lagazette.aumaroc.org/wp-content/uploads/2016/06/team-1.jpg" className="rounded-full w-24 relative  top-60 mr-16 " alt="" />

                          
                        </div>
                        




                    </div>
                  
                </SwiperSlide>

                <SwiperSlide className=" w-11/12 ">
                    <div className=" ml-28">
                        <h3 className="font-bold text-blue-900 text-2xl  mt-7 mb-20 underline" >Cloud services</h3>

                        <div className="flex">
                            <p className="flex relative top-12"> Nous construisons- en collaboration avec le  service IT de <br /> nos clients  la stratégie de  migration vers le cloud.  ainsi que <br />les réductions de coûts associés
                            </p>



                            <Image src="https://i.ibb.co/L5QWTxK/Capture.png" width={600} height={400} />
                        </div>




                    </div>
                    <button className="flex  border-2 border-blue-900 px-4 relative   left-28 bottom-44  py-2 text-blue-900 font-bold  rounded-lg hover:bg-blue-900 hover:text-white hover:border-blue-900">Voir Plus
                        <ChevronRightIcon className="w-5 ml-3 mt-1" />
                    </button>
                </SwiperSlide>
              
               

            </Swiper>



            
        </div>
    )
}

export default Client
