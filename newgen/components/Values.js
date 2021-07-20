import {
    LinkIcon,
} from '@heroicons/react/outline'

import { FaUserTie } from 'react-icons/fa';
import { FaHandshake } from 'react-icons/fa';


function Values() {
    return (
        <div>
            <h3 className="font-bold text-blue-900 text-3xl text-center  mb-20 underline" >Nos Valeurs</h3>

            <div className="flex  w-auto  justify-around   mb-72 ">
                <div className="w-72 text-center  ">
                    <LinkIcon className=" w-10 text-blue-900 text-center ml-32  "/>
                    <h4 className="font-bold text-blue-900 text-xl mb-6" >Confiance</h4>
                    <p>Nous sommes persuadés que la confiance amène à  des collaborations pérenne dans le temps. Par conséquent, établir et maintenir ’une relation de confiance avec nos collaborateurs ainsi que nos clients est un impératif.</p>

              </div>

                <div className="w-72 text-center ">
                    <FaUserTie className=" text-5xl text-blue-900 text-center ml-32"  />
                    <h4 className="font-bold text-blue-900 text-xl mb-6" >Professionnalisme</h4>
                    <p>Nous avons  un grand sens d’engagement envers nos clients. Nos équipes s'investissent pleinement dans leur travail quotidien dans le but de livrer des produits de qualité dans les temps.</p>

                </div>

                <div className="w-72 text-center ">
                    <FaHandshake className="  text-5xl text-blue-900 text-center ml-32 " />
                    <h4 className="font-bold text-blue-900 text-xl mb-6" >Collaboration</h4>
                    <p>Notre réussite dépend de celle de nos clients. Nous  insufflons à nos équipe  l’esprit de collaboration et de partage dans le but de  faciliter le partage et développer les compétences</p>

                </div>
            </div>
            
        </div>
    )
}

export default Values
