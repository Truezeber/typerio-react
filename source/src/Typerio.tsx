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
  const [renderingObj, setRenderingObj, renderingObjRef] = useState<number>(0);
  const [timer, setTimer, timerRef] = useState<number>(0);
  const [currentFrame, setFrame, frameRef] = useState<string>("");
  const [showFrame, setShowFrame, showFrameRef] = useState<boolean>(true);

  const isOdd = (number: number) => number % 2 !== 0;

  const addElement = (inputObj: TyperioInput) => {
    const newElements = [...elements];
    newElements.push(inputObj);
    setElements(newElements);
  };

  const editElement = (objIndex: number, char: string, frame: string) => {
    const selectedElement = { ...elementsRef.current[objIndex] };
    const newElements = [...elementsRef.current];

    selectedElement.text = selectedElement.text + char;
    newElements[objIndex] = selectedElement;

    setElements(newElements);
    setFrame(frame);
    setShowFrame(true);

    setTimeout(() => {
      setShowFrame(false);
    }, input[1].speed + 10);
  };

  const renderElement = (obj: TyperioInput) => {
    const charArr = obj.text.split("");
    obj.text = "";
    addElement(obj);

    charArr.forEach((char: string, i: any) => {
      const currentRender = renderRef.current;
      let renderFrame: string;
      if (isOdd(i)) {
        renderFrame = input[1].frames[0];
      } else {
        renderFrame = input[1].frames[1];
      }
      setTimeout(() => {
        editElement(currentRender, char, renderFrame);
        setRenderingObj(currentRender);
      }, timerRef.current);
      setTimer(timerRef.current + input[1].speed);
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
          {index === renderingObjRef.current && showFrameRef.current && (
            <span>{frameRef.current}</span>
          )}
        </item.element>
      ))}
    </>
  );
};

export default Typerio;
