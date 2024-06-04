// src/components/ProfileForm.tsx
import React, { useState, ChangeEvent } from "react";
import { RiSearchLine } from "react-icons/ri";

const ProfileDetail: React.FC = () => {
  const [profilePic, setProfilePic] = useState<string>(
    "https://via.placeholder.com/100"
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
      setSelectedFile(file);
    }
  };

  const handleButtonClick = (): void => {
    const fileInput = document.getElementById(
      "profilePicInput"
    ) as HTMLInputElement;
    fileInput.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Fill Your Profile
        </h2>
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-full w-24 h-24"
            />
            <button
              type="button"
              className="absolute bottom-0 right-0 bg-yellow-500 text-white p-2 rounded-full"
              onClick={handleButtonClick}
            >
              ✏️
            </button>
            <input
              type="file"
              id="profilePicInput"
              className="hidden"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
        </div>
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              id="dob"
              placeholder="Date of Birth"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="mb-4">
            <select
              id="gender"
              aria-placeholder="Gender"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                id="address"
                placeholder="Address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <RiSearchLine
                className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                size={12}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileDetail;
