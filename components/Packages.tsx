import {CITYTOUR, NORTHQATAR, COMBOTOUR , SAFARIDINNER  , DESERT } from '@/constant'
import Image from 'next/image'
import React from 'react'
import { RiTimeLine } from "react-icons/ri";

const Packages = () => {
  return (
    <section className="max-container padding-container pt-16 bg-slate-100">
      <h3 className="bold-52 text-center">Our Packages</h3>
      <p className="m-8 text-center">
        Set out on unforgettable adventures with our thoughtfully curated packages,
        tailored to immerse you in the essence of every destination. Encounter opulence,
        excitement, and cultural diversity as you traverse the globe with us.
      </p>

      {/* Desert Packages */}
      <h3 className="bold-40 text-gray-500">Desert Safari Activities</h3>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-12">
        {DESERT.map((card) => (
          <PackageItem key={card.title} {...card} />
        ))}
      </div>

      {/* city tour Packages */}
      <h3 className="bold-40 text-gray-500">City Tours Packages</h3>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-12">
        {CITYTOUR.map((card) => (
          <PackageItem key={card.title} {...card} />
        ))}
      </div>

      {/* NORTH QATAR Packages */}
      <h3 className="bold-40 text-gray-500">North of Qatar Tour Packages</h3>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-12">
        {NORTHQATAR.map((card) => (
          <PackageItem key={card.title} {...card} />
        ))}
      </div>

      {/* COMBO TOUR Packages */}
      <h3 className="bold-40 text-gray-500">COMBO TOUR Packages</h3>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-12">
        {COMBOTOUR.map((card) => (
          <PackageItem key={card.title} {...card} />
        ))}
      </div>

      {/* SAFARI DINNER Packages */}
      <h3 className="bold-40 text-gray-500">SAFARI DINNER Package</h3>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-12">
        {SAFARIDINNER.map((card) => (
          <PackageItem key={card.title} {...card} />
        ))}
      </div>
    </section>
  )
}

type PackageItemProps = {
  URL: string
  title: string
  price: string
  des: string
  duration: string
}

const PackageItem = ({ title, URL, price, des, duration }: PackageItemProps) => {
  const whatsappMessage = `Hello! I would like to book the ${title} package for ${duration}. Please provide more details.`;
  const whatsappUrl = `https://wa.me/+97450089016?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="flex flex-col h-[520px] overflow-hidden rounded-xl border border-slate-200 bg-white">

      {/* IMAGE – fixed height */}
      <div className="relative h-[220px] overflow-hidden">
        <Image
          src={URL}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 p-4">

        {/* TITLE */}
        <h4 className="medium-18 capitalize min-h-[48px]">{title}</h4>

        {/* FULL DESCRIPTION */}
        <p className="text-gray-500 regular-14 my-3">
          {des}
        </p>

        {/* DURATION + PRICE */}
        <div className="flex justify-between items-center text-gray-500 mt-auto">
          <div className="flex items-center gap-2">
            <RiTimeLine />
            <span className="medium-14">{duration}</span>
          </div>
          <span className="medium-14 font-bold">{price}</span>
        </div>

        {/* BOOK NOW BUTTON BELOW */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 medium-14 w-full text-center py-2 rounded-md bg-black text-white hover:bg-gray-800 transition-colors"
        >
          Book now
        </a>

      </div>
    </div>
  );
};


export default Packages
