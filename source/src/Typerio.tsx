"use client";
import React, { useEffect } from "react";
import useState from "react-usestateref";

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
  const [elements, setElements, elementsRef] = useState<TyperioInput[]>([]);
  const [render, setRender] = useState<string>("");

  const isOdd = (number: number) => number % 2 !== 0;

  const addElement = (inputObj: TyperioInput) => {
    const newElements = [...elements];
    newElements.push(inputObj);
    setElements(newElements);
  };

  const editElement = async (index: number, char: string) => {
    const selectedElement = { ...elements[index] };
    const newElements = [...elements];

    selectedElement.text = `${selectedElement.text}${char}`;

    newElements[index] = selectedElement;
    setElements(newElements);
    return true;
  };

  useEffect(() => {
    if (input.length !== 0) {
      const object = input.shift();
      if (object) {
        addElement(object);
      }
    }
  }, [elements]);

  return (
    <>
      {elementsRef.current.map((item, index) => (
        <item.element key={index} className={item.style}>
          {item.text}
        </item.element>
      ))}
    </>
  );
};

export default Typerio;
