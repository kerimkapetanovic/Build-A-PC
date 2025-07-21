import Link from "next/link";

function Sections()
{
    return(
        <>
            <div className="mainContent">
            <section className="tw-mt-12">
            <h2>CREATE A CUSTOM BUILD PC</h2>
            <h3>Build the PC of Your Dreams with Precision and Power</h3>
            <div className="tw-flex  tw-flex-col tw-items-center tw-justify-center">
                <Link href="/custom-build">
                <img src="custombuild.png" className="tw-w-[700px] tw-h-[420px] tw-bg-white tw-rounded-t-lg"></img>
                </Link>
                <div className="tw-rounded-b-lg tw-w-[700px] tw-h-[50px] tw-flex  tw-flex-col tw-items-center tw-justify-center" style={{background:"linear-gradient(0deg, #08004a, #134472)"}}>
                <h2><Link href="/custom-build">CREATE YOUR CUSTOM PC BUILD</Link></h2>
                </div>
            </div>
            </section>
            <section className="tw-mt-12">
            <h2>COMPUTERS</h2>
            <h3>Browse Our Collection of High-Quality Computers</h3>
            <div className="tw-flex tw-flex-row tw-space tw-justify-evenly tw-font-bold tw-mt-4 tw-text-[20px]">
                <div className="tw-bg-white tw-w-[360px] tw-h-[340px] tw-rounded-md tw-flex  tw-flex-col tw-items-center tw-justify-center ">
                <Link href="/consumerPc"><img src="businessPc.jpg" className="tw-w-[345px] tw-h-[285px]"></img></Link>
                <p className="tw-text-black">Consumer</p>
                </div>
                <div className="tw-bg-white tw-w-[360px] tw-h-[340px] tw-rounded-md tw-flex  tw-flex-col tw-items-center tw-justify-center">
                <Link href="/gamingPc"><img src="gamingPc.png" className="tw-w-[250px] tw-h-[285px]"></img></Link> 
                    <p className="tw-text-black">Gaming</p>
                </div>
                <div className="tw-bg-white tw-w-[360px] tw-h-[340px] tw-rounded-md tw-flex  tw-flex-col tw-items-center tw-justify-center">
                    <Link href="/workstationPc"><img src="workstation pc.png" className="tw-w-[345px] tw-h-[285px]"></img></Link>
                    <p className="tw-text-black">Workstation</p>
                </div>
            </div>
            </section>
            <section className="tw-mt-12" >
            <h2>COMPONENTS</h2>
            <h3>Browse Our Selection of PC Components</h3>
            <div className="tw-flex tw-justify-center tw-items-center tw-mt-4">
                    <div className="tw-grid tw-grid-cols-3 tw-gap-12 tw-font-bold tw-text-[20px]">
                      <div className="tw-bg-white tw-w-[360px] tw-h-[340px] tw-rounded-md tw-flex tw-flex-col tw-items-center tw-justify-center">
                        <Link href="/pcpartpages/cpu"><img src="cpusLogo.jpg" className="tw-w-[345px] tw-h-[285px]" alt="CPU"></img></Link>
                        <p className="tw-text-black">CPU</p>
                      </div>
                      <div className="tw-bg-white tw-w-[360px] tw-h-[340px] tw-rounded-md tw-flex tw-flex-col tw-items-center tw-justify-center">
                        <Link href="/pcpartpages/gpu"><img src="graphicsCardsLogo.png" className="tw-w-[250px] tw-h-[285px]" alt="Graphics Cards"></img></Link>
                        <p className="tw-text-black">Graphics Cards</p>
                      </div>
                      <div className="tw-bg-white tw-w-[360px] tw-h-[340px] tw-rounded-md tw-flex tw-flex-col tw-items-center tw-justify-center">
                        <Link href="/pcpartpages/ram"><img src="ramLogo.png" className="tw-w-[345px] tw-h-[285px]" alt="RAM"></img></Link>
                        <p className="tw-text-black">RAM</p>
                      </div>
                      <div className="tw-bg-white tw-w-[360px] tw-h-[340px] tw-rounded-md tw-flex tw-flex-col tw-items-center tw-justify-center">
                        <Link href="/pcpartpages/motherboard"><img src="motherBoard.png" className="tw-w-[345px] tw-h-[285px]" alt="Motherboards"></img></Link>
                        <p className="tw-text-black">Motherboards</p>
                      </div>
                      <div className="tw-bg-white tw-w-[360px] tw-h-[340px] tw-rounded-md tw-flex tw-flex-col tw-items-center tw-justify-center">
                        <Link href="/pcpartpages/hdd"><img src="hddLogo.png" className="tw-w-[250px] tw-h-[285px]" alt="HDD"></img></Link>
                        <p className="tw-text-black">HDD</p>
                      </div>
                      <div className="tw-bg-white tw-w-[360px] tw-h-[340px] tw-rounded-md tw-flex tw-flex-col tw-items-center tw-justify-center">
                        <Link href="/pcpartpages/ssd"><img src="ssd.png" className="tw-w-[345px] tw-h-[285px]" alt="SSD"></img></Link>
                        <p className="tw-text-black">SSD</p>
                      </div>
                      <div className="tw-bg-white tw-w-[360px] tw-h-[340px] tw-rounded-md tw-flex tw-flex-col tw-items-center tw-justify-center">
                        <Link href="/pcpartpages/psu"><img src="powerSupply.png" className="tw-w-[345px] tw-h-[285px]" alt="Power Supplies"></img></Link>
                        <p className="tw-text-black">Power Supplies</p>
                      </div>
                      <div className="tw-bg-white tw-w-[360px] tw-h-[340px] tw-rounded-md tw-flex tw-flex-col tw-items-center tw-justify-center">
                        <Link href="/pcpartpages/cases"><img src="cases.png" className="tw-w-[250px] tw-h-[285px]" alt="Computer Cases"></img></Link>
                        <p className="tw-text-black">Computer Cases</p>
                      </div>
                      <div className="tw-bg-white tw-w-[360px] tw-h-[340px] tw-rounded-md tw-flex tw-flex-col tw-items-center tw-justify-center">
                        <Link href="/pcpartpages/coolers"><img src="coolers.png" className="tw-w-[345px] tw-h-[285px]" alt="Coolers"></img></Link>
                        <p className="tw-text-black">Coolers</p>
                      </div>
                    </div>
                  </div>
            </section>
            <section className="tw-mt-12" >
            <h2>LAPTOPS</h2>
            <h3>Browse Our Collection of High-Performance Laptops</h3>
            <div className="tw-flex tw-flex-row tw-space tw-justify-evenly tw-font-bold tw-mt-4 tw-text-[20px]">
                <div className="tw-bg-white tw-w-[360px] tw-h-[340px] tw-rounded-md tw-flex  tw-flex-col tw-items-center tw-justify-center ">
                <Link href="/playstation"><img src="consumerLaptops.jpg" className="tw-w-[345px] tw-h-[285px]"></img></Link>
                <p className="tw-text-black">Consumer</p>
                </div>
                <div className="tw-flex tw-flex-row tw-space tw-justify-evenly tw-font-bold tw-mt-4 tw-text-[20px]">
                <div className="tw-bg-white tw-w-[360px] tw-h-[340px] tw-rounded-md tw-flex  tw-flex-col tw-items-center tw-justify-center ">
                <Link href="/playstation"><img src="gamingLaptop.jpg" className="tw-w-[345px] tw-h-[285px]"></img></Link>
                <p className="tw-text-black">Gaming</p>
                </div>
              </div>
            </div>
            </section>
            <section className="tw-mt-12" >
            <h2>CONSOLES</h2>
            <h3>Browse Our Selection of Gaming Consoles</h3>
            <div className="tw-flex tw-flex-row tw-space tw-justify-evenly tw-font-bold tw-mt-4 tw-text-[20px]">
                <div className="tw-bg-white tw-w-[360px] tw-h-[340px] tw-rounded-md tw-flex  tw-flex-col tw-items-center tw-justify-center ">
                <Link href="/playstation"><img src="ps5.png" className="tw-w-[345px] tw-h-[285px]"></img></Link>
                <p className="tw-text-black">Playstation</p>
                </div>
                <div className="tw-bg-white tw-w-[360px] tw-h-[340px] tw-rounded-md tw-flex  tw-flex-col tw-items-center tw-justify-center">
                <Link href="/xbox"><img src="xbox.jpg" className="tw-w-[345px] tw-h-[285px]"></img></Link> 
                    <p className="tw-text-black">Xbox</p>
                </div>
                <div className="tw-bg-white tw-w-[360px] tw-h-[340px] tw-rounded-md tw-flex  tw-flex-col tw-items-center tw-justify-center">
                    <Link href="/switch"><img src="switch.png" className="tw-w-[345px] tw-h-[285px]"></img></Link>
                    <p className="tw-text-black">Switch</p>
                </div>
            </div>
            </section>
            <section className="tw-mt-12" >
            <h2>ACCESORIES</h2>
            <h3>Browse Our Collection of Must-Have Accessories</h3>
            </section>
            </div>
        </>
    );
}
export default Sections;