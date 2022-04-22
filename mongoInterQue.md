1. What is SQL Databases? What are some companies who uses Mongo, what type of applications are these?

# SQL for structured query Language. Sql is a standred language for storing, manipulating and retriveing data in database. // SQL is relational base database it's fallow table based..

2. What is NoSQL Databases? What are some companies who uses Mongo, what type of applications are these?

# NOSQL database are non-tabular database and store data diffrenetly than relational tables. 

# => NOSQL database much faster than with a SQL database.

# => new application paradigms can be more easily supported.  

3. What is the difference between SQL and NoSQL databases?
# => SQL is table based data format. it  is easy to write but complex to it manage. it's also called RDBMS(Relational Databases (RDBMS)). these database have fixed or static or predefined schema. These database are best suited for complex queries. vertically scalabe.

4. What are some features of MongoDB?
# 1. _Document_ Model has designed develper productivity and flexibility in mind. 
# 2. _Sharding_ is the process of splitting larger datasets
# 3._ Authentication_ is a critical security feature in mongo db.
# 4 _Time_ _series_ data is most commonly generated be a device.

5. What are aggregate queries?
# an aggregate query is a method of deriving group and subgroup data by analysis of a set of individual data entries.

6. What are pipelines in aggregation?
# An aggregation pipeline consists of one or more stages that process documents.

7. How can you group by a particular value in MongoDB?
# in mongodb we will try to find key name after we call that key according key what ever condition given that  will be executes particular value.......

8. How can you paginate on MongoDB? 
# we can paginate acoording to id take a condition how much page we have need to show first page like this..

9. How can you sort in MongoDB?
#  db.collectionName.find().sort({key:1});
# sorting in assending order.....
# db.collectionName.find().sort({key:-1});

10. What is indexing in MongoDB? Why do we need to use indexing? What are pros and cons for indexing?
# The biggest advantage of indexing is that it speeds up your find, update and delete queries.

11. Write the query for indexing a field in MongoDB?
# db.Collection.name.createIndex(

    keys : {Field_name:1/-1},

    options : <document>,

    commitQuorum : <string or integer>
)
12. What is the improvement in performance in MongoDB?
NOSQL document database for mordern developers working on high-performance applications. mongodb is notable for horizontal scaling and load balancing.

13. What is the data structure used for indexing?
Binary tree are the most commonly used data structures for indexes...

14. Are values sorted in indexes?
it's default.

15. What are Replica Sets in MongoDB?
A group of mongod processes that maintain the same data set..

16. Explain the structure of ObjectID in MongoDB.
An objectID is a 12-byte Field of BSON type..

17. By default, which index is created by MongoDB for every collection?
MongoDB creates a unique index on the _id field during the creation of a collection. The _id index prevents clients from inserting two documents with the same value for the _id field.

18. In which format MongoDB represents document structure?
These documents are stored in MongoDB in JSON (JavaScript Object Notation) format.

19. What is the limitation of a document in MongoDB?
# 1. MongoDB uses high memory for data storage.
# 2. There is a limit for document size of 16 mb.
# 3. There is no transaction support in MongoDB.

20. What is the difference between MongoDB and Redis database?
### Mongodb is document-oriented database. 
# redis is an in memory persistent data structure sotre.
# redis is single threaded which means it run on a single core..
# redis is slightly better than mongodb..

21. How can you add references between multiple collections?
# refernce from one document to another using the valueof the first documents _id , collection name, and optionally database name it's.

22. What are lookup in aggregation for MongoDB?
used to join a document from one collection to a document of another collection of the same database based on some queries.

23. What are graph lookups?
Perform a recursive search on a collection with options for restricting the search by recursion depth and query filter.......

24. How can you do one to many relation in MongoDB?
let's take example of video here we can take many relation 1st we can watch video 2nd share 3rd like ,dislike 4th comment on that video.....

25. How can you do many to many relation in MongoDB?
let's take of exmaple of organaziation...
there have many department in the departemnt have diffrent diffrent roles. for diffrent diffrent roles have diffrent-2 person have been hired........

