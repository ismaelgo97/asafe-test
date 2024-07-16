This is a Next.js project based on the technical test for a-safe, following the requirements in [the pdf].(tech-test.pdf)

## 1. Authentication with Next.js

For this task GitHub has been chosen as the main login provider as the test requires it to be uploaded to GitHub for its review.

In this specific case, the main layout implements the provider to be able wrap the whole application, letting us use it in whichever page we decide to.

For the protected route we get the server session and check if there is a session and if it has an user, otherwise it redirects to the login page.
