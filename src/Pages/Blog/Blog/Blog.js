import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className='container'>
      <div className='question'>
        <h4><span>Question 1.</span>what is cors?</h4>
        <p><span>Answer:</span>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
      </div>
      <div className='question'>
        <h4><span>Question 2.</span>Why are you using firebase? What other options do you have to implement authentication?</h4>
        <p><span>Answer:</span>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together. Cookie-Based authentication, Token-Based authentication, Third party access(OAuth, API-token), OpenId, SAML</p>
      </div>
      <div className='question'>
        <h4><span>Question 3.</span>How does the private route work?</h4>
        <p><span>Answer:</span>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated</p>
      </div>
      <div className='question'>
        <h4><span>Question 4.</span>What is Node? How does Node work?</h4>
        <p><span>Answer:</span>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
      </div>
    </div>
  );
};

export default Blog;