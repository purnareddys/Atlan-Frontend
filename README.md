# Front End Engineer Challenge – IPL

A data visualization challenge to build a web app and PWA with IPL (Indian Premier League) Data. Goal is to present some interesting information and stats about IPL.

- Responsive Design
- Mobile friendly

![Screetshot of Project Web View](https://res.cloudinary.com/dhbiia9jk/image/upload/v1599978137/Screenshot_175_ncqpht.png)

## Built With

- [React](https://reactjs.org/) - the web framework used
- [Chart.js](https://www.chartjs.org/) - used to create charts
- [Papaparse](https://www.papaparse.com/) - for parsing CSV files to JSON

## Link to Hosted Website

- [Click Here](https://socialcops.netlify.com)  
  _(Hosted on Netlify)_

## Dataset

- [Click Here](https://www.kaggle.com/saurav9786/indian-premier-league-match-analysis)

## Bonus Points

- The App is built with React (Hooks), but also I am very interested on learning Vue aswell.(The entire app is built with Hooks, no class components!)
- Used Context so that each and every component in the app which requires the chart data can be taken from context.
- Only once the csv data will be parsed with papaparser and then that parsed data is available in Local Storage.
- Implemented a Custom Hook which converts words of a string to abbreviated form. For Example:- Chennai Super Kings-> CSK
- For better optimization, I have used React.memo HOC(Higher Order Component) for caching the previous props values of the component(Used in mini-card-component)
- It is a PWA(Progressive Web App) as verified on [Lighthouse](https://developers.google.com/web/tools/lighthouse/). It is fast and reliable, installable, PWA optimized.
- It is offline usable.

![Screetshot of Project(Mobile view)](https://res.cloudinary.com/dhbiia9jk/image/upload/v1599978137/1_oawjnp.png)
![Screetshot of Project(Mobile view)](https://res.cloudinary.com/dhbiia9jk/image/upload/v1599978137/2_gqgtym.png)

## Imporvements /Future Updates

- Light/Dark Theme
- Code-splitting the app which helps us to “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of our app.
