# BookAPI

This webapp is for any self-confessed bookworms who need to keep track of their personal libraries and who need to stop buying duplicates of the same books.

The inspiration for this booksapi web app stems from a personal need - as an avid book reader and collector of books, I have amassed a personal collection of books that I can no longer keep track of. This has led me to repeatedly purchase books that I already own.

I hope that this booksapi app can be useful for anyone else in a similar situation.

## App Features

- Users can search for books from the Home page
![image](https://user-images.githubusercontent.com/31529132/157239407-925c7c22-458b-4439-8d6f-2e5e0d489e22.png)

- After search results are displayed, users can choose to 'add to my library!' This allows users to start creating a personal collection of books.
![Screenshot 2022-03-08 at 8 38 18 PM](https://user-images.githubusercontent.com/31529132/157239914-c5d02c03-b3b4-4c38-b4e3-53eba746fc90.png)

- Users can view their personal collection in 'My Library'
![image](https://user-images.githubusercontent.com/31529132/157240200-001765d0-1cd9-4465-acab-cf885ad08cf9.png)

- Within 'my library', users can filter to find the books they had previously added quickly
![image](https://user-images.githubusercontent.com/31529132/157240378-65634ffd-2445-4505-b480-876e61eaa1dd.png)

- After filtering, users can 'clear filter' to return to their original shortlist of books in 'My Library'
![Screenshot 2022-03-08 at 8 43 35 PM](https://user-images.githubusercontent.com/31529132/157240531-e43ad87b-dcbe-4f37-bba8-87acdfb9ddee.png)

- Users can also choose to remove books from their library
![Screenshot 2022-03-08 at 8 44 44 PM](https://user-images.githubusercontent.com/31529132/157243506-0956f676-36c8-414d-b7f9-ba0179ecca30.png)


- Finally, in the About page, users will find the link to the github repo, the link to Open Library (source of the API), and a way to contact me.

![image](https://user-images.githubusercontent.com/31529132/157241181-b7b08a32-39d1-4ac4-8852-2f3400989ca1.png)


## How the app was built

### APIs
- This BooksAPI app fetches from the open source API from Open Library (https://openlibrary.org/developers/api). 

- In particular, the Search API (https://openlibrary.org/dev/docs/api/search) was used to do the main search in the Home page.

- The book covers are fetched using the open library book cover API (https://openlibrary.org/dev/docs/api/covers)

### React Hooks
- BooksAPI is built on React v 17.0.2
- The following React Hooks were used: useState, useEffect, useOutletContext

### Layout
- The display elements make use of vanilla CSS, and material UI v **5.4.4**

### Wireframes were created in the planning phase
- These wireframes were created on Figma
![image](https://user-images.githubusercontent.com/31529132/157243000-7a83942c-69d6-4cf9-beda-49225ca2b011.png)
![image](https://user-images.githubusercontent.com/31529132/157243035-0abf3a8f-2164-42e0-981e-13d40859916a.png)
![image](https://user-images.githubusercontent.com/31529132/157243074-dfe1a267-9520-4fdb-9952-ae8c3e92f6ad.png)
![image](https://user-images.githubusercontent.com/31529132/157243119-38dc9f56-9ee3-4c3a-994d-e4325102a1f9.png)



### other framework / tools used:
- Javascript
- HTML
- CSS

### This app is deployed on Github (https://klaucoffee.github.io/booksapi/)




