import React, { useState } from "react";
import {question} from "./api";
import "./Accordion.css";
import MyAccordion from "./MyAccordian"

const Accordion = () => {
    const [data,setdata] = useState(question);
    return (
        <>  
            <section className="main-div">
            <h1>React Interview Question</h1>
            {
                data.map((curElem) => {
                    const {id} = curElem;
                    return <MyAccordion key={id} {...curElem}  />;
                })
            }
            </section>
        </>
    )
}

export default  Accordion ;