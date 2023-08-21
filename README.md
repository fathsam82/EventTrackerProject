# Overview
I implemented 5 different controllers. I now have the ability to update my database via postman. I'm able to look up a task by id, create a task, update a task and delete a task. In addition to being able to do all crud operations on the front end, I also have data aggregated by task type within a dynamic bar graph.


# Description
The PetTaskReposity extends the jpaRepository that provides operations needed for crud. Spring Boot generates necessary queries. The service interface specifies methods for crud. The implementation class provides the logic for crud. Then, the controller handles the HTTP requests. It has all of the endpoints to help fulfill the crud operations. The XMLHttpRequest gets the tasks from my rest API endpoints and can display them dynamically or under certain conditions using eventlisteners and functions.


# Technologies Used
 - SpringToolSuite
 - Java
 - SQL workbench
 - Rest api
 - Javascript
 - HTML/CSS
 - XMLHttpRequest






# Lessons Learned
I learned about that the @Service annotation allows the implementation class to be injected by Spring. I furthered my understanding of writing the create, update and  methods for an implementation class. I gained more knowledge on how the controller class calls the methods from the service class. I furthered my understanding of setting a status for servlet responses and servlet requests. I learned a lot about using a @PathVariable to pass in an entities' id into a controller method. I've learned more about proper exception handling in javascript. I've learned a lot about how functions work and requesting data from the backend on the front end. One of my biggest struggles was dealing with serializing the data inside my eventlistener, because I didn't realize I had to part Task Type. I gained a lot more understanding with eventlisteners and the roll they play, "listens" for certain events to happen on the webpage. I learned a lot about performing http requests with angular and typescript on the 2nd iteration of this full stack project.

# REST Endpoints

| HTTP Verb | URI                      | Request Body | Response Body |
|-----------|--------------------------|--------------|---------------|
| GET       | `/api/pettasks`       | Representation of find all | List of pet tasks |
| GET       | `/api/pettasks/{scheduleId}` | Representation of finding by id | Single pet task |
| POST      | `/api/pettasks`          | Representation of a new schedule| Create a pet task |
| PUT       | `/api/pettasks/{scheduleId}` | Representation of a new version | Update a pet task |
| DELETE    | `/api/pettasks/{scheduleId}` | Representation of deleting a schedule | Delete a pet task | 






