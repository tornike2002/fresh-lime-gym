"use client";
import { useState } from "react";

const MailSender = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    hear: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fname || !formData.email || !formData.hear) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setMessage(result.message || "Email sent successfully!");
      setFormData({ fname: "", email: "", hear: "" });
    } catch (error) {
      setMessage("");
      setError("Failed to send email. Please try again later.");
    }
  };

  return (
    <section
      id="mailing"
      className="mx-6 bg-mail-custom rounded-t-xl rounded-b-xl mb-6 md:flex md:flex-row-reverse 
      max-w-custom sm:mx-auto md:rounded-r-xl xl:my-20"
    >
      <div className="bg-mailer-gradient h-[250px] bg-cover bg-top bg-no-repeat rounded-t-xl md:rounded-none md:w-[40%] md:h-auto md:rounded-r-xl"></div>
      <div className="md:flex md:flex-col md:flex-1 md:w-[80%] xl:py-10 ">
        <div className="font-Rubik px-[25px]">
          <h1 className="text-[25px] pt-5 text-[#02261b] font-bold tracking-[-0.5px] leading-[1] xl:text-[48px]">
            Get your first week for free
          </h1>
          <p className="leading-[1.8] pt-5 text-[#02261b] text-[14.4px] pb-[15px] xl:text-[18px]">
            A lot and all kinds of hummers waiting for you. Start working out
            today, make your best shape as possible, stay healthy and active
            with us!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="font-Rubik flex flex-col gap-3 p-[25px]"
        >
          <div className="xl:flex xl:justify-center xl:gap-10">
            <div className="flex flex-col gap-2 xl:w-[40%]">
              <label
                htmlFor="fname"
                className="text-[8px] text-[#02261b] font-medium xl:text-[10px]"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fname"
                placeholder="Mark Godwin"
                value={formData.fname}
                onChange={handleChange}
                className="border p-2 shadow-input-shadow outline-none bg-[#b5d9ce] rounded-xl 
                focus:shadow-focus-shadow focus:outline-none text-[14.4px] text-[#02261b] xl:w-full xl:text-[12px]"
                required
              />
            </div>
            {/* Email Field */}
            <div className="flex flex-col gap-2 xl:w-[40%]">
              <label
                htmlFor="email"
                className="text-[8px] text-[#02261b] font-medium xl:text-[10px] pt-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="me@example.com"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 shadow-input-shadow outline-none bg-[#b5d9ce] rounded-xl 
                focus:shadow-focus-shadow focus:outline-none text-[14.4px] text-[#02261b] xl:w-full xl:text-[12px]"
                required
              />
            </div>
            {/* Name Field */}
          </div>
          <div className="xl:flex xl:justify-center xl:gap-10">
            {/* Options Field */}
            <div className="flex flex-col gap-2 xl:w-[40%]">
              <label
                htmlFor="hear"
                className="text-[8px] text-[#02261b] font-medium xl:text-[10px]"
              >
                Where did you hear from us?
              </label>
              <select
                id="hear"
                value={formData.hear}
                onChange={handleChange}
                className="border p-2 shadow-input-shadow outline-none bg-[#b5d9ce] rounded-xl 
                focus:shadow-focus-shadow focus:outline-none text-[14.4px] text-[#02261b] xl:w-full xl:text-[12px]"
                required
              >
                <option value="">Please Choose one option:</option>
                <option value="family">Friends and Family</option>
                <option value="youtube">Youtube video</option>
                <option value="podcast">Podcast</option>
                <option value="facebook">Facebook ad</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="text-center pb-10 pt-5 xl:w-[40%]">
              <button
                type="submit"
                className="py-[19px] w-full rounded-[9px] px-[12px] font-medium bg-[#02261b] text-white xl:w-full xl:py-[8px]"
              >
                Sign up now
              </button>
            </div>
          </div>
          {message && <p className="text-green-600 text-center">{message}</p>}
          {error && <p className="text-red-600 text-center">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default MailSender;
