import Image from 'next/image';
import React from 'react';

import { footerLinks } from '@/constants';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-500'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image src="/logo.svg" width={118} height={18} className='object-contain' alt='logo' />
          <p className='text-base text-gray-700'>
            Carhub 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className='footer__links'>
            {footerLinks.map((item)=> (
              <div key={item.title} className='footer__link'>
                <h3 className='font-bold'>{item.title}</h3>
                <div className='flex flex-col gap-5'>
                  {item.links.map((link) => (
                    <Link href={link.url} key={link.title} className='text-gray-500' >{link.title}</Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
        </div>

        <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
          <p>@2023 CarHub. All rights reserved</p>
          <div className='footer__copyrights-link'>
            <Link className='text-gray-500' href='/'>Privacy and Policy</Link>
            <Link className='text-gray-500' href='/'>Terms and Conditions</Link>
          </div>
        </div>
      
    </footer>
  )
}

export default Footer