# Github technical test

https://docs.github.com/en/rest

Getting started:

To run application run:

```
npm i

npm run start
```

To run tests after this:

```
npm run cypress:open
```

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

For the first time, I've decided to use CSS directly from a single file. I thought it might have saved time. In retrospect, it's become quite cluttered and hard to navigate. If I were to come back to the project, I'd most likely use Styles Components. I like creating reusable little bits of code that I can reuse. I feel as if that had been lost in this case. When looking at the UI I normally like to create things with the purpose in mind. This task's requirements didn't really tell me anything about how the user would like to use the application. I found myself having to have a think about what the use case could be. In the end, I decided to go for a very simple look where information is given simply.

In addition, some of the styles don't scale well for all viewports. If given more time, I would make sure all the styles scale dependant on a user's screen/window size. Most of them do scale however there are some positioning styles that don't translate well.

Furthermore, I'd look for some safety when it comes to types. Having no history using the Github API, I found myself writing comments that detailed the type signatures. Since I was already there writing the type signatures, it would have been optimal to have the types enforced at the compiler level as TypeScript would. Realistically, all I did was leave myself open to human error.

I decided to create the user list using a table. Using a table seemed like the most logical thing and kept to the best standards. However, I now realise that I should have used cards. The users don't have a lot of information. If a user were looking at the table, they would find it hard to follow. Using cards would have allowed me to show much more information with less confusion.

Implementing Cypress helped me to test. Adding a test that ensures that the app works in the way I expect it to.

Following the task, I wanted to add a filter for the user's repository. This did not seem possible going off of the Github API. It is possible to get an org's repositories using filters/sorts/pagination. Given more time I would change the application to work with orgs. Then it would be possible to filter/sort/paginate all of the results using the API.

In conclusion, looking at the app in retrospect. I wanted to create a clear start. Making the flow of the application intuitive you are asked to input a GitHub user to search for. I realise now there should be a submit button for clarity. When it comes to the list of users. I decided to go for a simple 'Previous' and 'Next' method of paginating. Potentially I could have tried some other methods. Having page numbers may have been a cleaner way of navigating through the list. I'd need to have a good understanding of how this application would be used to make a concrete decision on which method I'd go with. Given more time I would likely increase the amount of data shown on the user cards.
The styles find themselves lacking in areas. The pagination buttons need hover/active styles. The current page a user is on is also not displayed in the clearest of ways. I would likely add the page number to the top of the page and between the 'Next/Previous' buttons.
Top/Sidebar navigation would also make the app have a cleaner feel. Once leaving the home page there's no method of getting back. Potentially if there were more content on the application it would definitely be worth adding.
