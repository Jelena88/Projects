import React from "react";
import { getAllTopics } from "../utilities/forum-service";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NewTopic from "./new-topic";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getAllTopics().then(data => {
      setTopics(data.topics);
    });
  }, []);

  console.log(topics);

  return (
    <div>
      <h2>Topics</h2>
      <div className="topics-container">
        {topics.map(x => {
          return (
            <div className="topics-divs" key={x.topic_id}>
              <li className="topics">
                <Link
                  to={{ pathname: `/topic/${x.topic_id}`, state: { topic: x } }}
                >
                  {x.title.toString()}
                </Link>
              </li>
            </div>
          );
        })}
      </div>
      <br></br>
      <div>
        <NewTopic />
      </div>
      <br></br>
      <Link to="/">
        <button>Back to Main Page</button>
      </Link>
    </div>
  );
};

export default Topics;
