import React from "react";

const MyLib = (props) => {
  console.log("from mylib", props.title);
  return (
    <div>
      <h2>title: {props.title} </h2>
      <h2>author: {props.author_name}</h2>
      <h2>publish: {props.publish_year}</h2>
      <h2>edition: {props.edition_count}</h2>
    </div>
  );
};

export default MyLib;
