import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;

// start

// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// const Home = () => {
//   let Links = [
//     { name: "Home", link: "/" },
//     { name: "Topics", link: "/topics" },
//     { name: "Statistics", link: "/statistics" },
//     { name: "Blog", link: "/blog" },
//   ];
//   let [open, setOpen] = useState(false);

//   if (open === true) {
//     <Bars3Icon className="h-6 w-6" />;
//   } else {
//     <XMarkIcon className="h-6 w-6" />;
//   }

//   return (
//     <div className="shadow-lg fixed top-0 left-0 w-full">
//       <div className="md:flex bg-white md:justify-between max-w-7xl mx-auto py-4 items-center">
//         <div className="logo text-2xl font-semibold">
//           <Link to="/">Quiz Buzz</Link>
//         </div>
//         <nav>
//           <div className="absolute right-4 top-5 cursor-pointer md:hidden">
//             {open ? (
//               <XMarkIcon onClick={() => setOpen(!open)} className="h-6 w-6" />
//             ) : (
//               <Bars3Icon onClick={() => setOpen(!open)} className="h-6 w-6" />
//             )}
//           </div>
//           <ul
//             className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-white z-[-1] md:z-auto w-full md:w-auto pl-6 md:pl-0 transition-all duration-500 ease-in ${
//               open ? "top-20" : "top-[-490px]"
//             } `}
//           >
//             {Links.map((link) => (
//               <li key={link.name} className="md:ml-8 md:my-0 my-5">
//                 <NavLink
//                   to={link.link}
//                   className="font-semibold hover:text-violet-500 duration-300"
//                 >
//                   {link.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Home;