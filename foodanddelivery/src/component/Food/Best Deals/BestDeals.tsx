"use client";

import { Image } from "../../../assets";
import React from "react";
import { CardBody, CardItem, CardContainer } from "../../ui/3d-card";

const BestDeals = () => {
  return (
    <section className="h-[850px] mb-[5%]">
      {Image.map((item, index) => (
        <CardContainer className="flex flex-col inter-var ">
          <CardItem
            key={index}
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="w-fit mt-4 ">
            <CardBody className="flex flex-col relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem]  border-none">
              <img
                src={item.image}
                height="1000"
                width="1000"
                className=" h-100 w-fit object-cover group-hover/card:shadow-xl"
                alt={item.title}
              />
            </CardBody>
          </CardItem>
        </CardContainer>
      ))}
    </section>
  );
};

export default BestDeals;
