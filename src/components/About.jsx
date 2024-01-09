const About = () => {
  return (
    <div className=" min-h-screen flex  md:flex-row items-center md:mx-32 mx-5">
      <div className="flex flex-row gap-8 items-center">
        <div className=" w-full md:w-2/4 space-y-5 mt-4">
          <h1 className="text-2xl font-semibold  md:text-start pb-8 md:mt-0">
            Meet The Chief Consultant
          </h1>
          <p>
            Musa Mayanja Lwanga is the Head of Research and Market Development at the
            Uganda Bankers Association (UBA). Prior to joining UBA, Musa worked with the
            Economic Policy Research Centre, Makerere University, Biz-Econ Consultancy,
            Buchwerk GmbH in Darmstadt Germany and as a Research Assistant to Dr Neil
            Kodesh. He holds a Master’s degree in International Economics from the Berlin School
            of Economics and Law (Hochschule für Wirtschaft und Recht, Berlin) and a BSc. degree
            in Quantitative Economics from Makerere University, Kampala. He has over eight years
            of experience in conducting policy relevant research in several fields of economics.
          </p>

          <p>
            Musa is an expert in financial sector economics and has a wealth of experience in
            designing and implementing largescale surveys. Musa has authored and co-authored a
            number of research articles published in both local and international peer reviewed
            journals including the African Journal of Economic and Management Studies, the
            Journal of Statistical and Econometric Methods, the Advances in Management &amp;
            Applied Economics Journal. He is a member of the African Econometrics Society and
            the Uganda Economists Association. He sits on a number of technical working
            committees including the Agriculture Finance working group at the Ministry of Finance
            Planning and Economic development and the GIS Financial services working group at
            the Financial Sector Deepening Uganda (FSDU).
          </p>
        </div>
        <div className="p-24">
          <img src="./src/assets/musa.JPG" alt="Background Image" className="w-96 h-120 object-cover "/>
        </div>
      </div>
    </div>
  );
};

export default About;
