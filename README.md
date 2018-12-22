# Would You Rather? Project

A React/Redux web app that lets users play the “Would You Rather?” game, where they can answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard. The project emphasizes using React and Redux together to build the application, that allows to improve the predictability of the application’s state; establish strict rules for getting, listening, and updating the store; and identify what state should live inside of Redux and what state should live inside of React components. Provided starter code consists of a Data.js file, which represents a fake database and contains methods to access the data. 

<img width="1102" alt="quiestionnaire1" src="https://user-images.githubusercontent.com/26148396/50368094-56e84d80-0553-11e9-9d03-011d540a5246.png">
<img width="1102" alt="questionnaire2" src="https://user-images.githubusercontent.com/26148396/50368095-56e84d80-0553-11e9-9ce3-84d01dcca23d.png">
<img width="1102" alt="questionnaire3" src="https://user-images.githubusercontent.com/26148396/50368096-56e84d80-0553-11e9-9c90-27b726f82353.png">
<img width="1102" alt="questionnaire4" src="https://user-images.githubusercontent.com/26148396/50368097-56e84d80-0553-11e9-8482-369f24b3bc29.png">
<img width="1102" alt="questionnaire5" src="https://user-images.githubusercontent.com/26148396/50368098-56e84d80-0553-11e9-91f0-878c27727c26.png">
<img width="1102" alt="questionnaire6" src="https://user-images.githubusercontent.com/26148396/50368099-56e84d80-0553-11e9-8564-0187e124d74a.png">
<img width="1102" alt="questionnaire7" src="https://user-images.githubusercontent.com/26148396/50368100-56e84d80-0553-11e9-9a05-39882527d7c1.png">
<img width="1102" alt="questionnaire8" src="https://user-images.githubusercontent.com/26148396/50368101-56e84d80-0553-11e9-8dae-ef4a8f7ab1cc.png">

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
