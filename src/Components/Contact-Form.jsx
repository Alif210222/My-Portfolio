import React from 'react';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
 import {  toast } from 'react-toastify';

const Contact_Form = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qxa9d96', 'template_y7oiagp', form.current, {
        publicKey: 'FC-gvKBOwB1xuZSyl',
      })
      .then(
        () => {
            console.log("Email send")
            toast('Email send successful!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



    return (
        <div>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
           

            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-3 focus:ring-pink-400"
            />
            <input
              type="email"
             name="user_email"
              required
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-3 focus:ring-pink-400"
            />
            <textarea
              name="message" 
              required
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-3 focus:ring-pink-400"
            ></textarea>

            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <button
              type="submit"
              className="bg-[#f40450] text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition"
            >
              Submit Form
            </button>
          </form>
        </div>
    );
};

export default Contact_Form;