import React from 'react';
import Button from './Button';
import { CATEGORIES } from '@/constant';
import Link from 'next/link';
import Image from 'next/image';

type CategoryItemProps = {
  title: string;
  icon: string;
};

const CategoryItem = ({ title, icon }: CategoryItemProps) => {
  const categoryLinks: { [key: string]: string } = {
    places: "https://www.tripadvisor.com/Attractions-g294008-Activities-Qatar.html",
    restaurant: "https://www.tripadvisor.com/Restaurants-g294008-Qatar.html",
    hotels: "https://www.tripadvisor.com/SmartDeals-g294009-Doha-Hotel-Deals.html",
    shopping: "https://www.tripadvisor.com/Attractions-g294008-Activities-c26-t143-Qatar.html"
  };

  return (
    <a href={categoryLinks[title.toLowerCase()]} target='_blank' className='bg-white flexCenter gap-2 px-4 py-2 cursor-pointer hover:translate-y-[2px]'>
      <Image src={icon} alt="icon" height={22} width={22} className='regular-28' />
      <span className='capitalize regular-16'>{title}</span>
    </a>
  );
};

const Hero = () => {
  return (
    <section className='relative bg-hero bg-cover bg-center bg-no-repeat h-[100vh] w-full z-10 pb-12'>
      <div className='max-container padding-container relative top-28 sm:top-1/3 z-10'>
        <h1 className='bold-48 sm:bold-64 text-white capitalize max-w-[44rem]'>Explore Qatar With Us</h1>
        <p className='regular-16 pt-8 text-white lg:w-3/4'>Welcome to <span className="text-3xl font-bold text-white">76 Adventure For Tousrim Services</span>, Your Gateway to Exceptional Experiences in Qatar!
        Discover the perfect blend of tradition and modern luxury as you explore the heart of the Gulf. From iconic skylines and cultural         treasures to hidden gems and desert adventures, let us guide you through the true spirit of Qatar. Experience personalized journeys         crafted with local expertise, start your Qatar adventure with us today!
        </p>
        <div className='mt-8'>
          <Button
            type='button'
            title='travel plan'
            icon='send-plane.svg'
            variant='btn_white_rounded'
            href="/#packages"
          />
        </div>
        <h4 className='text-white my-4 bold-22'>Explore the key points</h4>
        <ul className='flex flex-wrap gap-4'>
          {CATEGORIES.map((category) => (
            <CategoryItem
              key={category.title}
              title={category.title}
              icon={category.icon}
            />
          ))}
        </ul>
       </div>
    </section>
  );
};

export default Hero;
