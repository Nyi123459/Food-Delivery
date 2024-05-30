import React, { useState, useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Images } from "../../assets";
import BasicLogin from "./Email/BasicLogin";
import { UserContext } from "../../context/userContext";

const Login: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentForm, setCurrentForm] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleNext = () => {
    setCurrentForm(currentForm + 1);
  };

  const handleBack = () => {
    if (currentForm > 1) {
      setCurrentForm(currentForm - 1);
    } else {
      setShowModal(false);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleNext();
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = { email, password };
    setCurrentUser(user);
    setShowModal(false);
    navigate("/");
  };

  return (
    <div>
      <div
        className="hover:-translate-y-1 hover:scale-110 transition duration-700 ease-in-out rounded-lg border-white shadow shadow-shadownav px-[20px] py-[8px] flex items-center text-xs font-extrabold text-navcolor"
        onClick={toggleModal}>
        <IoPerson className="mr-1" />
        Log In
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
          <div
            className="bg-white p-6 rounded-lg z-10 relative"
            style={{ width: "400px" }}>
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={toggleModal}>
              <IoMdClose className="h-6 w-6" />
            </button>
            <div className="space-y-6">
              {currentForm === 1 && (
                <div>
                  <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                      Welcome!
                    </h1>
                    <h3 className="text-base font-light text-gray-600">
                      Sign up or log in to continue.
                    </h3>
                  </div>
                  <form className="space-y-4">
                    <div className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <button type="button" className="flex items-center">
                        <FaFacebook className="text-xl mr-2 -ml-1" />
                        <span className="text-center">
                          Continue with Facebook
                        </span>
                      </button>
                    </div>
                    <div className="w-full flex justify-center py-2 px-4 border border-current rounded-md shadow-sm text-base font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <button type="button" className="flex items-center">
                        <img
                          className="w-6 h-6 mr-2 -ml-1"
                          src={Images.Google}
                          alt="Google"
                        />
                        <span className="text-center">
                          Continue with Google
                        </span>
                      </button>
                    </div>
                    <div className="w-full flex justify-center py-2 px-4 text-base font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2">
                      or
                    </div>
                    <div className="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-base font-medium bg-yellow-500 hover:bg-yellow-400 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <button
                        type="button"
                        className="flex items-center"
                        onClick={handleNext}>
                        Log In
                      </button>
                    </div>
                  </form>
                </div>
              )}
              {currentForm === 2 && (
                <BasicLogin
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  handleEmailSubmit={handleEmailSubmit}
                  handlePasswordSubmit={handlePasswordSubmit}
                  handleBack={handleBack}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
