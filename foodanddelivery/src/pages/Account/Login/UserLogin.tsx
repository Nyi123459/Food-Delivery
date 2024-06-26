import { Modal } from "flowbite-react";
import { IoPerson } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { useRef, useState } from "react";
import { Images } from "../../../assets";

function UserLogin() {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div
        className="hover:-translate-y-1 hover:scale-110 transition duration-700 ease-in-out rounded-lg border-white shadow shadow-shadownav px-[20px] py-[8px] flex items-center text-xs font-extrabold text-navcolor"
        onClick={() => setOpenModal(true)}
      >
        <IoPerson className="mr-1" />
        Log In
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
                  <img
                    className="w-6 h-6 mr-2 -ml-1"
                    src={Images.Google}
                    alt="Google"
                  />
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

export default UserLogin;

// import React, { useState } from "react";
// import axios from 'axios';

// interface UserLoginProps {
//   onLoginSuccess: () => void;
// }

// const UserLogin: React.FC<UserLoginProps> = ({ onLoginSuccess }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('YOUR_LARAVEL_BACKEND_LOGIN_ENDPOINT', { email, password });
//       if (response.data.success) {
//         onLoginSuccess();
//       } else {
//         alert("Invalid credentials");
//       }
//     } catch (error) {
//       alert("Error logging in");
//     }
//   };

//   return (
//     <div>
//       <h2>User Login</h2>
//       <form onSubmit={handleLogin}>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default UserLogin;
