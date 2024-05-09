// import { useState } from "react";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from "react-accessible-accordion";
// import { MdOutlineArrowDownward } from "react-icons/md";

// import { Question } from "../../assets";

// import data from "../../utils/accordionData.js";

// interface AccordionItemData {
//   heading: string;
//   detail: string;
// }

// const FAQ = () => {
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

//   const handleAccordionChange = (index: number) => {
//     setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   return (
//     <>
//       <div className="flex justify-center my-4">
//         <img src={Question} className="h-8 w-8" alt="Question Icon" />
//       </div>
//       <div className="text-2xl font-bold mb-6 flex justify-center">
//         <h2>Frequently Asked Questions</h2>
//       </div>
//       <section className="v-wrapper bg-primary py-10">
//         <div className="paddings innerWidth flex justify-center items-center">
//           <Accordion
//             className="accordion"
//             allowMultipleExpanded={true}
//             preExpanded={expandedIndex !== null ? [expandedIndex] : []}
//             onChange={handleAccordionChange}
//           >
//             {data.map((item: AccordionItemData, i: number) => (
//               <AccordionItem
//                 className="accordionItem"
//                 key={i}
//                 uuid={i.toString()}
//               >
//                 <AccordionItemHeading>
//                   <AccordionItemButton
//                     className="flex items-center justify-between bg-gray-200 p-3 rounded-lg mb-2"
//                     onClick={() => handleAccordionChange(i)}
//                   >
//                     <div className="flex items-center">
//                       <span className="text-gray-800 font-semibold">
//                         {item.heading}
//                       </span>
//                     </div>
//                     <div className="flex items-center">
//                       <MdOutlineArrowDownward
//                         size={20}
//                         style={{
//                           transform:
//                             expandedIndex === i
//                               ? "rotate(180deg)"
//                               : "rotate(0)",
//                         }}
//                       />
//                     </div>
//                   </AccordionItemButton>
//                 </AccordionItemHeading>
//                 <AccordionItemPanel
//                   className={`accordionPanel ${
//                     expandedIndex === i ? "expanded" : "collapsed"
//                   }`}
//                 >
//                   <div className="accordionContent">
//                     <p className="text-gray-600">{item.detail}</p>
//                   </div>
//                 </AccordionItemPanel>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </div>
//       </section>
//     </>
//   );
// };

// export default FAQ;

import { Accordion } from "flowbite-react";

import Images from "../../assets";

const FAQ = () => {
  return (
    <>
      <div className="flex justify-center my-4">
        <img src={Question} className="h-8 w-8" alt="Question Icon" />
      </div>
      <div className="text-2xl font-bold flex justify-center mb-1">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-8 md:py-12 lg:py-16 xl:py-20">
        <Accordion collapseAll>
          <Accordion.Panel className="mb-4 md:mb-6">
            <Accordion.Title className="px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 xl:px-10 xl:py-6 bg-secondary ">
              What is Ride & Savar?
            </Accordion.Title>
            <Accordion.Content className="px-4 md:px-6 lg:px-8 xl:px-10 text-white">
              <p className="mb-2 text-gray-950 dark:text-gray-800">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel className="mb-4 md:mb-6">
            <Accordion.Title className="px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 xl:px-10 xl:py-6 bg-secondary ">
              Is there a Figma file available?
            </Accordion.Title>
            <Accordion.Content className="px-4 md:px-6 lg:px-8 xl:px-10">
              <p className="mb-2 text-gray-950 dark:text-gray-800">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 xl:px-10 xl:py-6 bg-secondary ">
              What are the differences between Flowbite and Tailwind UI?
            </Accordion.Title>
            <Accordion.Content className="px-4 md:px-6 lg:px-8 xl:px-10">
              <p className="mb-2 text-gray-950 dark:text-gray-800">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </>
  );
};

export default FAQ;
