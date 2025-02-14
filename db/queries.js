const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function addNewMessage(username, message) {
  await pool.query(
    "INSERT INTO messages (message, username, added) VALUES ($1, $2,  'NOW');",
    [ message,username]
  );
}

module.exports = {
  getAllMessages,
  addNewMessage
};
