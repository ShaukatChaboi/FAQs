import React from "react";
import starIMG from "../assets/images/icon-star.svg";
import background from "../assets/images/background-pattern-desktop.svg"
//import { useState } from 'react'
import questionData from '../assets/questionData';
import Question from "./Question";

const FaqPanel = () => {


  return (
    <div className='faq-panel'>
       <img className="bg" src='./' alt="background"/>
      <div className='faq-header'>
        <img src={starIMG} alt='star logo' />
        <h1>FAQs</h1>
      </div>
      <div>
        {/* {questionData.map((entry) => (
          <Question
            key={entry.id}
            question={entry.question}
            answer={entry.answer}
            isOpen={isOpen}
            onToggle={handleToggle}
          />
          
        ))} */}
           {questionData.map(data => (
            <Question key={data.id} question={data.question} answer={data.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqPanel;
