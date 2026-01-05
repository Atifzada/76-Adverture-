"use client";
import { FEATURE } from "@/constant";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Feature = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="text-2xl bg-white p-3 inline-block rounded-full shadow-md absolute top-1/2 -right-3 z-10 hover:bg-slate-100"
      >
        <RiArrowRightSLine />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="text-2xl bg-white p-3 inline-block rounded-full shadow-md absolute top-1/2 -left-3 z-10 hover:bg-slate-100"
      >
        <RiArrowLeftSLine />
      </div>
    );
  };

  var settings = {
    arrows: true,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="max-container padding-container bg-slate-100 py-24">
      <div className="m-auto w-[90%]">
        <h3 className="bold-52 capitalize pb-4 text-center">Featured Destinations</h3>
        <p className="mt-4 text-center">
          Discover the captivating charm of Qatar’s iconic landmarks and hidden treasures. From the
          breathtaking skyline of Doha and the cultural richness of Souq Waqif to the serene beauty of
          the Inland Sea, our curated selection of featured destinations offers an unforgettable
          journey through the heart of this vibrant country.
        </p>
        <div className="pt-16">
          <Slider {...settings}>
            {FEATURE.map((feature, index) => (
              <FeatureItem
                key={index}
                title={feature.title}
                URL={feature.URL}
                des={feature.des}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

type FeatureItemProps = {
  URL: string;
  title: string;
  des: string;
};

const FeatureItem = ({ title, URL, des }: FeatureItemProps) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="mx-3 border border-slate-200 group overflow-hidden rounded-md min-h-[450px] flex flex-col bg-white">
      {/* Image */}
      <div className="relative w-full h-[250px] overflow-hidden">
        <Image
          src={URL}
          alt={title}
          fill
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2"
        />
      </div>

      {/* Text Area */}
      <div className="px-5 py-4 flex-1 flex flex-col justify-between">
        <div className="capitalize text-[17px] font-[500] mb-2">{title}</div>
        <div className="text-gray-500 text-[15px]">
          {showFullDescription ? des : `${des.slice(0, 90)}...`}
          <button
            className="text-blue-500 underline ml-1 cursor-pointer"
            onClick={toggleDescription}
          >
            {showFullDescription ? "See less" : "See more"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
