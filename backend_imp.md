# What is Caching? How can you save money with Caching?
1. In computing, a cache is a high-speed data storage layer which stores a subset of data, typically transient in nature, so that future requests for that data are served up faster than is possible by accessing the data’s primary storage location. Caching allows you to efficiently reuse previously retrieved or computed data.

2. Benefits of Caching 
Improve Application Performance
Reduce the Load on the Backend
Predictable Performance
Increase Read Throughput (IOPS)
Reduce Database Cost
A single cache instance can provide hundreds of thousands of IOPS (Input/output operations per second), potentially replacing a number of database instances, thus driving the total cost down. 

# What is load balancing?
 Load balancing is a core networking solution used to distribute traffic across multiple servers in a server farm. Load balancers improve application availability and responsiveness and prevent server overload.

# What is CAP Theorem in DBMS?
The three letters in CAP refer to three desirable properties of distributed systems with replicated data: 
1. consistency , availability , partition tolerance
Consistency ( C ): All nodes see the same data at the same time. This means users can read or write from/to any node in the system and receive the same data. It is equivalent to having a single up-to-date copy of the data.

Availability (A): Availability means every request received by a non-failing node in the system must result in a response. Even when severe network failures occur, every request must terminate. In simple terms, availability refers to a system’s ability to remain accessible even if one or more nodes in the system go down.

A partition is a communication break (or a network failure) between any two nodes in the system, i.e., both nodes are up but cannot communicate with each other.

# What is PACELC Theorem?
P=>Partition, A=> Availability, C=> Consistency E=> Else L=> Letency C=> consistency

CAP and PACELC theorems help distributed systems choose a desirable balance between various distributed characteristics like Consistency, Availability, Partition Tolerance, and Latency. 


