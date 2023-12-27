import Typed from "react-typed";

const Home =  () => {
  return (
    <div className="bg-slate-100">
      <div className="absolute inset-0 ">
        <img
          src="./src/assets/cover.avif"
          alt="Background Image"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.3)" }}
        />
      </div>
      <div className="relative z-10 max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center bg-bottom overflow-hidden">
        <p className="text-[#97add1] font-bold p-2">
          PUTTING CLIENT INTERESTS FIRST
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white capitalize">
          The Leading economics consultancy firm in Uganda
        </h1>
        <div className="flex justify-center items-center text-white">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            We offer
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["economic analysis", "expert reports"]}
            typeSpeed={120}
            backSpeed={40}
            loop
          />
        </div>
        <button className="bg-[#28406D] w-[600px] font-bold text-2xl my-6 mx-auto py-3 text-white capitalize ">
         BOOK FREE CONSULTATION 
        </button>
      </div>
    </div>
  );
};

export default Home;
