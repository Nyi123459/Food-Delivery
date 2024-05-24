import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import OwnerLogin from "./Login/OwnerLogin";
import DriverLogin from "./Login/DriverLogin";
import RiderLogin from "./Login/RiderLogin";

const SignInRoute: React.FC = () => {
  const [activeTab, setActiveTab] = useState("owner");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get("type");
    if (type) {
      setActiveTab(type);
    }
  }, [location]);

  const renderLoginForm = () => {
    switch (activeTab) {
      case "owner":
        return <OwnerLogin />;
      case "driver":
        return <DriverLogin />;
      case "rider":
        return <RiderLogin />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setActiveTab("owner")}
          className={`px-4 py-2 mr-2 ${
            activeTab === "owner" ? "bg-blue-500 text-white" : "bg-gray-200"
          } rounded`}
        >
          Owner Login
        </button>
        <button
          onClick={() => setActiveTab("driver")}
          className={`px-4 py-2 mr-2 ${
            activeTab === "driver" ? "bg-blue-500 text-white" : "bg-gray-200"
          } rounded`}
        >
          Driver Login
        </button>
        <button
          onClick={() => setActiveTab("rider")}
          className={`px-4 py-2 ${
            activeTab === "rider" ? "bg-blue-500 text-white" : "bg-gray-200"
          } rounded`}
        >
          Rider Login
        </button>
      </div>
      {renderLoginForm()}
    </div>
  );
};

export default SignInRoute;
