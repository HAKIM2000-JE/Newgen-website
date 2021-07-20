import Navbar from "../components/Navbar"
import Image from "next/image"
import Footer from "../components/Footer"

function blogs({text}) {
    
   
    return (
        <div className="">
         <Navbar background="blue-900"  />
          
            <div className="grid place-items-center  w-10/12 mx-auto">
                <h1 className="text-blue-900 font-bold mt-40 text-5xl text-center" > How We Can Increase you business ?</h1>
                <p className="mt-7 text-gray-400 text-md">Juillet 16 2021</p>
                <p className="mt-7 mb-28 text-gray-500 text-md">Economic growth | Hajar Etakafi</p>
                <Image src="https://kafkadesk.org/wp-content/uploads/2019/11/economic-growth-poland-hungary.jpg" width={1300} height={700} />
                <p className="w-full text-gray-400 mt-16 text-md mb-28">{text}</p>

                   
                   
                <h2 className="text-blue-900 font-bold text-3xl text-left " >Top 4 Tips for Business Leaders</h2>
                <p className="w-full text-gray-400 mt-16 text-md ">If you want to become more confident in your ability to question the results of data science projects, machine learning models, or AI systems (all with a goal of reducing the risk to the business of potentially embarrassing PR or poor-performing systems that impact the bottom line), here are five ways to start:

                    1- Get up to speed with the basic data science and machine learning lingo. It will be infinitely easier to communicate with your technical counterparts if you’re making strides to speak the same language. This introduction to key data science concepts is a good starting point. <br /> <br />
                    2- Brush up on correlation vs. causation and other statistics basics. Calling Bullshit underscores the point that one of the most frequent misuses of data is suggesting a cause-and-effect relationship based on correlation alone. We’ve got you covered with 14 must-know stats and probability terms. <br /> <br />
                    3-Learn how to ask critical questions about data visualization. Is the story the visualization is telling honest? Is the format the right one to tell the story at hand? Is the scale selected for the axes distorting the story? <br /> <br />
                    4-Don’t forget the golden rule: If something seems too good (or bad) to be true, it probably is. AI platforms (like Dataiku) can help facilitate this best practice — for example, Dataiku’s what-if scenario feature, in addition to other explainability features, builds trust in predictive models as business users can see the results they generate in common scenarios and test new scenarios.</p>

           </div>

            <Footer/>
            
        </div>
    )
}

export default blogs
