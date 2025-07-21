"use client";
import Link from "next/link";
import { useState } from "react";

function Navigation() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className="navigationBar">
      <div className="menuContainer">
        <button onClick={toggleSubMenu} style={{color:"white"}}>Menu</button>

        <ul className="menuBar">
          <li className="menuItem">
            <Link href="#">PC Parts</Link>
            <ul className="subMenu">
              <li><Link href="/pcpartpages/cpu">CPU</Link></li>
              <li><Link href="/pcpartpages/gpu">GPU</Link></li>
              <li><Link href="/pcpartpages/ram">RAM</Link></li>
              <li><Link href="/pcpartpages/motherboard">Motherboard</Link></li>
              <li><Link href="/pcpartpages/hdd">HDD</Link></li>
              <li><Link href="/pcpartpages/ssd">SSD</Link></li>
              <li><Link href="/pcpartpages/psu">Power Supply</Link></li>
              <li><Link href="/pcpartpages/cases">Computer Case</Link></li>
              <li><Link href="/pcpartpages/coolers">Cooler</Link></li>
            </ul>
          </li>
          <li><Link href="#">Consoles</Link></li>
          <li><Link href="#">Televisions (TV)</Link></li>
          <li><Link href="#">Accessories</Link></li>
        </ul>
      </div>

      <Link href="/custom-build">Custom Build</Link>
      <Link href="/computer">Computers</Link>
      <Link href="/laptops">Laptops</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}

export default Navigation;