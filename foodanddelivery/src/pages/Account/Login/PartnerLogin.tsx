import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BackgroundPhoto from "../../../assets/bg-photo.jpg";
import NavbarLogin from "../NavbarLogin";

type Params = {
  role: string;
};

const PartnerLogin: React.FC = () => {
  const { role } = useParams<Params>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Role:", role);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <section>
      <NavbarLogin />
      <div
        className="p-4 bg-cover"
        style={{
          backgroundImage: `url(${BackgroundPhoto})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-end px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-center text-l font-bold mb-8 w-full text-amber-600">
              Login!
            </h2>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-black text-sm font-normal mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@mail.com"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-black text-sm font-normal mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogin;
