import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#28406D]">
      <div className="max-w-6xl text-gray-300 mx-auto  flex gap-8">
        <div className="flex-1 mt-6">
          <h1 className="w-full text-3xl font-bold text-white">
            Nakinsige Holdings
          </h1>
          <p className="py-4 ">
            Nakinsige Holdings is a reputable, credible and independent economic
            policy consultancy firm in Uganda renowned for providing research
            based evidence and policy analysis to support the formulation,
            implementation, monitoring and evaluation of government policies.
          </p>
        </div>
        <div className="lg:col-span-2 pl-16 flex flex-1 justify-between mt-6">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
