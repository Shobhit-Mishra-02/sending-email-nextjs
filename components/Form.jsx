import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = () => {
    console.log("sending mail...");
  };

  return (
    <div className="w-full h-screen flex justify-center align-middle items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMail();
        }}
        className="w-fit space-y-4 p-2 rounded-md shadow-md"
      >
        <div className="flex flex-col">
          <label htmlFor="email">Enter mail</label>
          <input
            type="email"
            className="w-[300px] rounded-md border-2 border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Enter message</label>
          <textarea
            className="w-[300px] rounded-md border-2 border-gray-300"
            name="message"
            id="message"
            cols="25"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="pt-6">
          <button
            type="submit"
            className="px-6 py-2 text-xl bg-blue-500 text-white w-full hover:bg-blue-600 rounded-md focus:outline-none focus:outline focus:outline-blue-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
