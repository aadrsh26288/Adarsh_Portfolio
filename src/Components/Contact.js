import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const initialFormState = {
  to_name: "Adarsh Mishra",
  first_name: "",
  last_name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [emailInfo, setEmailInfo] = useState(initialFormState);

  console.log(emailInfo);

  const handleChange = (e) => {
    setEmailInfo({ ...emailInfo, [e.target.name]: e.target.value });
  };

  function Handlesend(e) {
    // e.preventDefault()

    emailjs
      .send(
        "service_s364xo3",
        "template_5ud3mem",
        emailInfo,
        "KobyPou12ItlOQX4h"
      )
      .then((res) => {
        setEmailInfo(initialFormState);
        alert("success");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  console.log(emailInfo);

  return (
    <div className="text-white max-w-[88%] mx-auto p-4 mt-20">
      <h1 className="text-[35px] inter font-bold">Get in touch</h1>
      <p className="text-[20px] inter text-gray-500 ">
        Have a little something, something you wanna talk about? Please feel
        free to get in touch anytime 🙋‍♂️.
      </p>

      <div className="py-5">
        {/* <h1 className="text-center text-[30px] inter font-bold mt-10">Contact Form</h1> */}
        <div className=" grid grid-cols-2 gap-6 mt-8 ">
          <input
            type="text"
            name="first_name"
            className="block  py-4 mt-2 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none   focus:border-white focus:outline-none focus:ring-0  peer"
            placeholder="First Name "
            value={emailInfo.first_name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="last_name"
            className="block  py-4 mt-2 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none   focus:border-white focus:outline-none focus:ring-0  peer"
            placeholder="Last Name "
            value={emailInfo.last_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="">
          <input
            type="email"
            name="email"
            className="block  py-4 mt-2 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none   focus:border-white focus:outline-none focus:ring-0  peer"
            placeholder="Email "
            value={emailInfo.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            className="block  py-4 mt-2 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none   focus:border-white focus:outline-none focus:ring-0  peer"
            placeholder="Subject "
            value={emailInfo.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            id="floating_message"
            className="block py-2 mt-7 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-600    focus:outline-none focus:ring-0  peer min-h-[100px] resize-y focus:border-white "
            placeholder="Message"
            value={emailInfo.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="p-2 text-center px-6 bg-[#25282A] mt-5 w-52  rounded-lg"
          type="submit"
          onClick={() => {Handlesend()}}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;