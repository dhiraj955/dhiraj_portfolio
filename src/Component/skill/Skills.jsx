import Skill from './Skill';

function Skills() {
  return (
    <div
      id="skill"
      className="bg-gray-100 mt-15 flex flex-col justify-center items-center text-center py-16 px-4 md:px-10 lg:px-20"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
        I have experience with these technologies
      </h2>

      <div
        className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 place-items-center"
      >
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          alt="The logo icon for React"
          
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          alt="The logo icon for HTML 5"
          
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          alt="The logo icon for CSS3"
          
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg"
          alt="The logo icon for TailwindCSS"
          
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          alt="The logo icon for GitHub"
          
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
          alt="The logo icon for NPM"
          
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
          alt="The logo icon for Bootstrap"
          
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          alt="The logo icon for JavaScript"
          
        />
        <Skill
          source="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          alt="The logo icon for JavaScript"
          
        />
      </div>
    </div>
  );
}

export default Skills;
