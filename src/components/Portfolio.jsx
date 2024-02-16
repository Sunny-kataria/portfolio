// import React from "react";
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

// const Portfolio = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src: arrayDestruct,
//     },
//     {
//       id: 2,
//       src: reactParallax,
//     },
//     {
//       id: 3,
//       src: navbar,
//     },
//     {
//       id: 4,
//       src: reactSmooth,
//     },
//     {
//       id: 5,
//       src: installNode,
//     },
//     {
//       id: 6,
//       src: reactWeather,
//     },
//   ];

//   return (
//     <div
//       name="portfolio"
//       className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Portfolio
//           </p>
//           <p className="py-6">Check out some of my work right here</p>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
//           {portfolios.map(({ id, src }) => (
//             <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
//               <img
//                 src={src}
//                 alt=""
//                 className="rounded-md duration-200 hover:scale-105"
//               />
//               <div className="flex items-center justify-center">
//                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                   Demo
//                 </button>
//                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                   Code
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

import React from "react";
import tictactoe from "../assets/portfolio/tictactoe.jpg";
import password from "../assets/portfolio/password.jpg";
import portfolio from "../assets/portfolio/portfolio.jpg";
import SearchImage from "../assets/portfolio/SearchImage.jpg";
import spotify from "../assets/portfolio/spotify.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import shoppingcart from "../assets/portfolio/shoppingcart.jpg"

const portfolios = [
  {
    id: 1,
    src: tictactoe,
    githubUrl: "https://sunny-kataria.github.io/tic-tac-toe/"
  },
  {
    id: 2,
    src: password,
    githubUrl: "https://sunny-kataria.github.io/password-generator/"
  },
  {
    id: 3,
    src: shoppingcart,
    githubUrl: " https://main--reactreduxaddtocart.netlify.app/"
    
  },
  {
    id: 4,
    src: spotify,
    githubUrl: "https://sunny-kataria.github.io/spotify-clone/"
  },
  {
    id: 5,
    src: portfolio,
    githubUrl: "https://aboutmore.netlify.app/"
  },
  {
    id: 6,
    src: reactWeather,
    githubUrl: "https://sunny-kataria.github.io/weather-app/"
  },
  {
    id: 7,
    src: SearchImage,
    githubUrl: "https://searchimage01.netlify.app/"
  }
];

const Portfolio = () => {
  const redirectToGitHub = (githubUrl) => {
    window.open(githubUrl, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
             My projects
          </p>
          <p className="py-6">Check out some of my project right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, githubUrl }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-60 object-cover"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => redirectToGitHub(githubUrl)}
                >
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;


