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
  let elements: TyperioInput[] = [];

  const isOdd = (number: number) => number % 2 !== 0;

  const addElement = (inputObj: TyperioInput) => {
    elements.push(inputObj);
  };

  return (
    <>
      {elements.map((item, index) => (
        <item.element key={index} className={item.style}>
          {item.text}
        </item.element>
      ))}
    </>
  );
};

export default Typerio;
