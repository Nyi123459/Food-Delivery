import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { MdOutlineArrowDownward } from "react-icons/md";

import { Question } from "../../assets";

import data from "../../utils/accordionData.js";

interface AccordionItemData {
  heading: string;
  detail: string;
}

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleAccordionChange = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="flex justify-center my-4">
        <img src={Question} className="h-8 w-8" alt="Question Icon" />
      </div>
      <div className="text-2xl font-bold mb-6 flex justify-center">
        <h2>Frequently Asked Questions</h2>
      </div>
      <section className="v-wrapper bg-primary py-10">
        <div className="paddings innerWidth flex justify-center items-center">
          <Accordion
            className="accordion"
            allowMultipleExpanded={true} 
            preExpanded={expandedIndex !== null ? [expandedIndex] : []}
            onChange={handleAccordionChange}
          >
            {data.map((item: AccordionItemData, i: number) => (
              <AccordionItem
                className="accordionItem"
                key={i}
                uuid={i.toString()}
              >
                <AccordionItemHeading>
                  <AccordionItemButton
                    className="flex items-center justify-between bg-gray-200 p-3 rounded-lg mb-2"
                    onClick={() => handleAccordionChange(i)}
                  >
                    <div className="flex items-center">
                      <span className="text-gray-800 font-semibold">
                        {item.heading}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MdOutlineArrowDownward
                        size={20}
                        style={{
                          transform:
                            expandedIndex === i
                              ? "rotate(180deg)"
                              : "rotate(0)",
                        }}
                      />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel
                  className={`accordionPanel ${
                    expandedIndex === i ? "expanded" : "collapsed"
                  }`}
                >
                  <div className="accordionContent">
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

export default FAQ;
