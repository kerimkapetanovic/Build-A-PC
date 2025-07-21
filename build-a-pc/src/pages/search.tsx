import {useRouter} from 'next/router';
import {useEffect,useState} from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '@/components/components.css';

import cpuData from '@/data/cpu.json';
import gpuData from '@/data/gpu.json';
import ramData from '@/data/ram.json';
import storageData from '@/data/storage.json';
import motherboardData from '@/data/motherboard.json';
import psuData from '@/data/psu.json';
import coolerData from '@/data/coolers.json';
import caseData from '@/data/case.json';
import fanData from '@/data/fan.json';

const imageMapping= 
{
  cpu:'/cpusLogo.png',
  gpu:'/graphicsCardsLogo.png',
  ram:'/ramLogo.png',
  storage:'/ssd.png',
  motherboard:'/motherBoard.png',
  psu:'/powerSupply.png',
  cooler:'/coolers.png',
  case:'/cases.png',
  fan:'/fans.png',
};

function Search() 
{
  const router=useRouter();
  const {query}=router.query;
  const [results,setResults]=useState([]);

  useEffect(() => 
    {
    if(query) 
      {
      const allData= 
      [
        ...cpuData,
        ...gpuData,
        ...ramData,
        ...storageData,
        ...motherboardData,
        ...psuData,
        ...coolerData,
        ...caseData,
        ...fanData,
      ];

      const filteredResults = allData.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) || (item.type && item.type.toLowerCase().includes(query.toLowerCase())));

      setResults(filteredResults);
    }}, [query]);

  const handleAddToCart=(item)=> 
    {
    const cart=JSON.parse(localStorage.getItem('cart')) || []; 
    cart.push(item);
    localStorage.setItem('cart',JSON.stringify(cart));
    alert(`${item.name} added to cart!`);
  };

  return (
    <>
      <Header/>
      <Navigation/>
      <div className="tw-w-[100%] tw-h-[auto] tw-relative tw-p-8">
        <div className="tw-flex tw-flex-col tw-items-center fade-in">
          <h2 className="tw-text-white tw-text-2xl tw-mb-4">Search Results for "{query}"</h2>
          <div className="tw-grid tw-grid-cols-4 tw-gap-4">
            {results.map((item, index) => (
              <div key={index} className="tw-flex tw-flex-col tw-items-center tw-bg-white tw-p-4 tw-rounded tw-shadow-md">
                <img src={imageMapping[item.type]} alt={item.name} className="tw-w-32 tw-h-32 tw-mb-4" onError={(e) => e.target.src='/default.png'} />
                <div className="tw-text-black tw-text-xl">{item.name}</div>
                <div className="tw-text-black tw-text-lg">${item.price}</div>
                <button className="tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-text-lg tw-mt-4" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default Search;