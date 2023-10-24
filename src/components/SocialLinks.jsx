// import React from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";

// const SocialLinks = () => {
//   const links = [
//     {
//       id: 1,
//       child: (
//         <>
//           LinkedIn <FaLinkedin size={30} />
//         </>
//       ),
//       href: "https://www.linkedin.com/in/sunnykataria/.com",
//       style: "rounded-tr-md",
//     },
//     {
//       id: 2,
//       child: (
//         <>
//           GitHub <FaGithub size={30} />
//         </>
//       ),
//       href: "https://github.com/Sunny-kataria",
//     },
//     {
//       id: 3,
//       child: (
//         <>
//           Mail <HiOutlineMail size={30} />
//         </>
//       ),
//       href: "mailto:katariasunny86@gmail.com",
//     },
//     {
//       id: 4,
//       child: (
//         <>
//           Resume <BsFillPersonLinesFill size={30} />
//         </>
//       ),
//       href: "/resume.pdf",
//       style: "rounded-br-md",
//       download: true,
//     },
//   ];

//   return (
//     <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
//       <ul>
//         {links.map(({ id, child, href, style, download }) => (
//           <li
//             key={id}
//             className={
//               "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
//               " " +
//               style
//             }
//           >
//             <a
//               href={href}
//               className="flex justify-between items-center w-full text-white"
//               download={download}
//               target="_blank"
//               rel="noreferrer"
//             >
//               {child}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SocialLinks;
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/sunnykataria/.com",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Sunny-kataria",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:katariasunny86@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: process.env.PUBLIC_URL + "/resume.pdf",
    },
  ];

  return (
    <div className={isMobile ? "lg:flex lg:flex-col lg:top-[35%] lg:left-0 lg:fixed block lg:hidden bg-gray-800 p-4 rounded-md text-center" : "hidden lg:flex lg:flex-col lg:top-[35%] lg:left-0 lg:fixed"}>
      {isMobile && <h2 className="text-2xl font-bold text-white mb-4">Connect with me:</h2>}
      <ul className={isMobile ? "grid gap-4 grid-cols-2" : ""}>
        {links.map(({ id, child, href }) => (
          <li
            key={id}
            className={isMobile ? "flex justify-center items-center h-12 px-4 rounded-md bg-gray-700 hover:bg-gray-600 duration-300 w-32 mx-auto" : "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500"}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;







