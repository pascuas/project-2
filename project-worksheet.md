# Project Overview

## Project Links

- github repo: https://github.com/pascuas/project-2
- [add your deployment link]()

## Project Description

With this project, I will create a sports app that will display different leagues, such as NBA, MLB, NFL, and English Premier League. I will able to display a list of teams in the league with the ability to see their team information and their last 5 events. 

## API

API for league logos - https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=USA, https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England
API for team information - EPL: https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League
			   NBA: https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA
			   NFL: https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NFL
			   MLB: https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=MLB



```
{data: {idTeam: "133604" idSoccerXML: "9" idAPIfootball: "42" intLoved: "2" strTeam: "Arsenal" strTeamShort:Ars"
         strAlternate: "Gunners, Arsenal Football Club, AFC" intFormedYear: "1892" strSport: "Soccer"} }
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- Wireframe: https://res.cloudinary.com/drxoihdbb/image/upload/v1585328825/Pictures/IMG_1303_rfm7kq.jpg
- App Architecture: https://docs.google.com/drawings/d/14jlJaHYog9rIPPk7X7diZHopfhEK_DUmYx-h4-w7rrY/


### MVP/PostMVP - 5min

#### MVP 
- Find and use external api 
- Render data on page/ Ability to see the information about a team.
- Allow user to interact with the page
- Multiple routes/Able to click on logos

#### PostMVP 

- User has the ability to add favorite teams
- User can directly search for team on a form

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the footer | 
| Main | This will render what ever route is being chosen |
| Home | This will render the league logos |
| League Teams | This will render the team logos |
| Team Info | This will render the team information |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Header/Navigation | H | 2hrs|  |  |
| Footer | H | 1hr | | |
| Working with API | H | 3hrs|  |  |
| Testing API | H | 2hrs | | |
| Home Page | H | 4hrs | | |
| Testing Home Page | H | 1hr | | |
| League Teams Page | H | 4hrs | | |
| Testing League Teams Page | H | 2hrs | | |
| Team Information Page | H | 4hrs | |
| Testing Team Information Page | H | 2hrs | | |
| Main Page/Working with Router | H | 4hrs | | |
| Testing Main Page/Routes | 2hrs | | |
| CSS/Styling | H | 4hrs | | |
| Deployment | H | 1hr | | |
| Total | H | 36hrs| | |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
