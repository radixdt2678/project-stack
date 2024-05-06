import React from "react";
import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }
    if (formData.password !== formData.passwordConfirmation) {
      errors.passwordConfirmation = "Passwords do not match";
    }

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formData);
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
      <section className="py-10 bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
        <div className="container mx-auto">
          <h1 className="text-2xl uppercase text-white font-semibold text-center mb-10">
            User Register
          </h1>
          <div className="bg-white p-8 rounded shadow-md w-96 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`w-full border ${
                    errors.username ? "border-red-500" : "border-gray-300"
                  } p-2 rounded focus:outline-none focus:border-blue-400`}
                  placeholder="Enter your username"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } p-2 rounded focus:outline-none focus:border-blue-400`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } p-2 rounded focus:outline-none focus:border-blue-400`}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="passwordConfirmation"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  value={formData.passwordConfirmation}
                  onChange={handleChange}
                  className={`w-full border ${
                    errors.passwordConfirmation
                      ? "border-red-500"
                      : "border-gray-300"
                  } p-2 rounded focus:outline-none focus:border-blue-400`}
                  placeholder="Confirm your password"
                />
                {errors.passwordConfirmation && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.passwordConfirmation}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
