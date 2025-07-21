import {useState} from 'react';
import {useRouter} from 'next/router';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import "@/components/components.css";

function Ordering() 
{
  const [city,setCity]=useState('');
  const [postCode,setPostCode]=useState('');
  const [address,setAddress]=useState('');
  const router=useRouter();

  const handleOrder=async ()=>
    {
    const user=JSON.parse(localStorage.getItem('user'));
    const cart=JSON.parse(localStorage.getItem('cart')) || [];

    if (!user||cart.length===0) 
    {
      alert('No user logged in or cart is empty.');
      return;
    }

    const order = 
    {
      user_email:user.email,
      items:cart,
      total_price:cart.reduce((total,item)=>total+item.price,0),
      shipping_address:{city,postCode,address,},
    };

    const response = await fetch('http://localhost:4001/api/orders', 
{
      method:'POST',
      headers: 
      {
        'Content-Type':'application/json',
      },
      body:JSON.stringify(order),
    });

    if(response.ok) 
      {
      alert('Order placed successfully!');
      localStorage.removeItem('cart');
      router.push('/');
    } else {
      alert('Failed to place order.');
    }
  };

  return (
    <>
      <Header />
      <Navigation />
      <div className="tw-w-[100%] tw-h-[auto] tw-relative tw-p-8">
        <div className="tw-flex tw-flex-col tw-items-center fade-in">
          <h2 className="tw-text-white tw-text-2xl tw-mb-4">Shipping Information</h2>
          <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} className="tw-p-4 tw-rounded tw-mb-4 tw-text-black tw-bg-white tw-text-xl tw-w-1/2"placeholder="City"/>
            <input type="text" value={postCode} onChange={(e)=>setPostCode(e.target.value)} className="tw-p-4 tw-rounded tw-mb-4 tw-text-black tw-bg-white tw-text-xl tw-w-1/2" placeholder="Post Code"/>
            <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} className="tw-p-4 tw-rounded tw-mb-4 tw-text-black tw-bg-white tw-text-xl tw-w-1/2"placeholder="Address"/>
          <button className="tw-bg-blue-500 tw-text-white tw-px-8 tw-py-4 tw-rounded tw-text-2xl" onClick={handleOrder}>
            Place Order
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Ordering;