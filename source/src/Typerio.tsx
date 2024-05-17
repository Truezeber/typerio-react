"use client";
import React from "react";

export type TyperioInput = {
  text: string;
  style: string;
  element: keyof JSX.IntrinsicElements;
};

export type TyperioConfig = {
  //Todo
};

export type TyperioProps = {
  input: TyperioInput[];
};

const Typerio: React.FC<TyperioProps> = ({ input }) => {
  const isOdd = (number: number) => number % 2 !== 0;
  return (
    <>
      {input.map((item, index) => (
        <item.element key={index}>{item.text}</item.element>
      ))}
    </>
  );
};

export default Typerio;
