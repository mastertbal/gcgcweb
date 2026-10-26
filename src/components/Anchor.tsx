import React from "react";

type AnchorProps = {
  text: string
};

const Anchor = ({ text }: AnchorProps) => {
  return <a href="#" className="anchor">{text}</a>;
};

export default Anchor;
