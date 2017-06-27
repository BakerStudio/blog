Challenge: Blog API
===================
Unit 1 (Server-side programming with JavaScript), Lesson 4 (The Modern Classic)

Modifications
1. Unit and integration tests added.
2. CI tests performed with Travis CI on Heroku


**CRUD** operations

**Create**
HTTP POST, URL: localhost:8080/blog-posts/
with application/JSON body

    >{"title": "Animal Shelter",
    >"author": "Snoopy",
    >"content": "She has a sweet temper"}

**Read**
HTTP GET, URL: localhost:8080/blog-posts

**Update**
HTTP PUT, URL: localhost:8080/blog-posts/f58410d1-b99b-4d52-a2fa-239839969ffa
  with application/JSON body

    >{"title": "Animal Shelter",

    >"author": "Snoopy & The Gang",

    >"content": "She has a a lot of friends in her pack"}

**Delete**
HTTP DELETE, URL: localhost:8080/blog-posts/f58410d1-b99b-4d52-a2fa-239839969ffa
