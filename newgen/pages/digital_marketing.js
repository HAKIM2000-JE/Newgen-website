import Banner from "../components/Banner";
import Image from "next/image"
import DigitalService from "../components/DigitalService";

function digital_marketing() {
    return (
        <div  >
            <Banner source="https://i.ibb.co/hY0zJyR/Png-Item-5400435.png" navbar="blue-900" text="Solutions numériques avec une approche de développement centrée sur l'utilisateur" font={"text-3xl"} size="cover" size="cover" color={"text-blue-900"}/>
            <h3 className="font-bold text-blue-900 text-3xl text-center  mb-44 underline" >Comment pouvons-nous vous aider ?</h3>

            <div className=" flex w-9/12 mx-auto justify-between ">
                <DigitalService icon="https://i.ibb.co/4PWG3bk/Capture.png" title="Paid Media" text="Découvrez la force de la publicité sociale sur vos produits et vos services à votre audience défini afin d'accroître la notoriété de la marque et de générer des revenus." />
                <DigitalService title="SEO" icon="https://i.ibb.co/mh3ydW8/Capture.png" text="Obtenez plus de trafic sur votre site, plus de clients et plus de visibilité en ligne grâce à des services de référencement puissants et précis." />
                <DigitalService title="Social Media Management" icon="https://i.ibb.co/FstQ1mJ/Capture.png" text="Créez et gérez des campagnes  performantes et commencez à développer
une base de fans dédiés à travers un Marketing organique" />
               
             
            </div>



            <div className=" flex w-9/12 mx-auto justify-between">
                <DigitalService icon="https://i.ibb.co/SBDhQyF/Capture.png" title="Email Marketing" text="Découvrez avec nous Le moyen le plus efficace d'engager et de réengager le dialogue avec les anciens visiteurs qui ont montré de l'intérêt pour votre marque et ont laissé leurs coordonnées." />
                <DigitalService title="Contenu" icon="https://i.ibb.co/smzW3rq/Capture.png" text="Découvrez un contenu original et attrayant qui augmentera la notoriété de votre marque et stimulera vos efforts de référencement, ce qui signifie plus de clics, de pistes et de conversions.
" />
                <DigitalService title="Optimisation des taux de conversion" icon="https://i.ibb.co/Ph3vRXz/Capture.png" text="Transformez les visiteurs occasionnels de votre site Web en clients payants... ou même en défenseurs de la marque. Vous pouvez obtenir plus de pistes et de ventes à partir du trafic de votre site Web lorsqu'il est entièrement optimisé pour les conversions." />


            </div>
            <div className=" flex w-9/12 mx-auto justify-between">
                <DigitalService icon="https://i.ibb.co/q9jJmjn/Capture.png" title="Suivi de la mise en œuvre" text="Vérifiez que vous suivez correctement toutes vos données de conversion et d'analyse. Pour réussir, la gestion et l'optimisation des campagnes doivent s'appuyer sur les bonnes données." />
                <DigitalService title="ASO : App Store Optimisation" icon="https://i.ibb.co/93t52cv/Capture.png" text="Rendez votre application plus attirante pour les utilisateurs qui visitent directement les magasins d'applications." />
                

            </div>
        </div>
    )
}

export default digital_marketing
