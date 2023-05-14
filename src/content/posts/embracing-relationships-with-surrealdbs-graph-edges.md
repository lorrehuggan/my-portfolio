---
title: Embracing Relationships with SurrealDB's Graph Edges
publishedDate: 2023-03-12
published: true
tags: [surreal-db, rust, sql, database, cloud]
image:
  {
    src: "https://images.pexels.com/photos/11592804/pexels-photo-11592804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "SurrelDB making databases fun again",
  }
excerpt: SurrealDB, a truly innovative database model, dances gracefully at the crossroads of SQL and NoSQL databases, embracing the strengths of both worlds.
---

[Surreal DB](https://surrealdb.com/)

Today, I want to share with you a feature that I find both beautiful and powerful in its simplicity: graph edges in SurrealDB. This is not just about lines connecting dots on a graph - it's about relationships, intricacies, and the potential to redefine how we look at data.

SurrealDB, a truly innovative database model, dances gracefully at the crossroads of SQL and NoSQL databases, embracing the strengths of both worlds. But its real charm lies in its ability to see beyond individual data points and rows. Instead, it paints a vivid picture of relationships, connections, and narratives within your data. This is where the concept of Graph Edges shines.

Imagine Graph Edges as the invisible threads that bind different elements of a story. In a database, these elements could be users, posts, comments, reactions - all related, yet stored independently. However, with SurrealDB, you can weave these elements together in a meaningful, intuitive way:

```sql
RELATE user:lorre->posted->post:post1 CONTENT {
    text: 'Surreal DB to the moon',
    created_at: time::now()
};
```

With just one line, we've created a post for Lorre and linked it directly to him. It's as if we've drawn a line between Lorre and his post in our database. It's expressive, it's elegant, and it's genuinely intuitive.

What's more fascinating is how we can use these relationships. A single query can let you navigate these relationships, these graph edges, to pull related data. Want to fetch all posts by Jane? It's as simple as:

```sql
SELECT * FROM user:jane->posted;
};
```

See what we did there? It's as if we're saying, "Fetch all posts that Lorre has posted." The beauty of SurrealDB's graph edges is that it lets us talk to our database in a language that is closer to how we think.

It's also worth mentioning that graph edges aren't just about creating relationships. They're about understanding our data better, modeling it closer to how it exists in the real world.

In the world of SurrealDB, every record, every piece of data, is vibrant and alive, part of a greater whole. It's not just about storing data; it's about creating a universe of interconnected information. Graph edges are our map to this universe.

Until next time, stay curious, stay open, and stay gracious. Happy exploring!

[Learn more Surreal](https://surrealdb.com/docs)
