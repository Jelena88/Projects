const API = "https://coetus.herokuapp.com/api/forum";
const USERS = "/users";
const MESSAGE = "/message";
const TOPICS = "/topics";

function getAllUsers() {
  return fetch(`${API}${USERS}`).then(response => response.json());
}

function login(user) {
  let res = fetch(`${API}${USERS}`, {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    method: "POST",
    body: JSON.stringify(user)
  }).then(response => response.json());
  return res;
}

function register(user) {
  let res = fetch(`${API}${USERS}`, {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    method: "PUT",
    body: JSON.stringify(user)
  }).then(response => response.json());
  return res;
}

function getUsername(id) {
  return fetch(`${API}${USERS}/${id}`).then(response => response.json());
}

function getMsgOnTopic(id) {
  return fetch(`${API}${MESSAGE}/${id}`).then(response => response.json());
}

function getAllTopics() {
  return fetch(`${API}${TOPICS}`).then(response => response.json());
}

function getAllMessages() {
  return fetch(`${API}${MESSAGE}`).then(response => response.json());
}

function addTopic(user_id, title) {
  let res = fetch(`${API}${TOPICS}`, {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    method: "PUT",
    body: JSON.stringify({ title: title, user_id: user_id })
  }).then(response => response.json());
  return res;
}

function addMessage(username, topic_id, message) {
  let res = fetch(`${API}${MESSAGE}`, {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    method: "PUT",
    body: JSON.stringify({
      username: username,
      topic_id: topic_id,
      message: message
    })
  }).then(response => response.json());
  return res;
}

export {
  getMsgOnTopic,
  getAllUsers,
  getAllTopics,
  getAllMessages,
  getUsername,
  register,
  login,
  addTopic,
  addMessage
};
