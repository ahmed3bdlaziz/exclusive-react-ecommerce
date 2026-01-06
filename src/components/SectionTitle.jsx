const SectionTitle = ({ title, mainTitle }) => {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <span className="w-3 h-8 bg-red-500 block border-0 rounded"></span>
        <h1 className="text-xl md:text-3xl font-bold capitalize text-red-500 ">
          {title}
        </h1>
      </div>
      <h1 className="text-3xl md:text-5xl capitalize font-semibold mt-5 mb-6 md:mb-14 ">
        {mainTitle}
      </h1>
    </div>
  );
};

export default SectionTitle;
