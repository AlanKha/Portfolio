import React, { useState } from "react";

export default function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "Contact Form",
    honeypot: "",
    message: "",
    replyTo: "@",
    accessKey: import.meta.env.VITE_ACCESS_KEY
  });

  const [response, setResponse] = useState({
    type: "",
    message: ""
  });

  const handleChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Thank you for reaching out!'
        });
      } else {
        setResponse({
          type: 'error',
          message: json.message
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occurred while submitting the form.'
      });
    }
  };

  // Temporary function to set the response manually for testing
  const simulateResponse = (type) => {
    if (type === 'success') {
      setResponse({
        type: 'success',
        message: 'Thank you for reaching out! Your message has been delivered to my email and I will respond back as soon as I can!.'
      });
    } else if (type === 'error') {
      setResponse({
        type: 'error',
        message: 'There was an error sending the message. Please feel free to reach out to my email directly, khalilialan@gmail.com'
      });
    }
  };

  return (
    <div id="Contact" className="px-8 lg:px-36 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center">Contact</h1>

      {response.type === 'success' && (
        <div className="text-center bg-customGreen text-customWhite p-4 rounded-lg">{response.message}</div>
      )}
      {response.type === 'error' && (
        <div className="text-center bg-red-400 text-customWhite p-4 rounded-lg notification is-danger">{response.message}</div>
      )}

      {!response.message && (
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="accessKey" value={contact.accessKey} />
          <input
            type="hidden"
            name="subject"
            value={contact.subject}
            onChange={handleChange}
          />
          <input
            type="hidden"
            name="honeypot"
            value={contact.honeypot}
            onChange={handleChange}
            style={{ display: "none" }}
          />

          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label htmlFor="name" className="uppercase text-sm py-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                value={contact.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="uppercase text-sm py-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                value={contact.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-col py-2">
            <label htmlFor="message" className="uppercase text-sm py-2">
              Message
            </label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300 text-black"
              name="message"
              id="message"
              rows="10"
              value={contact.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="rounded-lg bg-customGreen text-customWhite mt-4 w-full p-4"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}