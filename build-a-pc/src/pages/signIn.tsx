import {useState} from "react";
import {useRouter} from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import "@/components/components.css";

function SignIn() 
{
  const router=useRouter();
  const [formData,setFormData] = useState({
    email:"",
    password:"",
  });
  const [user, setUser]=useState(null);

  const handleChange=(e) => 
    {
    const {name,value}=e.target;
    setFormData(
      {
      ...formData,
      [name]:value,
    });
  };

  const handleSubmit=async (e)=> 
    {
    e.preventDefault();
    console.log("Form submitted",formData); 

    const { email, password }=formData;

    try {
      const res=await fetch("https://build-a-pc-backend.onrender.com/api/signIn", 
       {
        method:"POST",
        headers:
        {
          "Content-Type":"application/json",
        },
        body:JSON.stringify(formData),
      });

      console.log("Response status",res.status);
      const data=await res.json();
      console.log("Response received",data); 

      if(res.status===200) 
      {
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
        router.push("/");
      } 
      else 
      {
        alert(data.message);
      }
    } 
    catch (error) 
    {
      console.error("Error during fetch",error); 
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Header/>
      <Navigation/>
      <div className="tw-w-[100%] tw-h-auto tw-flex tw-justify-center tw-items-center tw-py-8">
        <div className="tw-w-[450px] tw-h-auto tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-white tw-rounded-lg tw-text-black tw-shadow-lg tw-p-8">
          <h1 className="tw-text-[25px] tw-mb-6">{user ? `${user.name} ${user.surname}` : "Sign-In"}</h1>
          <form className="tw-w-full" onSubmit={handleSubmit}>
            <div className="tw-w-full tw-mb-4">
              <label className="tw-block tw-mb-2 tw-text-lg">E-mail:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your e-mail" className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded"/>
            </div>
            <div className="tw-w-full tw-mb-4">
              <label className="tw-block tw-mb-2 tw-text-lg">Password:</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" className="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded"/>
            </div>
            <div className="tw-w-full tw-mb-4 tw-flex tw-flex-row tw-justify-between tw-items-center tw-space-x-4">
              <button type="submit" className="tw-w-full tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-text-lg tw-hover:bg-blue-600">
                Sign-In
              </button>
              <Link href="/register" className="tw-w-full tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-text-lg tw-hover:bg-blue-600 tw-text-center">Register</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default SignIn;