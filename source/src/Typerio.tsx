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
  const { text, style, element } = input[0];

  const Element = React.createElement(element, { className: style }, text);

  return Element;
};

export default Typerio;
