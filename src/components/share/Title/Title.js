const Title = ({ title }) => {
  return (
    <div className="   ">
      <h2
        style={{ wordSpacing: "1px", letterSpacing: "1px" }}
        className="uppercase flex flex-1   flex-col lg:text-3xl text-end text-xl w-[50%] md:w-[25%]"
      >
        {title}{" "}
        <div className="flex flex-col items-end">
          <div className="border-t-2 md:w-3/4 w-1/2 border-black"></div>
          <div className="border-t-2 md:w-2/5 w-2/5 border-black mt-1"></div>
        </div>
      </h2>
    </div>
  );
};

export default Title;
