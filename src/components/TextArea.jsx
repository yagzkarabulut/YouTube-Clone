import { useState } from "react";

const TextArea = ({ text }) => {
  const [expand, setExpand] = useState(false);
  let shortText = text;

  //   bu alan kapalıysa be yazı 300 harften uzunsa
  // yazıyı kes ve sonuna ...dahafazla yazsın

  if (!expand && text.length > 300) {
    shortText = text.slice(0, 300) + " " + "...daha fazla";
  }
  return (
    <div onClick={() => setExpand(!expand)}>
      {shortText.split("\n").map((line) => (
        <span>
          {line} <br />
        </span>
      ))}
    </div>
  );
};

export default TextArea;
