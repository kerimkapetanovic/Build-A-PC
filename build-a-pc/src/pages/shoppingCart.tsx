import {useEffect,useState} from 'react';
import {useRouter} from 'next/router';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import "@/components/components.css";

function ShoppingCart() 
{
  const [cart,setCart]=useState([]);
  const router=useRouter();

  useEffect(() => 
    {
    const storedCart=JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleOrder=() => 
    {
    const user=JSON.parse(localStorage.getItem('user'));
    if(!user) 
    {
      alert('Please log in or register to proceed with the order.');
      router.push('/signIn');
      return;
    }
    router.push('/ordering');
  };

  const handleRemove=(index) => 
    {
    const updatedCart=[...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalPrice=cart.reduce((total, item) => total+item.price,0);

  return (
    <>
      <Header/>
      <Navigation/>
      <div className="tw-w-[100%] tw-h-[auto] tw-relative tw-p-8">
        <div className="tw-flex tw-flex-col tw-items-center fade-in">
          <h2 className="tw-text-white tw-text-2xl tw-mb-4">Shopping Cart</h2>
          <div className="tw-grid tw-grid-cols-1 tw-gap-4">
            {cart.map((item, index)=> (
              <div key={index} className="tw-flex tw-flex-col tw-items-center tw-bg-white tw-p-4 tw-rounded tw-shadow-md">
                <div className="tw-text-black tw-text-xl">{item.name}</div>
                <div className="tw-text-black tw-text-lg">${item.price}</div>
                <button className="tw-bg-red-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-text-lg tw-mt-4" onClick={() => handleRemove(index)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="tw-mt-8 tw-text-white">
            <h3 className="tw-text-2xl">Total Price: ${totalPrice.toFixed(2)}</h3>
            <button className="tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-text-lg tw-mt-4" onClick={handleOrder}>
              Proceed to Order
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default ShoppingCart;