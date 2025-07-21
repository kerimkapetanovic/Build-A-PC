import { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '@/components/components.css';

import storageData from '@/data/storage.json';

function SSDSelection() 
{
  const [selectedSsd, setSelectedSsd] = useState(null);

  const handleComponentSelect =(ssd) => 
    {
    setSelectedSsd(ssd);
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(ssd);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const ssdData = storageData.filter((item)=> item.type==='SSD');

  return (
    <>
      <Header />
      <Navigation />
      <div
        className="tw-w-[100%] tw-h-[auto] tw-relative tw-p-8">
        <div className="tw-flex tw-flex-col tw-items-center fade-in">
          <h2 className="tw-text-white tw-text-2xl tw-mb-4">Select SSD</h2>
          <div className="tw-grid tw-grid-cols-4 tw-gap-4">
            {ssdData.map((ssd) => (
              <div key={ssd.name} className="tw-flex tw-flex-col tw-items-center tw-bg-white tw-p-4 tw-rounded tw-shadow-md">
                <img src="/ssd.png" alt={ssd.name} className="tw-w-32 tw-h-32 tw-mb-4" />
                <div className="tw-text-black tw-text-xl">{ssd.name}</div>
                <div className="tw-text-black tw-text-lg">${ssd.price}</div>
                <button className={`tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-text-lg tw-mt-4 ${selectedSsd === ssd ? 'tw-border-4 tw-border-blue-500' : ''}`} onClick={() => handleComponentSelect(ssd)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          {selectedSsd && (
            <div className="tw-mt-8 tw-text-white">
              <h3 className="tw-text-2xl">Selected SSD:</h3>
              <p className="tw-text-xl">{selectedSsd.name}</p>
              <p className="tw-text-xl">${selectedSsd.price}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SSDSelection;