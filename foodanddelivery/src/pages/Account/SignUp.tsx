import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import BasicRegister from "../../component/Common/Registration";

const DefaultFormFields = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formFields, setFormFields] = useState(DefaultFormFields);
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(DefaultFormFields);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handlePasswordSubmit = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    resetFormFields();
    setShowModal(false);
    navigate("/");
  };

  return (
    <div>
      <div
        className="hover:-translate-y-1 hover:scale-110 transition duration-700 ease-in-out rounded-lg border-white shadow shadow-shadownav px-[20px] py-[8px] flex items-center text-xs font-extrabold text-navcolor"
        onClick={toggleModal}>
        <IoPerson className="mr-1" />
        Sign Up
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
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                handleEmailSubmit={handleEmailSubmit}
                handlePasswordSubmit={handlePasswordSubmit}
                signUpForm={true}
                text={"Sign Up"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
