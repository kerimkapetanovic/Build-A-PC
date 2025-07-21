function Footer()
{
    return (

        <footer className="footerBox">
            <div className="footerContent">
            <div><strong>Build-A-PC d.o.o Sarajevo</strong>
            <ul>
                
                <li>Hrasnička cesta 15</li>
                <li><a href="mailto:220302143@student.ius.edu.ba">E-Mail: 220302143@student.ius.edu.ba </a></li>
                <li><a href="tel:060 321 9466">Tel/Mob: 060 321 94-66</a></li>
                </ul>
            </div>

            <div><strong>Customer Service</strong>
                <ul className="customerServiceList">
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/shipping-info">Shipping Information</a></li>
                <li><a href="/returns-policy">Returns & Refunds</a></li>
                <li><a href="/support">Technical Support</a></li>
                </ul>
               </div>

            <div><strong>Terms of Sale</strong>
            <ul className="termsOfSaleList">
                <li><a href="/terms-of-sale">Terms of Sale</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/shipping-policy">Shipping Policy</a></li>
                <li><a href="/returns-policy">Returns & Refunds Policy</a></li>
                <li><a href="/cookies-policy">Cookies Policy</a></li>
            </ul>
            </div>

            <div><strong>Payment Methods</strong>
            <ul className="paymentMethods">
                <li><a href="https://www.mastercard.us/en-us.html"><img src="/mastercard.png" alt="MasterCard"></img></a></li>
                <li><a href="https://www.mastercard.com/content/brandcenter/standard-mastercard/en/brand-requirement/maestro.html"><img src="/maestrocard.png" alt="Maestro Card"></img></a></li>
                <li><a href="https://www.visasoutheasteurope.com"><img src="/visa.webp" alt="Visa"></img></a></li>
                <li><a href="https://www.dinersclub.com"><img src="/dinersClub.png" alt="Diners Club"></img></a></li>
                <li><a href="https://www.americanexpress.com"><img src="/americanExpress.webp" alt="American Express"></img></a></li>
            </ul>
            </div>
            </div>
            <div>
                <hr></hr>
                <p style={{textAlign:"center"}}>&copy;2024, All rights reserved</p>
            </div>
        </footer>
    );

}
export default Footer