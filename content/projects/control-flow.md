---
title: Control Flow file
description: "✦ Topic 2: Control Flow (`@if`, `@for`, `@switch`)"
externalUrl: /project-images/unnamed-2.png
image: /project-images/unnamed-2.png
navigation:
  description: Control Flow file
  title: Control Flow file
tech:
  - Test1
---

✦ Topic 2: Control Flow `@if`, `@for`, `@switch`)

Angular's new control flow syntax is built directly into the template engine. It's more intuitive, type-safe, and often more performant than the old

structural directives (\*ngIf, \*ngFor).

```js [MongoDB.js]
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("st-business-mongodb-pass-auth");

db.user.insertOne({
  name: "Demo User",
  email: "admin@namibiarentals.com",
  emailVerified: true,
  phone: "+264814687647",
  role: "admin",
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),
});

// Find a document in a collection.
db.getCollection("user").findOne({});
```

:video{src="https://www.youtube.com/watch?v=SCyyKT9bw_M&t=228s" width="100%"}

---

/

1\. @if - Conditional Rendering

Replaces \*ngIf. It looks like standard JavaScript/TypeScript logic.

1 @if (isLoggedIn()) {

2 \<user-profile />

3 } @else if (hasError()) {

4 \<error-message />

5 } @else {

6 \<login-button />

7 }

\`\`\`

\`\`\`

2\. @for - List Rendering

Replaces \*ngFor. It requires a track expression, which significantly improves rendering performance by telling Angular how to identify unique items

(like a primary key).

1 \<ul>

2 @for (item of items(); track [item.id](http://item.id)) {

3 \<li>{{ [item.name](http://item.name) }}\</li>

4 } @empty {

5 \<li>No items found.\</li>

6 }

7 \</ul>

*Note the built-in* `@empty` *block! No more wrapping* `ngIf` checks around your list.\*

\`\`\`

\`\`\`

3\. @switch - Selection

Replaces \*ngSwitch.

1 @switch (userRole()) {

2 @case ('admin') { \<admin-dashboard /> }

3 @case ('user') { \<user-dashboard /> }

4 @default { \<guest-view /> }

5 }

\`\`\`
