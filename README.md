# Github technical test

https://docs.github.com/en/rest

Task:

- Seach box to search for username/org
- A list of repos are returned
- The list needs to be sortable, paginated, filterable (we'll find the sorts and filters when looking at the api)

Tech:

- Clean organised code
- Most modern version of JS
- Explain how to make it deployable
- Share code via github
- README with explanation of choices
- Use React
- Use CSS framework of my choice
- Node/Express server for delivering my app
- Call github API via the server rather than directly using CORS
- Use fetch for all client side requests

Bonus:

- Clicking on the repo will display info about the repo
- Write some E2E tests
- Write an integration test for one of your REST APIs (just 1 test)

---

Github REST API:

- Endpoint: https://api.github.com

Notes:

For the first time, I've decided to use CSS directly from a single file. I thought it might have saved time. In retrospect, it's become quite cluttered and hard to navigate. If I were to come back to the project, I'd most likely use Styles Components. I like creating reusable little bits of code that I can reuse that I felt I lost a little bit in this case.

Furthermore, I'd look for some safety when it comes to types. Having no history using the Github API, I found myself writing comments that detailed the type signatures. Since I was already there writing the type signatures, it would have been optimal to have the types enforced at the compiler level as TypeScript would. Realistically, all I did was leave myself open to human error.

I decided to create the user list using a table. Using a table seemed like the most logical thing and kept to the best standards. However, I now realise that I should have used cards. The users don't have a lot of information. If a user were looking at the table, they would find it hard to follow. Using cards would have allowed me to show much more information with less confusion.
