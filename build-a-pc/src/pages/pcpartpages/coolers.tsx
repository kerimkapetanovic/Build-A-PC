import { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '@/components/components.css';

import coolerData from '@/data/coolers.json';

function CoolerSelection() {
  const [selectedCooler, setSelectedCooler] = useState(null);

  const handleComponentSelect=(cooler)=>
  {
    setSelectedCooler(cooler);
    const cart=JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cooler);
    localStorage.setItem('cart',JSON.stringify(cart));
  };

  return (
    <>
      <Header/>
      <Navigation/>
      <div
        className="tw-w-[100%] tw-h-[auto] tw-relative tw-p-8">
        <div className="tw-flex tw-flex-col tw-items-center fade-in">
          <h2 className="tw-text-white tw-text-2xl tw-mb-4">Select Cooler</h2>
          <div className="tw-grid tw-grid-cols-4 tw-gap-4">
            {coolerData.map((cooler) => (
              <div key={cooler.name} className="tw-flex tw-flex-col tw-items-center tw-bg-white tw-p-4 tw-rounded tw-shadow-md">
                <img src="/coolers.png" alt={cooler.name} className="tw-w-32 tw-h-32 tw-mb-4" />
                <div className="tw-text-black tw-text-xl">{cooler.name}</div>
                <div className="tw-text-black tw-text-lg">${cooler.price}</div>
                <button className={`tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-text-lg tw-mt-4 ${selectedCooler === cooler ? 'tw-border-4 tw-border-blue-500' : ''}`} onClick={() => handleComponentSelect(cooler)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          {selectedCooler && (
            <div className="tw-mt-8 tw-text-white">
              <h3 className="tw-text-2xl">Selected Cooler:</h3>
              <p className="tw-text-xl">{selectedCooler.name}</p>
              <p className="tw-text-xl">${selectedCooler.price}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CoolerSelection;