import React from "react";
import { toast } from "react-toastify";
export const Contact=()=>{
    const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "c4a69669-d02d-4a78-8f0d-15d43d85b9dc");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
     toast.error(data.message)
      setResult("");
    }
  };
    return(
        <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact">
             <h1 className="text-2xl sm:text-4xl text-center font-semibold">Contact <span className="underline underline-offset-4 decoration-2 under font-light">With Us</span></h1>
        <p className="text-center text-gray-700 mb-8 max-w-80 mx-auto">Ready to make your dreams come into reality! let's connect</p>
<form onSubmit={onSubmit} action="" className="max-w-2xl mx-auto text-gray-600 pt-8">
    <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 text-left">Your Name
        <input className="w-full border border-gray-200 rounded py-3 px-4 mt-2" type="text" placeholder="your name" required name="name"/>
        </div>
         <div className="w-full md:w-1/2 text-left md:pl-4">Your email
        <input className="w-full border border-gray-200 rounded py-3 px-4 mt-2" type="email" placeholder="your email" required name="email"/>
        </div>
    </div>
    <div className="my-6 text-left">
        Message
        <textarea name="message" id="" placeholder="message" required className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"></textarea>
    </div>
    <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">
       {result? result:"Send Message"}
    </button>
</form>
  </div>
    )
}