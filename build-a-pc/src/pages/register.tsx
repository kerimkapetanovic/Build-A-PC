import {useState} from "react";
import {useRouter} from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import "@/components/components.css";

function Register() 
{
  const router=useRouter();
  const [formData,setFormData]=useState(
    {
    name:"",
    surname:"",
    email:"",
    password:"",
    telephone:"",
    sex:""
  });

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData(
      {
      ...formData,
      [name]:value
    });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const {name,surname,email,password,telephone,sex}=formData;

    if(name && surname && email && password && telephone && sex) 
      {
      try 
      {
        const res=await fetch('http://localhost:4001/api/register', 
        {
          method:'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(formData)
        });

        const data=await res.json();
        console.log('Response received:',data); 

        if (res.status===200) 
          {
          router.push("/signIn");
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
    } 
    else 
    {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <Header />
      <Navigation />
      <div className="tw-w-[100%] tw-h-auto tw-flex tw-justify-center tw-items-center tw-py-8">
        <div className="tw-w-[450px] tw-h-auto tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-white tw-rounded-lg tw-text-black tw-shadow-lg tw-p-8">
          <h1 className="tw-text-[25px] tw-mb-6">Register</h1>
          <form className="tw-w-full" onSubmit={handleSubmit}>
            <div className="tw-w-full tw-mb-4">
              <label className="tw-block tw-mb-2 tw-text-lg">Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded"/>
            </div>
            <div className="tw-w-full tw-mb-4">
              <label className="tw-block tw-mb-2 tw-text-lg">Surname:</label>
              <input
                type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Enter your surname" className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded"/>
            </div>
            <div className="tw-w-full tw-mb-4">
              <label className="tw-block tw-mb-2 tw-text-lg">E-mail:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your e-mail" className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded"/>
            </div>
            <div className="tw-w-full tw-mb-4">
              <label className="tw-block tw-mb-2 tw-text-lg">Password:</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded"/>
            </div>
            <div className="tw-w-full tw-mb-4">
              <label className="tw-block tw-mb-2 tw-text-lg">Telephone Number:</label>
              <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Enter your telephone number" className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded"/>
            </div>
            <div className="tw-w-full tw-mb-6">
              <label className="tw-block tw-mb-2 tw-text-lg">Sex:</label>
              <select name="sex" value={formData.sex} onChange={handleChange} className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded">
                <option value="">Select your sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button type="submit" className="tw-w-full tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-text-lg tw-hover:bg-blue-600">
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Register;