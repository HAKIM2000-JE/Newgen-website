import styles from "../styles/Galerie.module.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {useState} from 'react'


function Technolgie() {
    const [traceWeb, setTraceweb] = useState("border-r-2")
    const [tracemobile, setTracembile] = useState("")

    return (
        <div>
            <Tabs className={styles.Tabs} selected={1}>
                <TabList className={styles.TabList }>
                    <Tab className={`${traceWeb} border-blue-900`} onClick={() => {
                        setTraceweb("border-r-2")
                        setTracembile("")
                    }}>
                        <button className={styles.Button} >
                           
                        Web</button>
                    </Tab>
                    <Tab onClick={()=>{
                        setTraceweb("")
                        setTracembile("border-r-2")
                    }} className={`${tracemobile} border-blue-900`}>
                        <button className={styles.Button} >Mobile</button>
                    </Tab>
                   
                </TabList>

                <div className="grid place-items-center mx-auto">
                    <TabPanel>
                        <img src="https://i.ibb.co/rGfH0VD/preview.png" alt="" />
                    </TabPanel>

                    <TabPanel className="relative bottom-14">
                        <img src="https://i.ibb.co/Bqb9Htg/Mobile-Techno.png" alt="" />
                    </TabPanel>

                   
                </div>

                
            </Tabs>
            
        </div>
    )
}

export default Technolgie
