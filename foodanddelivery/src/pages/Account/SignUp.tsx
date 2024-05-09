import { Modal } from "flowbite-react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

import { useRef, useState } from "react";

function SignUp() {
  const [openModal, setOpenModal] = useState(true);
  const emailInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div
        className="hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 transition duration-700 ease-in-out rounded-lg border-white shadow shadow-primary px-[20px] py-[5px]"
        onClick={() => setOpenModal(true)}
      >
        Sign Up
      </div>

      {openModal && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50"></div>
      )}
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
        initialFocus={emailInputRef}
        className="absolute top-full left-0"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-gray-800">Welcome!</h1>
              <h3 className="text-base font-light  text-gray-600">
                Sign up or log in to continue.
              </h3>
            </div>
            <form className="space-y-4">
              <div className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <button type="submit" className="flex items-center">
                  <FaFacebook className="text-xl mr-2 -ml-1" />
                  <span className="text-center">Continue with Facebook</span>
                </button>
              </div>

              <div className="w-full flex justify-center py-2 px-4 border border-current rounded-md shadow-sm text-base font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <button type="submit" className="flex items-center">
                  <FaGoogle className="text-xl mr-2 -ml-1" />
                  <span className="text-center">Continue with Google</span>
                </button>
              </div>

              <div className="w-full flex justify-center py-2 px-4s  text-base font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2">
                or
              </div>

              <div className="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-base font-medium bg-yellow-500 hover:bg-yellow-400 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <button type="submit" className="flex items-center">
                  Log in
                </button>
              </div>

              <div className="w-full flex justify-center py-2 px-4 border border-yellow-500 rounded-md shadow-sm text-base font-medium hover:bg-yellow-100 hover:border-transparent text-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <button type="submit" className="flex items-center">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignUp;
