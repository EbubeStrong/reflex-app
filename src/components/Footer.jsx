import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Footer() {

    const [activeFooterLink, setActiveFooterLink] = useState(null);

    const handleFooterClick = (link) => {
        setActiveFooterLink(link);
    };
  return (
    <footer className='hidden md:flex justify-between items-center px-16 py-6 bg-[#971B22] text-white text-xs font-thin'>
      <div>
        <p>&copy; 2024 Reflex. All rights reserved.</p>
      </div>
      <div>
        <ul className='flex'>
            <li className='flex pr-2'>
                <Link to='/terms'
                onClick={() => handleFooterClick("Terms")}
                className={`hover:font-medium ${
                  activeFooterLink === "Terms" ? "font-medium" : ""
                }`}>
                Terms & Conditions
                </Link>
                <p className='pl-2'>|</p>
            </li>
            <li className='flex pr-2'>
                <Link to='/privacypolicy'
                onClick={() => handleFooterClick("Privacypolicy")}
                className={`hover:font-medium ${
                  activeFooterLink === "Privacypolicy" ? "font-medium" : ""
                }`}>
                Privacy Policy
                </Link>
                <p className='pl-2'>|</p>
            </li>
            <li className='flex pr-2'>
                <Link to='/sitemap'
                onClick={() => handleFooterClick("Sitemap")}
                className={`hover:font-medium ${
                  activeFooterLink === "Sitemap" ? "font-medium" : ""
                }`}>
                Sitemap
                </Link>
                <p className='pl-2'>|</p>
            </li>
            <li className='flex'>
                <Link to='/disclaimer'
                onClick={() => handleFooterClick("Disclaimer")}
                className={`hover:font-medium ${
                  activeFooterLink === "Disclaimer" ? "font-medium" : ""
                }`}>
                Disclaimer
                </Link>
            </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
