import { FaCreativeCommonsBy, FaPhoenixFramework } from "react-icons/fa";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { CiTimer } from "react-icons/ci";
import { DiResponsive } from "react-icons/di";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";

export default function WhyUs({Service,description}:{description:any,Service:any}) {
  return (
    <div className="bg-[#FFE4E4] p-10">
      <h1 className="text-4xl font-bold text-center">
        Why Choose <span className="text-brand">CSPROTECHNOLOGY</span> for Web {Service}
      </h1>
      <p className="max-w-6xl text-center mx-auto pt-2 text-brand ">
        Choose CSPROTECHNOLOGY as your digital marketing partner, and experience the difference of a dedicated team committed to elevating your online presence and driving tangible business results.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {[
          { icon: FaPhoenixFramework, title: "Expertise" },
          { icon: FaCreativeCommonsBy, title: "Innovative Approach" },
          { icon: MdOutlinePublishedWithChanges, title: "Customization" },
          { icon: VscWorkspaceTrusted, title: "Quality Assurance" },
          { icon: CiTimer, title: "Timely Delivery" },
          { icon: DiResponsive, title: "Responsive Designs" },
          { icon: IoBriefcaseOutline, title: "SEO Integration" },
          { icon: MdContactSupport, title: "Customer Support" },
        ].map(({ icon: Icon, title }, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center">
                <Icon size={34} color="white" />
              </div>
              <h3 className="ml-4 font-bold text-xl">{title}</h3>
            </div>
            <p>
               {description}.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}