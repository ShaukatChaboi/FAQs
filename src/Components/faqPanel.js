import React from "react";
import starIMG from "../assets/images/icon-star.svg";
import { useState } from 'react'
import questionData from '../assets/questionData';
import Question from "./Question";

const FaqPanel = () => {


  return (
    <div className='faq-panel'>
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
           {questionData.map(entry => (
            <Question key={entry.id} question={entry.question} answer={entry.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqPanel;
