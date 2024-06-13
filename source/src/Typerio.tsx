"use client";
import React, { useEffect } from "react";
import useState from "react-usestateref";

export type TyperioInput = {
  text: string;
  style: string;
  element: keyof JSX.IntrinsicElements;
};

export type TyperioConfig = {
  frames: [string, string];
  speed: number;
};

export type TyperioProps = {
  input: [TyperioInput[], TyperioConfig];
};

const Typerio: React.FC<TyperioProps> = ({ input }) => {
  const [elements, setElements, elementsRef] = useState<TyperioInput[]>([]);
  const [render, setRender, renderRef] = useState<number>(0);
  const [timer, setTimer, timerRef] = useState<number>(0);

  const isOdd = (number: number) => number % 2 !== 0;

  const addElement = (inputObj: TyperioInput) => {
    const newElements = [...elements];
    newElements.push(inputObj);
    setElements(newElements);
  };

  const editElement = (objIndex: number, char: string) => {
    const selectedElement = { ...elementsRef.current[objIndex] };
    const newElements = [...elementsRef.current];

    selectedElement.text = selectedElement.text + char;
    newElements[objIndex] = selectedElement;

    setElements(newElements);
  };

  const renderElement = (obj: TyperioInput) => {
    const charArr = obj.text.split("");
    obj.text = "";
    addElement(obj);

    charArr.forEach((char: string, i: any) => {
      const currentRender = renderRef.current;
      setTimeout(() => {
        editElement(currentRender, char);
      }, timerRef.current);
      setTimer(timerRef.current + 500);
    });

    setRender(renderRef.current + 1);
  };

  useEffect(() => {
    if (input[0].length !== 0) {
      const object = input[0].shift();
      if (object) {
        renderElement(object);
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
