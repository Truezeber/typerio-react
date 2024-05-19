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
  const [render, setRender, renderRef] = useState<number>(0);
  const [timer, setTimer, timerRef] = useState<number>(0);

  const isOdd = (number: number) => number % 2 !== 0;

  const addElement = (inputObj: TyperioInput) => {
    const newElements = [...elements];
    newElements.push(inputObj);
    setElements(newElements);
  };

  const editElement = (objIndex: number, char: string) => {
    /*const selectedElement = { ...elementsRef.current[index] };
    const newElements = [...elementsRef.current];

    selectedElement.text = `${selectedElement.text}${char}`;

    newElements[index] = selectedElement;
    setElements(newElements);*/
    console.log(objIndex);
    const selectedElement = { ...elementsRef.current[objIndex] };
    console.log(char);
    console.log(selectedElement);
    selectedElement.text = selectedElement.text + char;
    //console.log(newText);

    const newElements = [...elementsRef.current];
    console.log(newElements);
    newElements[objIndex] = selectedElement;
    console.log(newElements);
    setElements(newElements);
  };

  useEffect(() => {
    if (input.length !== 0) {
      const object = input.shift();
      if (object) {
        const charArr = object.text.split("");
        object.text = "";
        addElement(object);
        charArr.forEach((char, i) => {
          const currentRender = renderRef.current;
          setTimeout(() => {
            editElement(currentRender, char);
          }, timerRef.current);
          setTimer(timerRef.current + 500);
        });
        setRender(renderRef.current + 1);
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
