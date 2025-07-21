import { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '@/components/components.css';

import motherboardData from '@/data/motherboard.json';

function MotherboardSelection() 
{
  const [selectedMotherboard, setSelectedMotherboard] = useState(null);

  const handleComponentSelect=(motherboard) => 
    {
    setSelectedMotherboard(motherboard);
    const cart=JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(motherboard);
    localStorage.setItem('cart',JSON.stringify(cart));
  };

  return (
    <>
      <Header />
      <Navigation />
      <div
        className="tw-w-[100%] tw-h-[auto] tw-relative tw-p-8">
        <div className="tw-flex tw-flex-col tw-items-center fade-in">
          <h2 className="tw-text-white tw-text-2xl tw-mb-4">Select Motherboard</h2>
          <div className="tw-grid tw-grid-cols-4 tw-gap-4">
            {motherboardData.map((motherboard) => (
              <div key={motherboard.name} className="tw-flex tw-flex-col tw-items-center tw-bg-white tw-p-4 tw-rounded tw-shadow-md">
                <img src="/motherBoard.png" alt={motherboard.name} className="tw-w-32 tw-h-32 tw-mb-4" />
                <div className="tw-text-black tw-text-xl">{motherboard.name}</div>
                <div className="tw-text-black tw-text-lg">${motherboard.price}</div>
                <button className={`tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-text-lg tw-mt-4 ${selectedMotherboard === motherboard ? 'tw-border-4 tw-border-blue-500' : ''}`} onClick={() => handleComponentSelect(motherboard)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          {selectedMotherboard && (
            <div className="tw-mt-8 tw-text-white">
              <h3 className="tw-text-2xl">Selected Motherboard:</h3>
              <p className="tw-text-xl">{selectedMotherboard.name}</p>
              <p className="tw-text-xl">${selectedMotherboard.price}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MotherboardSelection;