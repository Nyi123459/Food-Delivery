import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const menuItems = [
  { label: "Food Merchant", href: "#" },
  { label: "Mart Merchant", href: "#" },
  { label: "Savor Driver", href: "#" },
  { label: "Savor Rider", type: "submit", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className="inline-flex w-full justify-center gap-x-1.5 text-s font-semibold ring-1 ring-inset ring-gray-300 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 transition duration-700 ease-in-out rounded-lg border-2 border-white shadow shadow-primary px-[20px] py-[5px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          Be Our Partner
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-white"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {isOpen && (
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 text-s origin-top-right rounded-md bg-white shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {menuItems.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) =>
                    item.type === "submit" ? (
                      <button
                        type="submit"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block w-full px-4 py-2 text-left text-s"
                        )}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-s"
                        )}
                      >
                        {item.label}
                      </a>
                    )
                  }
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        )}
      </Transition>
    </Menu>
  );
}
