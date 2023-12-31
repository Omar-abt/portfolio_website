import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import React from 'react';
import styles from '../styles'; 

const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Omar Abotahoon",
          from_email: form.email,
          to_email: "omarhossam.abt@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact"
    className='flex-col sm:pb-16 relative px-6 '>

      <div className="absolute z-[0] w-[60%] h-[40%] -left-[64%] rounded-full blue__gradient bottom-[35%] opacity-53" />

      <div className='w-full flex justify-between items-center md:flex-row flex-col mb-4 relative z-[1]'>
        <h1 className={`${styles.heading2}`}>Contact Me</h1>
      </div>

      <div className='flex flex-wrap w-full relative z-[1] justify-center'>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col w-full md:w-[65%] mt-7 md:mt-12 gap-8 contact-bg px-6 py-8 md:px-14 md:py-10 rounded-lg'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 font-poppins'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary p-4 placeholder:text-gray-500 text-primary rounded-lg outline-none border-none font-medium text-[14px] md:text-[16px]'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 font-poppins'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary p-4 placeholder:text-gray-500 text-primary rounded-lg outline-none border-none font-medium text-[14px] md:text-[16px]'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 font-poppins'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary p-4 placeholder:text-gray-500 text-primary rounded-lg outline-none border-none font-medium text-[14px] md:text-[16px]'
            />
          </label>

          <button
            type='submit'
            className='bg-blue-gradient hover:bg-sky-800 py-3 px-8 rounded-xl outline-none w-fit font-poppins font-medium text-[19px]'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

    </section>
  )
}

export default Contact