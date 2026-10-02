# Product API with Caching

An Express.js REST API for managing products with an in-memory caching layer.

## Features

- GET all products
- GET product by ID
- POST a product
- PUT a product
- PATCH a product
- DELETE a product
- In-memory caching
- Cache HIT/MISS headers
- 60-second cache TTL
- Cache invalidation after data modification
- Layered architecture

## Project Structure

```text
controllers/
database/
middleware/
routes/
services/
index.js
package.json