DROP TABLE albums;
DROP TABLE artists;

CREATE TABLE artists (
  id SERIAL8 primary key,
  name VARCHAR(255) not null
);

CREATE TABLE albums (
  id SERIAL8 primary key,
  title VARCHAR(255) NOT NULL,
  genre VARCHAR(255) NOT NULL,
  artist_id INT4 references artists(id) NOT NULL,
  quantity INT4 NOT NULL
);