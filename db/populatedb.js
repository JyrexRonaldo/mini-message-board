const { argv } = require("node:process")

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR ( 40 ),
  username VARCHAR ( 40 ),
  added TIMESTAMP
);

INSERT INTO messages (message, username, added) 
VALUES
  ('Hi there', 'Amanda',  'NOW'),
  ('Hello world', 'Charles',  'NOW');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: argv[2],
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

