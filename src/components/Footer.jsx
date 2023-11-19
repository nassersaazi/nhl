import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="  mx-auto py-16 max-w-6xl grid lg:grid-cols-3 gap-8 text-gray-700">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#28406D]">
          Nakinsige Holdings
        </h1>
        <p className="py-4 ">
          Nakinsige Holdings is a reputable, credible and independent economic
          policy consultancy firm in Uganda renowned for providing research
          based evidence and policy analysis to support the formulation,
          implementation, monitoring and evaluation of government policies.
        </p>
        <div className="flex justify-around md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaLinkedin size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-around mt-6">
        <div>
          <h6 className="font-medium ">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium ">Contact</h6>
          <ul>
            <li className="py-2 text-sm">Address</li>
            <li className="py-2 text-sm">Phone</li>
            <li className="py-2 text-sm">Email</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium ">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
