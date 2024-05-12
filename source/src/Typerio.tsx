"use client";
import React from "react";

type TyperioInput = {
  text: string;
  style: string;
  element: string;
};

type TyperioConfig = {
  //Todo
};

type TyperioProps = {
  input: TyperioInput[];
};

const Typerio: React.FC<TyperioProps> = ({ input }) => {
  const isOdd = (number: number) => number % 2 !== 0;
  return (
    <>
      {input.map((item, index) =>
        React.createElement(
          item.element,
          {
            key: index,
            className: item.style,
          },
          item.text
        )
      )}
    </>
  );
};

export default Typerio;
