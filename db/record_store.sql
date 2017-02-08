DROP TABLE albums;
DROP TABLE artists;


CREATE TABLE artists (
  id SERIAL4 primary key,
  name VARCHAR(255) not null
);

CREATE TABLE albums (
  id SERIAL4 primary key,
  title VARCHAR(255) not null,
  artist_id SERIAL4 references artists(id) ON DELETE CASCADE
);