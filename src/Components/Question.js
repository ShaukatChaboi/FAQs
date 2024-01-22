import React from 'react'
import { useState } from 'react';
import plusSvg from '../assets/images/icon-plus.svg';
import minuSvg from '../assets/images/icon-minus.svg';

// function Question({ question, answer, isOpen, handleClick }) {
//   return (
//     <>
//       <div className='question'>
//         <div className='question_content'>
//         <h3>{question}</h3>
//         <button onClick={handleClick}>
//           <img src={isOpen ? minuSvg : plusSvg} alt={isOpen ? 'minus' : 'plus'} />
//         </button>
//         </div>
//         {isOpen && <div className='answer'>{answer}</div>}
//       </div>
//     </>
//   );
// }

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     <div className='question'>
     <div className="question_content">
        <h3>{question}</h3>
        <button onClick={handleClick}>
          <img
            src={isOpen ? minuSvg : plusSvg}
            alt={isOpen ? "A minus icon" : "A plus icon"}
          />
        </button>
      </div>
      {isOpen && <div className="answer">{answer}</div>}
     </div>
    </>
  );
};

export default Question