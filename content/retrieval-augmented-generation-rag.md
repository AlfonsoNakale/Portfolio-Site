---
title: Retrieval-Augmented Generation (RAG) file
description: A technique used to enhance the ability of a Large Language Model (LLM) to respond to user queries by using a vector database to retrieve semantically relevant results that serve as contextual information
tech:
  - RAG
  - AI
  - LLM
  - Redis
navigation:
  title: Retrieval-Augmented Generation (RAG) file
  description: A technique used to enhance the ability of a Large Language Model (LLM) to respond to user queries by using a vector database to retrieve semantically relevant results that serve as contextual information
---

**Retrieval-Augmented Generation (RAG)** is a technique used to enhance the ability of a Large Language Model (LLM) to respond to user queries by using a vector database to retrieve semantically relevant results that serve as contextual information. In the Redis ecosystem, this is implemented by storing and indexing vector embeddings that semantically represent unstructured data, such as text passages, images, videos, or audio. Redis supports this workflow by maintaining a secondary index over the data—offering FLAT and HNSW vector index types—and storing the vectors and associated metadata within hashes or JSON documents. To execute RAG, the Redis Query Engine supports advanced querying strategies, including k-nearest neighbor (KNN), vector range queries, and metadata filters.

**Semantic Caching** is a concept utilized to create faster and smarter LLM applications by storing and reusing generated responses. This is implemented through a specific tool called **Redis LangCache**, which allows developers to store LLM responses effectively. By leveraging semantic caching, applications can improve performance by serving cached answers for semantically similar queries, rather than re-generating responses for every request.

For practical implementation, Redis provides resources such as a "Retrieval-Augmented Generation quick start guide," "AI notebooks," and integrations with frameworks like LangChain, LlamaIndex, and RedisVL.
