This is a Next.js project based on the technical test for a-safe, following the requirements in [the pdf].(tech-test.pdf)

## 1. Authentication with Next.js

For this task GitHub has been chosen as the main login provider as the test requires it to be uploaded to GitHub for its review. Also, it will use credentials, having an admin field to have access to more restricted pages. A list of credentials will be added within the next table:

| username                | password | admin |
| ----------------------- | -------- | ----- |
| john.smith@corp.com     | 1234abcd | yes   |
| peter.gonzalez@corp.com | abcd1234 | no    |

In this specific case, the main layout implements the provider to be able wrap the whole application, letting us use it in whichever page we decide to. This is called the provider pattern, as opposed to the middleware pattern, taht consists in creating a middleware file and implement that logic there. The second pattern is more useful when we want to protect all routes, even though it can protect specific ones.

For the protected route we get the server session and check if there is a session and if it has an user, otherwise it redirects to the login page.
