# Project Overview

## Project Links

- github repo: https://github.com/pascuas/project-2
- live links: http://stanley-p2.s3-website-us-west-1.amazonaws.com/ <br />
              https://thesportsapp.netlify.com

## Project Description

With this project, I will create a sports app that will display different leagues, such as NBA, MLB, NFL, and English Premier League. I will able to display a list of teams in the league with the ability to see their team information and their last 5 events. 

## API

- USA leagues logos: https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=USA
- Enlgland league logo : https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England
- EPL: https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League
- NBA: https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA
- NFL: https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NFL
- MLB: https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=MLB



```
{data: {idTeam: "133604" idSoccerXML: "9" idAPIfootball: "42" intLoved: "2" strTeam: "Arsenal" strTeamShort:Ars"
         strAlternate: "Gunners, Arsenal Football Club, AFC" intFormedYear: "1892" strSport: "Soccer"} }
```


## Wireframes

- Wireframe: https://res.cloudinary.com/drxoihdbb/image/upload/v1585328825/Pictures/IMG_1303_rfm7kq.jpg
- App Architecture: https://docs.google.com/drawings/d/14jlJaHYog9rIPPk7X7diZHopfhEK_DUmYx-h4-w7rrY/


### MVP/PostMVP 

#### MVP 
- Find and use external api 
- Render data on page/ Ability to see the information about a team.
- Allow user to interact with the page
- Multiple routes/Able to click on logos

#### PostMVP 


## Components

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the footer | 
| Main | This will render what ever route is being chosen |
| Home | This will render the league logos |
| League Teams | This will render the team logos |
| Team Info | This will render the team information |

## Time Frame

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Header/Navigation | H | 2hrs| 1hr | 1hr |
| Footer | H | 1hr | 1hr | 1hr |
| Working with API | H | 3hrs| 3hrs | 3hrs |
| Testing API | H | 2hrs | 2hrs | 2hrs |
| Home Page | H | 4hrs | 2hrs | 2hrs |
| Testing Home Page | H | 1hr | 30min | 30min |
| League Teams Page | H | 4hrs | 3hrs | 3hrs |
| Testing League Teams Page | H | 2hrs | 1hr | 1hr|
| Team Information Page | H | 4hrs | 6hrs | 6hrs |
| Testing Team Information Page | H | 2hrs | 2hrs | 2hrs |
| Main Page/Working with Router | H | 4hrs | 2hrs | 2hrs |
| Testing Main Page/Routes | H | 2hrs | 1hr | 1hr |
| CSS/Styling | H | 4hrs | 5hrs | 5hrs |
| Deployment | H | 1hr | 30min | 30min |
| Total | H | 36hrs| 30hrs | 30hrs|


## Code Snippet

```
  useEffect(() => {
        const resultApiCall = async () => {
            const resultUrl = `https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${props.team.idTeam}`
            const resultRes = await fetch(resultUrl)
            const resultJson = await resultRes.json()
            console.log('result', resultJson.results)
            setLatestResult(resultJson.results)
        }
        resultApiCall()
    }, [])
    if (!latestResult) {
        return <></>
    }
    
*This was how I was able to pull in data and also how I was able to use and render the data by using the conditional. I was having a hard time accessing the data until finally using the conditional.
```

