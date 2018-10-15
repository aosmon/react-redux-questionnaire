# Redux Project

A React/Redux web app that lets users play the “Would You Rather?” game, where they can answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard. The project emphasizes using React and Redux together to build the application, that allows to improve the predictability of the application’s state; establish strict rules for getting, listening, and updating the store; and identify what state should live inside of Redux and what state should live inside of React components. Provided starter code consists of a Data.js file, which represents a fake database and contains methods to access the data. 

<img width="652" alt="01_wouldyourather_homepage" src="https://user-images.githubusercontent.com/26148396/46965537-27135a00-d079-11e8-864b-7da5e35cd140.png">
<img width="650" alt="02_wouldyourather_question" src="https://user-images.githubusercontent.com/26148396/46965539-27abf080-d079-11e8-88c7-503a180a6c8f.png">
<img width="650" alt="03_wouldyourather_pollresults" src="https://user-images.githubusercontent.com/26148396/46965540-27abf080-d079-11e8-83b9-b3b0f99792a6.png">
<img width="649" alt="04_wouldyourather_leaderboard" src="https://user-images.githubusercontent.com/26148396/46965541-27abf080-d079-11e8-920b-41bdf04f85fc.png">
<img width="650" alt="00_wouldyourather_login" src="https://user-images.githubusercontent.com/26148396/46965542-27abf080-d079-11e8-9769-0d5c0240fd86.png">

## App Functionality

- Login: User is presented with the Login page that lets the user select a name from the list of existing users.
- Homepage: Once the user logs in, the home page is shown where user can toggle between his/her answered and unanswered polls. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).
- Poll details: Each polling question contains a link to see the details of that poll. The details of each poll are available at questions/:question_id. When a poll is clicked on the home page, the following is shown:
    Text “Would You Rather”;
    Two options.
    
    For answered polls, each of the two options contains the following:
    Text of the option;
    Number of people who voted for that option; and
    Percentage of people who voted for that option.
    The option selected by the logged-in user is marked
- 404 page: If the user is trying to access a poll that does not exist, application shows a 404 page. (Please keep in mind that newly created polls will not be accessible at their url because of the way the backend is set up in this application.)
- Voting: Users can only vote once per poll. Upon voting in a poll, all of the information of an answered poll is displayed. 
- Post Question: Users can post their own questions with provided form for posting new polling questions, available at the /add route. The application shows the text “Would You Rather” and have a form for creating two options. Upon submitting the form, a new poll is created, the user is taken to the home page, and the new polling question appears in the correct category on the home page.
- LeaderBoard: To see stats for each user, a leaderboard is available at the /leaderboard route. Users are ordered in descending order based on the sum of the number of questions they’ve asked and the number of questions they’ve answered. The more questions users ask and answer, the higher up users move.


## Installation and Launch Instructions

- Clone or download the repo.
- Open a terminal in project directory.
- Install Node.js. You can download it here: https://www.npmjs.com/get-npm
- Install npm
- `npm install
Install all project dependencies with npm install
- `npm install --save react-router-dom`
- `npm install --save react`
- `npm install --save react-dom`
- `npm install --save react-redux`
- `npm install --save react-redux-loading`
- `npm install --save react-scripts`
- `npm install --save redux`
- `npm install --save redux-thunk`
- Start the development server with npm start

## References
Avatar images: https://www.iconfinder.com
