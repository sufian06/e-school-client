import React from 'react';

const FAQ = () => {
  return (
    <div>
      <div className='container view'>
      <div className='question'>
        <h4><span>Question 1.</span>What do you learn?</h4>
        <p><span>Answer:</span>You will learn HTML, CSS, javascript, React, node.js and express.js from here.</p>
      </div>
      <div className='question'>
        <h4><span>Question 2.</span>Is it live class system?</h4>
        <p><span>Answer:</span>No, It is pre-recorded video all of the class.</p>
      </div>
      <div className='question'>
        <h4><span>Question 3.</span>How does class system works?</h4>
        <p><span>Answer:</span>Every day 1 class will be relese. It is project based class system. Every topics should be a project.</p>
      </div>
      <div className='question'>
        <h4><span>Question 4.</span>What is Node? How does Node work?</h4>
        <p><span>Answer:</span>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
      </div>
    </div>
    </div>
  );
};

export default FAQ;