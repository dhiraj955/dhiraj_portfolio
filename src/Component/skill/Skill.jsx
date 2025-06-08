function Skill({ source, alt, title }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={source}
        alt={alt}
        title={title}
        className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 transition-transform hover:scale-105"
      />
      <p className="mt-2 text-sm text-gray-700">{title}</p>
    </div>
  );
}

export default Skill;
