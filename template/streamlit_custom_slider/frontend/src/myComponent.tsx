import React, { useEffect, useState } from "react";
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib";
import { Slider } from "baseui/slider";
import './style.css';





const CustomSlider = (props: ComponentProps) => {

  /**
   * Destructuring JSON objects is a good habit.
   * This will look for label, minValue and maxValue keys
   * to store them in separate variables.
   */
  const { label, minValue, maxValue, label2, news } = props.args;

  const [value, setValue] = useState([10]);

  useEffect(() => Streamlit.setFrameHeight());


  

  // Add a label and pass min/max variables to the baseui Slider
  return (
    <>
      <h1>Name - {label}</h1>
      <hr></hr>
      <h4>Number of news to be presented - {maxValue}</h4>
      <hr></hr>
      <br></br>

      <b>🌐 News - {label2}</b>

      <br></br><br></br>


      {news.articles.slice(0, maxValue).map((article: { title: string, description: string }) => (
        <div key={article.title} className="card">
          <div className="card-body">
            <h4 className="card-title">{article.title}</h4>
            <p className="card-text">{article.description}</p>
          </div>
        </div>
      ))}




    </>
  );
};

export default withStreamlitConnection(CustomSlider);