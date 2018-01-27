# Dashboard: An NBA Player Strength Visualization App

An NBA player shot visualization web app with React, Ant Design and D3 Shot Chart.

It shows one player's shot data. The colors stands for the efficiency and the sizes of hexbins shows the frequency.

Data source:
* player info and data: npm nba package (https://www.npmjs.com/package/nba)
* player picture and team picture: https://stats.nba.com
* shot chart component: D3-shot chart (https://www.npmjs.com/package/d3-shotchart)
* radio, slider, switch components: ant design (https://ant.design/docs/react/introduce)

Home page:
![alt text](https://github.com/milkteathecat/nba/blob/master/home1.jpg)

The slider is filtering the number of shots at that certain spot.
By dragging the slider to a larger number, you can see those spots that player has more shots.
![alt text](https://github.com/milkteathecat/nba/blob/master/home2.jpg)

The search bar has autocompletion function. When you type part of the players names, it will give a list with both players pictures as well as their full names.
![alt text](https://github.com/milkteathecat/nba/blob/master/autocompletion.jpg)

It also can switch between hexbins and scatters views.
![alt text](https://github.com/milkteathecat/nba/blob/master/home3.jpg)
