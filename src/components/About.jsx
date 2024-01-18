const About = () => {
  return (
    <div>
      <div className='py-40 bg-black text-center px-4'>
        <p className="text-[#97add1] font-bold p-2">
          PUTTING CLIENT INTERESTS FIRST
        </p>
      </div>
      <div className=" min-h-screen flex  md:flex-row items-center md:mx-32 mx-5">

        <div className="flex flex-row gap-8 items-center">
          <div className=" w-full md:w-2/4 space-y-5 mt-4">
            <h1 className="text-2xl font-semibold  md:text-start pb-8 md:mt-0">
              About Us
            </h1>
            <p>
              Meet Mr. Lwanga Musa, the Chief Economics Consultant at NHL
              Consultants. Mr. Lwanga holds a Master’s degree in International
              Economics from the Berlin School of Economics and Law, Germany
              (Hochschule für Wirtschaft und Recht Berlin) and a BSc. degree in
              Quantitative Economics from Makerere University, Kampala. I have
              over ten years of experience in conducting policy relevant research
              in several fields of economics. I am an expert in financial sector
              economics and have a wealth of experience in designing and
              implementing largescale surveys.
            </p>

            <p>
              I am a member of the African Econometrics Society, the Uganda
              Economists Association and the UNCTAD Virtual Institute. I have
              served on a number of technical working committees including the
              FinScope Steering Committee at Bank of Uganda, the Agriculture
              Finance Technical Working Group, the Private Sector Working Group at
              the Ministry of Finance Planning and Economic development and the
              GIS Financial services working group at the Financial Sector
              Deepening Uganda (FSDU){" "}
            </p>
          </div>
          <div className="p-24">
            <img src="./src/assets/about.png" alt="Background Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
