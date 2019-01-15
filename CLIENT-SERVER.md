## **CLIENT-SERVER MODEL**
---
* Client–server model is a distributed application structure that partitions tasks or workloads between the providers of a resource or service, called servers, and service requesters, called clients.
## **ROLE OF CLIENT AND SERVER**
---
* The Client-server characteristic describes the relationship of cooperating programs in an application.
* The server component provides a function or service to one or many clients, which initiate requests for such services.
* Servers are classified by the services they provide. 
* For instance, a *web server* serves web pages and a *file server* serves computer files. 

## **HOW SERVER RESPOND TO THE CLIENT REQUEST**
---
* The client establishes a TCP connection (or the appropriate connection if the transport layer is not TCP).
* The client sends its request, and waits for the answer.
* The server processes the request, sending back its answer, providing a status code and appropriate data.

## **STATELESS PROTOCOL**
---
* **Stateless protocol** does not require the server to retain session information or status about each communications partner for the duration of multiple requests.
* **HTTP** is a stateless protocol, which means that the connection between the browser and the server is lost once the transaction ends.

## **REST API**
---
* A **REST API** is an application program interface (API) that uses **HTTP** requests to **GET**, **PUT**, **POST** and **DELETE** data.
* A **REST API** breaks down a transaction to create a series of *small modules*.
* Each module addresses a particular underlying part of the transaction.
* This modularity provides developers with a lot of flexibility, but it can be challenging for developers to design from scratch.

## **MICROSERVICES**
---
* Microservices, aka Microservice Architecture, is an architectural style that structures an application as a collection of small autonomous services.
* Features:-
  - Highly maintainable and testable.
  - Loosely coupled.
  - Independently deployable.
  - Organized around business capabilities.