import Banner from "../components/Banner";

import Image from "next/dist/client/image";

import Bounce from 'react-reveal/Bounce';
import CloudService from "../components/CloudService";

 function cloud_services() {
     return (
         <div>
             <Banner source="https://i.ibb.co/5rYCQ9M/Cloud-banner.png" font="text-3xl" color="text-white" text="Solutions numériques avec une approche de développement centrée sur l'utilisateur" size="cover"  />

            { /*<Banner source="https://i.ibb.co/SsC4v1B/cloud-banner1.png" navbar="blue-900" text="Solutions numériques avec une approche de développement centrée sur l'utilisateur" font={"text-3xl"} size="cover" size="cover" color={"text-blue-900"} />*/}

             <h3 className="font-bold text-blue-900 text-3xl text-center mt-20  mb-20 underline" >On vous aide à avoir des outils à la hauteur de vos ambitions</h3>

             <div className="flex  w-10/12 mx-auto  justify-around   mb-72 ">
                 <div className="w-72 text-center  ">
                   <Bounce duration={2000}  >
                         <img className=" w-24  ml-24 mb-14  " src="https://i.ibb.co/N67nxs5/Capture.png" />
                   </Bounce>
                   
                     <h4 className="font-bold text-blue-900 text-xl mb-6" >Accompagnement 
                         De Votre Migration vers Cloud</h4>
                     
                 </div>

                 <div className="w-72 text-center ">

                     <Bounce duration={2000} delay={500}  >
                         <img src="https://i.ibb.co/4gqK8Yv/Capture.png" className="w-24 mb-14 ml-24" />

                     </Bounce>

                     <h4 className="font-bold text-blue-900 text-xl mb-6" >Profitez , où que vous soyez des outils cloud grace à Newgen</h4>
                    

                 </div>

                 <div className="w-72 text-center ">

                     <Bounce duration={2000} delay={1000}  >
                         <img src="https://i.ibb.co/c8mrY3L/Capture.png" className="w-24  mb-14 ml-24" alt="" />

                     </Bounce>

                    
                     <h4 className="font-bold text-blue-900 text-xl mb-6" >Support technique et conseils
                         24H/7</h4>
                    

                 </div>
             </div>


             <h3 className="font-bold text-blue-900 text-3xl text-center mt-24 mb-24 underline " >Accélérez votre Migration Cloud avec nos
                 Partenaires clé</h3>


                <div className="grid place-items-center w-8/12 mx-auto">
                    <div className="flex">
                       <div className="">
                         <h3 className="text-black font-semibold text-xl ">Communiquez, créez et collaborez en équipe</h3>
                         <p className="text-gray-500 text-md w-6/12 mt-14">Newgen  offre un éventail complet de services associés à votre futur environnement Google Workspace: Migration, déploiement, gestion du changement, formation et support technique, </p>

                         <div className="flex mt-16 z-40">
                             <button className="bg-blue-900 border-2 px-4  py-2 text-white  mr-5 rounded-xl hover:bg-transparent hover:text-blue-900 hover:border-blue-900 ">Commencer</button>
                             <button className="border-2 border-blue-900 px-4  py-2 text-blue-900 font-bold  rounded-xl   ">Voir Plus</button>
                         </div>

                       </div>
                       <div className="">
                       <Bounce right duration={2000} >
                             <Image src="https://i.ibb.co/d7hjhZz/Capture.png" width={300} height={50} />
                             <br />
                             <Image src="https://i.ibb.co/VY3HFYw/Capture.png" width={300} height={500} />
                       </Bounce>
                    

                          
                       </div>
                    </div>

                 <hr className=" w-11/12 mx-auto text-gray-600 mb-44 mt-16 " />

                 <div className="flex">
                     <div className="">
                         <h3 className="text-black font-semibold text-xl ">La migration vers AWS pourrait révolutionner votre entreprise</h3>
                         <p className="text-gray-500 text-md w-6/12 mt-14">Newgen vous aident à poser des bases solides pour une migration réussie vers le cloud AWS.  Nous passons en revue  vos processus et votre technologie et mettons en évidence les changements que vous devez apporter pour être prêt pour une migration vers le cloud. </p>

                         <div className="flex mt-16 z-40">
                             <button className="bg-blue-900 border-2 px-4  py-2 text-white  mr-5 rounded-xl hover:bg-transparent hover:text-blue-900 hover:border-blue-900 ">Commencer</button>
                             <button className="border-2 border-blue-900 px-4  py-2 text-blue-900 font-bold  rounded-xl   ">Voir Plus</button>
                         </div>

                     </div>
                     <div className="">

                     <Bounce right duration={2000} >
                             <Image src="https://i.ibb.co/pzTtqGH/t-l-charger-4.png" width={800} height={500} />


                     </Bounce>
                       

                     </div>
                 </div>
                 <hr className=" w-11/12 mx-auto text-gray-600 mb-44 mt-16 " />
                </div>

                <CloudService />
         </div>
     )
 }
 
 export default cloud_services
 