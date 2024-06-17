import React, { useState, useContext } from "react";
import { IoPerson } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import BasicRegister from "../../component/Common/Registration";

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

  const handlePasswordSubmit = () => {
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
              <BasicRegister
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleEmailSubmit={handleEmailSubmit}
                handlePasswordSubmit={handlePasswordSubmit}
                loginForm={true}
                text={"Log in"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
