# Overview
I implemented 5 different controllers. I now have the ability to update my database via postman. I'm able to look up a task by id, create a task, update a task and delete a task. 


# Description
The PetTaskReposity extends the jpaRepository that provides operations needed for crud. Spring Boot generates necessary queries. The service interface specifies methods for crud. The implementation class provides the logic for crud. Then, the controller handles the HTTP requests. It has all of the endpoints to help fulfill the crud operations. 


# Technologies Used
 - SpringToolSuite
 - Java
 - SQL workbench
 - Rest api





# Lessons Learned
I learned about that the @Service annotation allows the implementation class to be injected by Spring. I furthered my understanding of writing the create, update and  methods for an implementation class. I gained more knowledge on how the controller class calls the methods from the service class. I furthered my understanding of setting a status for servlet responses and servlet requests. I learned a lot about using a @PathVariable to pass in an entities' id into a controller method. 
