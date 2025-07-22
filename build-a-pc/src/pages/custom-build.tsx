import { useState } from 'react';
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

function CustomBuild() {
  const [budget, setBudget] = useState('');
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [selectedComponents, setSelectedComponents] = useState({});
  const [step, setStep] = useState(1);
  const [warning, setWarning] = useState('');

  const handleNextStep = () => {
    setStep(step + 1);
  };

 const handleComponentSelect = (
  component: { price: number }, 
  setSelectedComponent: React.Dispatch<React.SetStateAction<any>>, 
  componentType: string
) => {
    const newRemainingBudget = remainingBudget + (selectedComponents[step]?.price || 0) - component.price;
    if (newRemainingBudget < 0) {
      alert('You have exceeded your budget!');
      return;
    }

    if (componentType === 'motherboard' && selectedComponents[2]?.type !== component.type) {
      setWarning('Selected motherboard is not compatible with the selected CPU. Please choose another motherboard.');
      return;
    }

    setWarning('');
    setRemainingBudget(newRemainingBudget);
    setSelectedComponent(component);
    setSelectedComponents({
      ...selectedComponents,
      [step]: component,
    });
  };

  const calculateTotalPrice = () => {
    return Object.values(selectedComponents).reduce((total, component) => total + component.price, 0);
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const customBuildNumber = cart.filter(item => item.type === 'Custom Build').length + 1;
    const customBuild = {
      name: `Custom Build ${customBuildNumber}`,
      type: 'Custom Build',
      components: selectedComponents,
      price: calculateTotalPrice(),
    };

    cart.push(customBuild);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${customBuild.name} added to cart!`);
  };

  const [selectedCpu, setSelectedCpu] = useState(null);
  const [selectedGpu, setSelectedGpu] = useState(null);
  const [selectedRam, setSelectedRam] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedMotherboard, setSelectedMotherboard] = useState(null);
  const [selectedPsu, setSelectedPsu] = useState(null);
  const [selectedCooler, setSelectedCooler] = useState(null);
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedFan, setSelectedFan] = useState(null);

  return (
    <>
      <Header />
      <Navigation />
      <div className="tw-w-[100%] tw-h-[auto] tw-relative tw-p-8">
        <div className="tw-absolute tw-top-4 tw-right-4 tw-text-white tw-text-xl">
          Budget: ${remainingBudget.toFixed(2)}
        </div>
        {warning && (
          <div className="tw-bg-red-500 tw-text-white tw-p-4 tw-rounded tw-mb-4">
            {warning}
          </div>
        )}
        {step === 1 && (
          <div className="tw-flex tw-flex-col tw-items-center fade-in">
            <h2 className="tw-text-white tw-text-4xl tw-mb-8">Enter Your Budget</h2>
            <input type="number" value={budget}
              onChange={(e) => {
                const newBudget = parseFloat(e.target.value);
                setBudget(e.target.value);
                setRemainingBudget(newBudget);
              }}
              className="tw-p-4 tw-rounded tw-mb-8 tw-text-black tw-bg-white tw-text-2xl tw-w-1/2" placeholder="Enter your budget" />
            <button onClick={handleNextStep} className="tw-bg-blue-500 tw-text-white tw-px-8 tw-py-4 tw-rounded tw-text-2xl">
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div className="tw-flex tw-flex-col tw-items-center fade-in">
            <h2 className="tw-text-white tw-text-2xl tw-mb-4">Select CPU</h2>
            <div className="tw-grid tw-grid-cols-4 tw-gap-4">
              {cpuData.map((cpu) => (
                <div key={cpu.name} className="tw-flex tw-flex-col tw-items-center tw-bg-white tw-p-4 tw-rounded tw-shadow-md">
                  <img src="/cpusLogo.jpg" alt={cpu.name} className="tw-w-32 tw-h-32 tw-mb-4" />
                  <div className="tw-text-black tw-text-xl">{cpu.name}</div>
                  <button className={`tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-text-lg ${selectedCpu === cpu ? 'tw-border-4 tw-border-blue-500' : ''}`} 
                  onClick={() => handleComponentSelect(cpu, setSelectedCpu, 'cpu')}>
                    ${cpu.price}
                  </button>
                </div>
              ))}
            </div>
            <button onClick={handleNextStep} className="tw-bg-blue-500 tw-text-white tw-px-8 tw-py-4 tw-rounded tw-text-2xl tw-mt-8" disabled={!selectedCpu}>
              Next
            </button>
          </div>
        )}
        {step === 3 && (
          <div className="tw-flex tw-flex-col tw-items-center fade-in">
            <h2 className="tw-text-white tw-text-2xl tw-mb-4">Select Motherboard</h2>
            <div className="tw-grid tw-grid-cols-4 tw-gap-4">
              {motherboardData.map((motherboard) => (
                <div key={motherboard.name} className="tw-flex tw-flex-col tw-items-center tw-bg-white tw-p-4 tw-rounded tw-shadow-md">
                  <img src="/motherBoard.png" alt={motherboard.name} className="tw-w-32 tw-h-32 tw-mb-4" />
                  <div className="tw-text-black tw-text-xl">{motherboard.name}</div>
                  <button className={`tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-text-lg ${selectedMotherboard === motherboard ? 'tw-border-4 tw-border-blue-500' : ''}`}
                    onClick={() => handleComponentSelect(motherboard, setSelectedMotherboard, 'motherboard')}>
                    ${motherboard.price}
                  </button>
                </div>
              ))}
            </div>
            <button onClick={handleNextStep} className="tw-bg-blue-500 tw-text-white tw-px-8 tw-py-4 tw-rounded tw-text-2xl tw-mt-8" disabled={!selectedMotherboard}>
              Next
            </button>
          </div>
        )}
        {step === 4 && (
          <div className="tw-flex tw-flex-col tw-items-center fade-in">
            <h2 className="tw-text-white tw-text-2xl tw-mb-4">Select GPU</h2>
            <div className="tw-grid tw-grid-cols-4 tw-gap-4">
              {gpuData.map((gpu) => (
                <div key={gpu.name} className="tw-flex tw-flex-col tw-items-center tw-bg-white tw-p-4 tw-rounded tw-shadow-md">
                  <img src="/graphicsCardsLogo.png" alt={gpu.name} className="tw-w-32 tw-h-32 tw-mb-4" />
                  <div className="tw-text-black tw-text-xl">{gpu.name}</div>
                  <button className={`tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-text-lg ${selectedGpu === gpu ? 'tw-border-4 tw-border-blue-500' : ''}`} onClick={() => handleComponentSelect(gpu, setSelectedGpu, 'gpu')}>
                    ${gpu.price}
                  </button>
                </div>
              ))}
            </div>
            <button onClick={handleNextStep} className="tw-bg-blue-500 tw-text-white tw-px-8 tw-py-4 tw-rounded tw-text-2xl tw-mt-8" disabled={!selectedGpu}>
              Next
            </button>
          </div>
        )}
        {step === 5 && (
          <div className="tw-flex tw-flex-col tw-items-center fade-in">
            <h2 className="tw-text-white tw-text-2xl tw-mb-4">Select RAM</h2>
            <div className="tw-grid tw-grid-cols-4 tw-gap-4">
              {ramData.map((ram) => (
                <div key={ram.name} className="tw-flex tw-flex-col tw-items-center tw-bg-white tw-p-4 tw-rounded tw-shadow-md">
                  <img src="ramLogo.png" alt={ram.name} className="tw-w-32 tw-h-32 tw-mb-4" />
                  <div className="tw-text-black tw-text-xl">{ram.name}</div>
                  <button className={`tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-text-lg ${selectedRam === ram ? 'tw-border-4 tw-border-blue-500' : ''}`} onClick={() => handleComponentSelect(ram, setSelectedRam, 'ram')}>
                    ${ram.price}
                  </button>
                </div>
              ))}
            </div>
            <button onClick={handleNextStep} className="tw-bg-blue-500 tw-text-white tw-px-8 tw-py-4 tw-rounded tw-text-2xl tw-mt-8" disabled={!selectedRam}>
              Next
            </button>
          </div>
        )}
        {step === 6 && (
          <div className="tw-flex tw-flex-col tw-items-center fade-in">
            <h2 className="tw-text-white tw-text-2xl tw-mb-4">Select Storage</h2>
            <div className="tw-grid tw-grid-cols-4 tw-gap-4">
              {storageData.map((storage) => (
                <div key={storage.name} className="tw-flex tw-flex-col tw-items-center tw-bg-white tw-p-4 tw-rounded tw-shadow-md">
                  <img src="/ssd.png" alt={storage.name} className="tw-w-32 tw-h-32 tw-mb-4" />
                  <div className="tw-text-black tw-text-xl">{storage.name}</div>
                  <button className={`tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-text-lg ${selectedStorage === storage ? 'tw-border-4 tw-border-blue-500' : ''}`}
                    onClick={() => handleComponentSelect(storage, setSelectedStorage, 'storage')}>
                    ${storage.price}
                  </button>
                </div>
              ))}
            </div>
            <button onClick={handleNextStep} className="tw-bg-blue-500 tw-text-white tw-px-8 tw-py-4 tw-rounded tw-text-2xl tw-mt-8" disabled={!selectedStorage}>
              Next
            </button>
          </div>
        )}
        {step === 7 && (
          <div className="tw-flex tw-flex-col tw-items-center fade-in">
            <h2 className="tw-text-white tw-text-2xl tw-mb-4">Select PSU</h2>
            <div className="tw-grid tw-grid-cols-4 tw-gap-4">
              {psuData.map((psu) => (
                <div key={psu.name} className="tw-flex tw-flex-col tw-items-center tw-bg-white tw-p-4 tw-rounded tw-shadow-md">
                  <img src="/powerSupply.png" alt={psu.name} className="tw-w-32 tw-h-32 tw-mb-4" />
                  <div className="tw-text-black tw-text-xl">{psu.name}</div>
                  <button className={`tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-text-lg ${selectedPsu === psu ? 'tw-border-4 tw-border-blue-500' : ''}`}
                    onClick={() => handleComponentSelect(psu, setSelectedPsu, 'psu')}>
                    ${psu.price}
                  </button>
                </div>
              ))}
            </div>
            <button onClick={handleNextStep} className="tw-bg-blue-500 tw-text-white tw-px-8 tw-py-4 tw-rounded tw-text-2xl tw-mt-8" disabled={!selectedPsu}>
              Next
            </button>
          </div>
        )}
        {step === 8 && (
          <div className="tw-flex tw-flex-col tw-items-center fade-in">
            <h2 className="tw-text-white tw-text-2xl tw-mb-4">Select Cooler</h2>
            <div className="tw-grid tw-grid-cols-4 tw-gap-4">
              {coolerData.map((cooler) => (
                <div key={cooler.name} className="tw-flex tw-flex-col tw-items-center tw-bg-white tw-p-4 tw-rounded tw-shadow-md">
                  <img src="/coolers.png" alt={cooler.name} className="tw-w-32 tw-h-32 tw-mb-4" />
                  <div className="tw-text-black tw-text-xl">{cooler.name}</div>
                  <button className={`tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-text-lg ${selectedCooler === cooler ? 'tw-border-4 tw-border-blue-500' : ''}`} onClick={() => handleComponentSelect(cooler, setSelectedCooler, 'cooler')}>
                    ${cooler.price}
                  </button>
                </div>
              ))}
            </div>
            <button onClick={handleNextStep} className="tw-bg-blue-500 tw-text-white tw-px-8 tw-py-4 tw-rounded tw-text-2xl tw-mt-8" disabled={!selectedCooler}>
              Next
            </button>
          </div>
        )}
        {step === 9 && (
          <div className="tw-flex tw-flex-col tw-items-center fade-in">
            <h2 className="tw-text-white tw-text-2xl tw-mb-4">Select Case</h2>
            <div className="tw-grid tw-grid-cols-4 tw-gap-4">
              {caseData.map((caseItem) => (
                <div key={caseItem.name} className="tw-flex tw-flex-col tw-items-center tw-bg-white tw-p-4 tw-rounded tw-shadow-md">
                  <img src="/cases.png" alt={caseItem.name} className="tw-w-32 tw-h-32 tw-mb-4" />
                  <div className="tw-text-black tw-text-xl">{caseItem.name}</div>
                  <button className={`tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-text-lg ${selectedCase === caseItem ? 'tw-border-4 tw-border-blue-500' : ''}`} onClick={() => handleComponentSelect(caseItem, setSelectedCase, 'case')}>
                    ${caseItem.price}
                  </button>
                </div>
              ))}
            </div>
            <button onClick={handleNextStep} className="tw-bg-blue-500 tw-text-white tw-px-8 tw-py-4 tw-rounded tw-text-2xl tw-mt-8" disabled={!selectedCase}>
              Next
            </button>
          </div>
        )}
        {step === 10 && (
          <div className="tw-flex tw-flex-col tw-items-center fade-in">
            <h2 className="tw-text-white tw-text-2xl tw-mb-4">Select Fan</h2>
            <div className="tw-grid tw-grid-cols-4 tw-gap-4">
              {fanData.map((fan) => (
                <div key={fan.name} className="tw-flex tw-flex-col tw-items-center tw-bg-white tw-p-4 tw-rounded tw-shadow-md">
                  <img src="/fans.png" alt={fan.name} className="tw-w-32 tw-h-32 tw-mb-4" />
                  <div className="tw-text-black tw-text-xl">{fan.name}</div>
                  <button className={`tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded tw-text-lg ${selectedFan === fan ? 'tw-border-4 tw-border-blue-500' : ''}`} onClick={() => handleComponentSelect(fan, setSelectedFan, 'fan')}>
                    ${fan.price}
                  </button>
                </div>
              ))}
            </div>
            <button onClick={handleNextStep} className="tw-bg-blue-500 tw-text-white tw-px-8 tw-py-4 tw-rounded tw-text-2xl tw-mt-8" disabled={!selectedFan}>
              Next
            </button>
          </div>
        )}
        {step === 11 && (
          <div className="tw-flex tw-flex-col tw-items-center fade-in">
            <h2 className="tw-text-white tw-text-4xl tw-mb-8">Thank You!</h2>
            <p className="tw-text-white tw-text-2xl tw-mb-4">Your custom PC build is complete.</p>
            <p className="tw-text-white tw-text-2xl tw-mb-8">Total Price: ${calculateTotalPrice().toFixed(2)}</p>
            <button className="tw-bg-blue-500 tw-text-white tw-px-8 tw-py-4 tw-rounded tw-text-2xl" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default CustomBuild;