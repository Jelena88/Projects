import React from "react";
import { useState } from "react";
import { addTopic } from "../utilities/forum-service";
import { get } from "../utilities/state";

const NewTopic = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  console.log(message);

  console.log(title);
  console.log(get());

  function handleClick() {
    addTopic(get().user_id, title).then(data => {
      console.log(data);
      if (data.success) {
        console.log(data);
      }
    });
  }

  return (
    
    <div className="new-input">
<h2>Make New Topic</h2>
      <input
        type="text"
        placeholder="Enter new topic title"
        onInput={e => {
          setTitle(e.target.value);
        }}
      >

     </input>

      <textarea
        type="text"
        placeholder="Enter new message"
        onInput={e => {
          setMessage(e.target.value);
        }}
      ></textarea>
      <br></br>
      <button
    
        type="submit"
        onClick={e => {
          e.preventDefault();
          handleClick();
        }}
      >
        Send
      </button>
    </div>
  );
};

export default NewTopic;
