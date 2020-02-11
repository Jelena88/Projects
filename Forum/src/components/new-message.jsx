import React from "react";
import { useState } from "react";
import { get } from "../utilities/state";
import { addMessage } from "../utilities/forum-service";

const NewMessage = ({ topic_id }) => {
  const [message, setMessage] = useState([]);

  function handleClick() {
    addMessage(get().username, topic_id, message).then(data => {
      console.log(data);
    });
  }

  return (
    <form>
      <textarea
        type="text"
        placeholder="Enter new message"
        onInput={e => {
          setMessage(e.target.value);
        }}
      ></textarea> <br/>
      <input
        style={{ marginTop: "20px" }}
        type="submit"
        value="Send message"
        onClick={e => {
          e.preventDefault();
          handleClick();
        }}
      ></input>
    </form>
  );
};

export default NewMessage;
