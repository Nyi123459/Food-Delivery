import { Accordion } from "flowbite-react";
import { Images } from "../../../assets";

const FAQ = () => {
  return (
    <div>
      <div className="flex justify-center my-4">
        <img src={Images.Question} className="h-8 w-8" alt="Question Icon" />
      </div>
      <div className="text-2xl font-bold flex justify-center">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="mt-[5%] ml-[10%] mr-[10%] mb-[5%] py-8 md:py-12 lg:py-16 xl:py-20">
        <Accordion collapseAll>
          <Accordion.Panel className="mb-4 md:mb-6">
            <Accordion.Title className="px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 xl:px-10 xl:py-6 bg-secondary ">
              What is Ride & Savor?
            </Accordion.Title>
            <Accordion.Content className="px-4 md:px-6 lg:px-8 xl:px-10 text-white">
              <p className="mb-2 text-gray-500 text-sm dark:text-gray-800">
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
              <p className="mb-2 text-gray-500 text-sm dark:text-gray-800">
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
              <p className="mb-2 text-gray-500 text-sm dark:text-gray-800">
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
    </div>
  );
};

export default FAQ;
