Challenge: Blog API
===================
Unit 1 (Server-side programming with JavaScript), Lesson 4 (The Modern Classic)


**CRUD** operations

**Create**
HTTP POST localhost:8080/blog-posts/ with application/JSON body

    >{"title": "Animal Shelter",
    >"author": "Snoopy",
    >"content": "She has a sweet temper"}

**Read**
HTTP GET localhost:8080/blog-posts

**Update**
HTTP PUT localhost:8080/blog-posts/f58410d1-b99b-4d52-a2fa-239839969ffa
  with application/JSON body

  >{"title": "Animal Shelter",
  >"author": "Snoopy & The Gang",
  >"content": "She has a a lot of friends in her pack"}

**Delete**
HTTP DELETE localhost:8080/blog-posts/f58410d1-b99b-4d52-a2fa-239839969ffa
