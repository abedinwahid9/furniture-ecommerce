const Title = ({ title }) => {
  return (
    <div className="absolute  left-10 ">
      <h2
        style={{ wordSpacing: "1px", letterSpacing: "1px" }}
        className="uppercase flex flex-1   flex-col lg:text-3xl text-end text-xl "
      >
        {title}
        <div className="flex flex-col items-end">
          <div className="border-t-2 md:w-40 w-1/2 border-black"></div>
          <div className="border-t-2 md:w-16 w-2/5 border-black mt-1"></div>
        </div>
      </h2>
    </div>
  );
};

export default Title;
