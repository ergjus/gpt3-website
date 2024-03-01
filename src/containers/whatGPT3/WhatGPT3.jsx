import React from "react";
import "./whatgpt3.css";
import {Feature} from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT3?"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste provident impedit architecto nesciunt magni doloribus assumenda et nobis aspernatur iure, beatae fuga aliquid, blanditiis, aut vero vel hic sit! Possimus?"></Feature>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste provident impedit architecto nesciunt magni doloribus assumenda et nobis aspernatur iure, beatae fuga aliquid, blanditiis, aut vero vel hic sit! Possimus?"></Feature>
        <Feature
          title="Konowledgebase"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste provident impedit architecto nesciunt magni doloribus assumenda et nobis aspernatur iure, beatae fuga aliquid, blanditiis, aut vero vel hic sit! Possimus?"></Feature>
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste provident impedit architecto nesciunt magni doloribus assumenda et nobis aspernatur iure, beatae fuga aliquid, blanditiis, aut vero vel hic sit! Possimus?"></Feature>
      </div>
    </div>
  );
};

export default WhatGPT3;
