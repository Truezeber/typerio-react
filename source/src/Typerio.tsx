"use client";
import React, { useEffect, useState } from "react";

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
  const [elements, setElements] = useState<TyperioInput[]>([]);

  const isOdd = (number: number) => number % 2 !== 0;

  const addElement = (inputObj: TyperioInput) => {
    const newElements = [...elements];
    newElements.push(inputObj);
    setElements(newElements);
  };

  const editElement = (index: number, char: string) => {
    const selectedElement = { ...elements[index] };
    const newElements = [...elements];

    selectedElement.text = `${selectedElement.text}${char}`;

    newElements[index] = selectedElement;
    setElements(newElements);
  };

  useEffect(() => {}, []);

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
