import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Committed and goal-oriented computer science graduate looking to pursue a career in the software development. Ability to learn things quickly and capable of working in a fast-paced and team-driven environment.
        </p>

        <br />

        <p className="text-xl">
        I am a strategic thinker who is able to develop and implement effective plans and initiatives that align with organizational goals and objectives, also adaptable, resourceful, and always willing to go above and beyond to achieve the desired outcomes.
        </p>
      </div>
    </div>
  );
};

export default About;
