import React from "react";

export default function Contact() {
  return (
    <div id="Contact" className="px-8 lg:px-36 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center">Contact</h1>
      <form
        action="https://getform.io/f/ebpdeevb"
        method="POST"
        encType="multipart/form-data"
      >
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
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="uppercase text-sm py-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
            />
          </div>
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
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="subject" className="uppercase text-sm py-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
            required
          />
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
    </div>
  );
}
