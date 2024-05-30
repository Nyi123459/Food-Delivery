import React, { useState } from "react";
import Lottie from "lottie-react";
import EmailAnimation from "../../../assets/Email.json";

interface EmailLoginProps {
  onNext: () => void;
  onBack: () => void;
}

const EmailLogin = ({ onNext, onBack }: EmailLoginProps) => {
  const [data, setData] = useState({ email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, email: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div>
      <div className="flex justify-center mb-6">
        <Lottie
          animationData={EmailAnimation}
          style={{ width: 100, height: 100 }}
        />
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="block">
          Email:
          <input
            type="email"
            value={data.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-amber-400 focus:shadow-outline "
          />
        </label>
        <div className="flex justify-between">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
            onClick={onBack}
          >
            Back
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-white rounded-md"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailLogin;
