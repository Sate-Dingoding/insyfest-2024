import { useState } from "react";
import Head from "next/head";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const res = await response.json();
      setSuccessMessage("Login successful");
      setErrorMessage("");
      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
    } catch (error) {
      const errorMessage = (error as Error).message;
      setSuccessMessage("");
      setErrorMessage("Login failed. " + errorMessage);
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="bg-hero-pattern bg-cover bg-center h-screen relative w-full">
        <div className="absolute w-[55%] h-full bg-white right-0 rounded-l-4xl overflow-hidden">
          <div className="relative left-12 top-60">
            <div className="font-mono text-5xl text-navy-blue font-bold">
              Get Started.
            </div>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="placeholder:text-placeholder font-medium rounded-3xl font-montserrat text-4xl border-navy-blue border-2 pl-6 w-[690px] pt-2 pb-2 mt-6 text-navy-blue"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="placeholder:text-placeholder font-medium rounded-3xl font-montserrat text-4xl border-navy-blue border-2 pl-6 w-[690px] pt-2 pb-2 mt-3 text-navy-blue"
              />
              <button
                type="submit"
                className="rounded-full w-[690px] bg-navy-blue font-mono text-white text-4xl pt-2 pb-2 mt-4 hover:bg-light-blue transition-all duration-300"
              >
                Login
              </button>
              {errorMessage && (
                <p className="text-red-500 font-bold mt-4">{errorMessage}</p>
              )}
              {successMessage && (
                <p className="text-green-500 font-bold mt-4">{successMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
