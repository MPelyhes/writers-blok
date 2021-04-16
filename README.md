# Writer's BLOK README:
## Writer's BLOK:
- I created Writer's BLOK as a place for writers to be able to quickly find and respond to various writing prompts as part of their writing warm-up process. 
- A responsive UI allows users to go from prompt selection to writing instantly, on the computer or mobile.
- After registering, users can save posts to their account and submit new prompts for the Writer's BLOK community to enjoy
- Users are able to like prompts and sort them by most recent or most popular
- Currently hosted on Heroku's free tier, so the prompts take about 10s to load the first time while the backend server connects

## Stack
- Built using React, Redux, CSS, MongoDB, Node, Express

## Screenshots
![WritersBlokHome](https://user-images.githubusercontent.com/73857687/115078716-a0e46280-9ec5-11eb-87eb-c50ccee86bae.png)
![WritersBlokImg](https://user-images.githubusercontent.com/73857687/115078701-99bd5480-9ec5-11eb-9b8f-fd684dcc2a9d.png)
### Mobile
![WritersBlokMobile](https://user-images.githubusercontent.com/73857687/115078722-a2ae2600-9ec5-11eb-8d61-40551c9b4db4.png)     ![WritersBlokMobileNotepad](https://user-images.githubusercontent.com/73857687/115078950-08021700-9ec6-11eb-80e0-33d994fa8d38.png)

## Challenges
Creating a like button
- I wanted users to be able to like prompts and receive instant feedback in the UI that their like was registered. I didn't want that feedback to be delayed by waiting for a PUT request to be processed and
for the component to be rerendered. To address this, I created a "pseudolike" piece of state which has the default value of the real like value for the individual prompt. The "pseudolike"
is what is rendered in the UI, and is immediately updated when the like button is cicked or unclicked. The real like value is then updated with a PUT request.

Creating a character counter/validator
- For user submitted prompts, I wanted their to be create a character counter to provide frontend form validation/feedback. I ended up creating a reusable component that takes in 
three arguments from the parent component (maximum number of characters, the current string being evaluated, and a setState function to modify the strings validity). From there I just needed to 
use a simple if/else statement to check the string length after each keystroke and return the appropriate feedback to the user.

Making the single page functionality work effectively on mobile
- When I began working on this app, I wanted it to be split screen with the left-hand side dedicated to browing/creating prompts, revisiting previous posts, and user registration/login.
The right-hand side would be exclusively for the writing notepad. The layout was effective and intuitive on a computer, but quickly ran into issues on mobile. To address this, on mobile devices the notepad
is now at the bottom of the page and when a user selects a prompt they are immediately scrolled to the bottom of the page. Similarly, after they submit a post, they are scrolled
back to the top of the page. 

## Contributing
- Contributor Guidelines: Feel free to contribute or fork this project.

## Contact 
mattpelyhes@gmail.com

## Credits and References
- animate.css for home, prompt, and delete page animations
- react-typed for notepad title typing animation
- heropatterns for 
