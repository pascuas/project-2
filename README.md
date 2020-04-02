# project-2

## SportsApp
With this application you can access information about a team from the NBA, NFL, MLB, and EPL. You'll be able to see the latest scores and team information. Also, you'll be able to access the team's website and the team's social media accounts.

## Motivation
This was created to display what I learned from my second unit of my Software Engineering Immersive Course. A fun way of doing this was making a sports app.

## How It Looks
![alt text](https://res.cloudinary.com/drxoihdbb/image/upload/v1585849311/Pictures/Screen_Shot_2020-04-02_at_10.39.18_AM_hjsnh1.png)

![alt text](https://res.cloudinary.com/drxoihdbb/image/upload/v1585849324/Pictures/Screen_Shot_2020-04-02_at_10.39.35_AM_zbgdfj.png)

![alt text](https://res.cloudinary.com/drxoihdbb/image/upload/v1585849341/Pictures/Screen_Shot_2020-04-02_at_10.40.11_AM_arnmtr.png)

## Built With
* React
* Languages Used: Javascript, CSS, HTML

## APIs Used
- EPL: https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League
- NBA: https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA
- NFL: https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NFL
- MLB: https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=MLB

## Features
* Ability to access different leagues such as the NBA, NFL, MLB, and EPL
* Ability to access every team in those leagues
* You'll have access to each team's latest results
* You'll see a team information section for each team
* You'll have access to each team's website, and social media accounts

## Issues and Resolutions
**Error**: <br /> ![alt text](https://res.cloudinary.com/drxoihdbb/image/upload/v1585850370/Pictures/Screen_Shot_2020-04-02_at_10.58.58_AM_fwmug6.png)

**Resolution**: Had to use a conditional in order to access the data that was pulled in.
```
if (!usLeague) {
        return <></>
    };
```

**Error**: Clicking on the social media icons did not open the correct page. Instead the social media url would be added onto the current page's url. Example below. <br />
![alt text](https://res.cloudinary.com/drxoihdbb/image/upload/v1585850932/Pictures/Screen_Shot_2020-03-31_at_11.29.34_AM_z46kqa.png) <br />

**Resolution**: To fix this, I added "https://" onto to the href
```
<a href={"https://" + team.strInstagram} target="_blank">
```


