# Typerio React ⌨️

![GitHub package.json version](https://img.shields.io/github/package-json/v/Truezeber/typerio-react?filename=source%2Fpackage.json)
![GitHub License](https://img.shields.io/github/license/Truezeber/typerio-react)
![Typescript badge](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF)

Typerio React is an React port of [Typerio](https://www.npmjs.com/package/typerio) written in TypeScript - a lightweight, simple, highly configurable and easy to use npm package that creates a character-by-character output effect (just like in a terminal!).

## Getting started

- [How to install📩](#how-to-install-)
- [How to use🤷‍♂️](#how-to-use-️)
  - [TypeScript🧩](#typescript-)
- [Example code👀](#example-code-)

### How to install 📩

```console
$ npm i typerio-react
```

### How to use 🤷‍♂️

At first, import the component.

```jsx
import { Typerio } from "typerio-react";
```

Then prepare an array with objects with your phrase.

```jsx
const arrayOfObjects = [
  {
    text: "Text to type", //This is the text you want to animate
    style: "class-of-the-element", //This is the css class of your element
    element: "p", //This is the HTML element of your text. You can use any element with text inisde
  },
];
```

All that remains is to declare configuration object.

```jsx
const configurationObject = {
  frames: ["-", "|"], //This is the typing animation. It must be 2 elements array
  speed: 100, //Speed of the typing. Higher -> slower
};
```

And now you can simply call the component.

```jsx
return (
  <>
    <Typerio input={[arrayOfObjects, configurationObject]} />
  </>
);
```

#### TypeScript 🧩

You can import types for phrase array and for configuration object.

```tsx
import { TyperioInput, TyperioConfig } from "typerio-react/dist/Typerio";
```

Now you can use it with declaring them.

```tsx
const arrayOfObjects: TyperioInput[] = [];
const configurationObject: TyperioConfig = {};
```

### Example code 👀

```jsx
import { Typerio } from "typerio-react";

const myComponent = () => {
  const arrayOfObjects = [
    {
      text: "Simple",
      style: "typerio",
      element: "h2",
    },
    {
      text: "text",
      style: "typerio",
      element: "h3",
    },
  ];

  const configurationObject = {
    frames: ["o", "O"],
    speed: 50,
  };

  return (
    <div>
      <h1>Typerio!</h1>
      <Typerio input={[arrayOfObjects, configurationObject]} />
    </div>
  );
};
```
