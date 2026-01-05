"use client";
import Image from 'next/image'
import React from 'react'
import { ABOUT, VEHICLES } from "@/constant"; // Updated constants for Qatar

const About = () => {
  return (
    <section className='max-container padding-container py-24'>
      <div className='flex flex-col gap-8 lg:flex-row pb-24'>
        {/* LEFT */}
        <div className='flex flex-1 flex-col items-start justify-center lg:order-1'>
          <h1 className='bold-52 capitalize pb-4'>Discover the Wonders of Qatar</h1>
          <p className='text-gray-500'>
            76 Adventure For Tourism Services Company offers exclusive travel experiences in Qatar, providing exceptional services to individuals, families, and groups.
          </p>
          <br />
          <p className='text-gray-500'>
            Our services help travelers explore Qatar’s unique destinations, from cultural landmarks and desert adventures to luxurious city experiences.
          </p>
          <div className='flex flex-wrap mt-8'>
            {ABOUT.map((about) =>
              <AboutItem
                key={about.title}
                title={about.title}
                icon={about.icon}
              />
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className='flex flex-1 gap-4 lg:gap-8 lg:order-2'>
          <div>
            <Image
              src='/qatar3.jfif'
              alt='Qatar sightseeing'
              height={444}
              width={333}
              className='w-auto rounded-lg border border-gray-100 mb-12'
            />
          </div>
          <div>
            <Image
              src='/qatar2.jfif'
              alt='Qatar attractions'
              height={444}
              width={333}
              className='w-auto rounded-lg border border-gray-100 mb-12'
            />
          </div>
        </div>
      </div>

      {/* Fleet Section */}
      <div className='flex flex-col gap-8 lg:flex-row'>
        {/* LEFT */}
        <div className='flex flex-1 flex-col items-start justify-center lg:order-2'>
          <h1 className='bold-52 capitalize pb-4'>Our Premium Fleet</h1>
          <p className='text-gray-500'>
            Travel Qatar in comfort with our modern 15-seater high-roof vehicles and premium SUVs.
          </p>
          <br />
          <p className='text-gray-500'>
            With over 15 luxurious vehicles, including 7-seater SUVs and Land Cruisers, our fleet ensures every journey is stylish, safe, and memorable.
          </p>
          <br />
          <p className='text-gray-500'>
            Explore Qatar’s cities, deserts, and coastal destinations with ease and convenience in our well-maintained fleet.
          </p>
          <div className='flex flex-wrap mt-8'>
            {VEHICLES.map((vehicle) =>
              <VehicleItem
                key={vehicle.title}
                title={vehicle.title}
                icon={vehicle.icon}
              />
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className='flex flex-1 gap-4 lg:gap-8 lg:order-1'>
          <div>
            <Image
              src='/lc1.jfif'
              alt='Qatar SUV'
              height={444}
              width={333}
              className='w-auto rounded-lg border border-gray-100 mb-12'
            />
          </div>
          <div>
            <Image
              src='/lc2.jpg'
              alt='Qatar SUV'
              height={444}
              width={333}
              className='w-auto rounded-lg border border-gray-100 mb-12'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

type AboutItemProps = {
  title: string,
  icon: string,
}

const AboutItem = ({ title, icon }: AboutItemProps) => {
  return (
    <div className='w-1/2 flex gap-2 mb-4'>
      <Image src={icon} alt='icon' height={20} width={20} />
      <p className='regular-14'>{title}</p>
    </div>
  )
}

type VehicleItemProps = {
  title: string,
  icon: string,
}

const VehicleItem = ({ title, icon }: VehicleItemProps) => {
  return (
    <div className='w-1/2 flex gap-2 mb-4'>
      <Image src={icon} alt='icon' height={20} width={20} />
      <p className='regular-14'>{title}</p>
    </div>
  )
}

export default About
