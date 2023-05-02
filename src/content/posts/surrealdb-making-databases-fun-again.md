---
title: SurrealDB Making Databases Fun Again, An Overview
publishedDate: 2023-03-12
published: true
tags: [surreal-db, rust, sql, database, cloud]
image:
  {
    src: "https://images.pexels.com/photos/11592804/pexels-photo-11592804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "SurrelDB making databases fun again",
  }
excerpt: SurrealDB is the next-generation serverless database that simplifies your database and API stack. Say goodbye to scaling databases, servers, load balancers, and API endpoints. SurrealDB takes the hassle out of your stack, enabling you to grow and operate at scale with a highly-available, highly-scalable distributed platform.
---

[Surreal DB](https://surrealdb.com/)

Hey everyone! I'm extremely excited to share this amazing database with you all:
SurrealDB. I have had the pleasure of meeting the founders tobie and james and also
the amazing team behind this cutting-edge database technology, and I must say,
they are an incredibly welcoming and talented group of people.

So, what's the big deal about SurrealDB, you ask? Well, let me tell you.
SurrealDB is a next-generation database that combines the best of both worlds:
the flexibility of NoSQL and the power of relational databases.
It's fully ACID compliant, distributed, and supports real-time streaming analytics.

But that's just the tip of the iceberg. One of the most powerful features in
SurrealDB is its ability to relate records using graph connections and links.
Instead of pulling data from multiple tables and merging that data together,
SurrealDB allows you to traverse related records efficiently without needing to use JOINs.

Imagine you're building a social media platform, and you want to store user profiles,
posts, and the relationships between users (e.g., friends or followers).
With SurrealDB, you can create and relate these records effortlessly using graph
connections and links, without the need for complex JOINs.

For instance, let's create a user and a post:

```sql
CREATE user:lorre SET
    username = 'lorre',
    bio = 'Full-stack web developer debugging life.',
    joined_at = time::now()
;

CREATE post SET
    created_at = time::now(),
    user = user:lorre,
    content = 'Just visited the most amazing coffee shop!',
    likes = 0
;
```

Now, let's say Lorre and James become friends on your platform. You can simply relate
their user records using the RELATE statement:

```sql
RELATE user:lorre->friends_with->user:james;
```

Fetching all of Alice's friends is as easy as:

```sql
SELECT * FROM user:lorre->friends_with;
```

And just like that, you can navigate the relationships between users without the
need for complex JOINs or aggregations.

SurrealDB is also designed to be highly scalable, thanks to its support for
distributed deployments using TiKV. This means you can scale your social media
database to handle millions of users and billions of connections without breaking a sweat.

And that's just a sneak peek into the world of SurrealDB. There's so much more to
explore, from multi-tenancy data separation and custom functions to table events and
global parameters.

I highly recommend giving SurrealDB a try if you're looking for a flexible,
powerful, and scalable database solution for your social media platform or any other
project. I'll be diving deeper into SurrealDB in future blog posts, so stay tuned for
more insights and tips on how to make the most of this fantastic technology!

Until next time, happy coding!

[Learn more Surreal](https://surrealdb.com/docs)
