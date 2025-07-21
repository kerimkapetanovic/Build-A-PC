import {useState} from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "@/components/components.css";

function Contact() 
{
  const [formData, setFormData] = useState(
  {
    email:"",
    message:""
  });

  const handleChange=(e)=>
    {
    const {name,value}=e.target;
    setFormData({
      ...formData,
      [name]:value
    });
  };

  const handleSubmit=async(e)=>
    {
    e.preventDefault();
    const {email,message}=formData;

    if(email&&message) 
      {
      try 
      {
        const res=await fetch('http://localhost:4001/api/contact', 
        {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(formData)
        });

        const data=await res.json();
        console.log('Response received:',data); 

        if(res.status === 200) 
        {
          alert("Message sent successfully.");
          setFormData({ email:"",message:"" });
        } 
        else 
        {
          alert(data.message);
        }
      } 
      catch (error) 
      {
        console.error('Error during fetch:',error); 
        alert("An error occurred. Please try again.");
      }
    } else 
    {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <Header/>
      <Navigation/>
      <div className="tw-w-[100%] tw-h-auto tw-flex tw-justify-center tw-items-center tw-py-8">
        <div className="tw-w-[450px] tw-h-auto tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-white tw-rounded-lg tw-text-black tw-shadow-lg tw-p-8">
          <h1 className="tw-text-[25px] tw-mb-6">Contact Us</h1>
          <form className="tw-w-full" onSubmit={handleSubmit}>
            <div className="tw-w-full tw-mb-4">
              <label className="tw-block tw-mb-2 tw-text-lg">E-mail:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your e-mail" className="tw-w-full tw-py-2 tw-px-4 tw-mb-4 tw-rounded-lg tw-border tw-border-gray-300 tw-shadow-sm tw-text-black tw-text-lg"/>
            </div>
            <div className="tw-w-full tw-mb-4">
              <label className="tw-block tw-mb-2 tw-text-lg">Message:</label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" className="tw-w-full tw-p-4 tw-mb-4 tw-rounded-lg tw-border tw-border-gray-300 tw-shadow-sm tw-text-black tw-text-lg"/>
            </div>
            <button type="submit" className="tw-w-full tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-text-lg tw-hover:bg-blue-600">Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Contact;