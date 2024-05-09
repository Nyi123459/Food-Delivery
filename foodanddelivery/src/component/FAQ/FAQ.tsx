import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { MdOutlineArrowDownward } from "react-icons/md";

import Images from "../../assets";

import data from "../../utils/accordionData.js";

const Value = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleAccordionChange = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <>
      <div className="flex justify-center">
        <img src={Images.Question} className="h-[5%] w-[5%]" />
      </div>
      <div className="text-orange-500 text-2xl font-bold mb-2 flex justify-center">
        <h2>Frequently Asked Questions</h2>
      </div>
      <section className="v-wrapper bg-primary py-10">
        <div className="paddings innerWidth flex justify-center items-center">
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[expandedIndex]}
            onChange={handleAccordionChange}
          >
            {data.map((item, i) => (
              <AccordionItem className="accordionItem" key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className="flex items-center justify-between bg-gray-200 p-3 rounded-lg mb-2">
                    <div className="flex items-center">
                      <div className="mr-2">{item.icon}</div>
                      <span className="text-gray-800 font-semibold">
                        {item.heading}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MdOutlineArrowDownward size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordionPanel">
                  <div
                    className={`accordionContent ${
                      expandedIndex === i ? "expanded" : "collapsed"
                    }`}
                  >
                    <p className="text-gray-600">{item.detail}</p>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Value;
