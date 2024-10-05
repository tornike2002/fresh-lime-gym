"use client";
import { useState } from "react";
const MailSender = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    hear: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setMessage(result.message);
    } catch (error) {
      setMessage("Failed to send email.");
    }
  };

  return (
    <section className="mx-6 bg-mail-custom rounded-t-xl rounded-b-xl mb-6">
      <div className="bg-mailer-gradient h-[250px] bg-cover bg-top bg-no-repeat rounded-t-xl"></div>
      <div className="font-Rubik">
        <div className="px-[25px]">
          <h1 className="text-[25px] pt-5 text-[#02261b] font-bold tracking-[-0.5px] leading-[1]">
            Get your first week for free
          </h1>
          <p className="leading-[1.8] pt-5 text-[#02261b] text-[14.4px] pb-[15px]">
            A lot and all kinds of hummers waiting for you. Start working out
            today, make your best shape as possible, stay healthy and active
            with us!
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="font-Rubik flex flex-col gap-3 p-[25px]"
      >
        {/* name */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="fname"
            className="text-[8px] text-[#02261b] font-medium"
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
            focus:shadow-focus-shadow focus:outline-none text-[14.4px] text-[#02261b]"
          />
        </div>
        {/* email */}
        <div className="flex flex-col  gap-2">
          <label
            htmlFor="email"
            className="text-[8px] text-[#02261b] font-medium"
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
            focus:shadow-focus-shadow focus:outline-none text-[14.4px] text-[#02261b]"
          />
        </div>
        {/* choose options */}
        <div className="flex flex-col  gap-2">
          <label
            htmlFor="hear"
            className="text-[8px] text-[#02261b] font-medium"
          >
            Where did you hear from us?
          </label>
          <select
            id="hear"
            value={formData.hear}
            onChange={handleChange}
            className="border p-2 shadow-input-shadow outline-none bg-[#b5d9ce] rounded-xl 
            focus:shadow-focus-shadow focus:outline-none text-[14.4px] text-[#02261b]"
          >
            <option value="">Please Choose one option:</option>
            <option value="family">Friends and Family</option>
            <option value="youtube">Youtube video</option>
            <option value="podcast">Podcast</option>
            <option value="facebook">Facebook ad</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="text-center pb-10 pt-5">
          <button
            type="submit"
            className="py-[19px] w-full rounded-[9px] px-[12px] font-medium bg-[#02261b] text-white"
          >
            Sign up now
          </button>
        </div>
        {message && <p>{message}</p>}
      </form>
    </section>
  );
};

export default MailSender;
