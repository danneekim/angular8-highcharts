<a href="https://www.highcharts.com/"><img src="https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2019/04/05141357/angular-and-highcharts-Orange-background.jpg" title="Angular and Highcharts" alt="Angular and Highcharts image"></a>

# Angular8-Highcharts

> This project was created using Angular 8 and implements the Highcharts.js library to generate financial data graphs for company's market data fetched from [Quandl's API source](https://www.quandl.com/api/v3/datasets/).  

## Deployment:
### https://angular8-highcharts.herokuapp.com/

## Table of Contents
- [Deployment](#deployment)
- [Installation](#installation)
- [Features](#features)
- [References](#references)

## Installation

### Clone

- Clone this repo to your local machine using `git clone https://github.com/danneekim/angular8-highcharts.git`

### Local Development Setup

> Update and install required packages

```shell
$ npm install
```
> After installation run commands

```shell
$ ng serve
$ ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
ℹ ｢wdm｣: Compiled successfully.
```
> The application will be running on your browser at `http://localhost:4200/`!

## Features
- User is able to login using their username and password.
- User is able to register new account.
- User is able to log out of their account.
- User is able to see user-friendly error messages in UI.
- User is shown loader while fetching data from API source.
- User is able to see their name when successfully logged in.
- User is able to generate (step-line) Highcharts graphs after clicking radio option.
- User is able to set/toggle the range of time of the data graph.
- User is able to see tooltip display of Date and respective data value.
- User is able to see High, Mid(Avg), Low point values of data graph.
- User is able to toggle High, Mid(Avg), Low point values of data graph.
- User is able to select the date range of data graph.
- User is able to see the time of when they last attempted to create a data graph.

- Application is fully compatible on Desktop and Tablet. (Mobile WIP)

## References

### Bootstrap
- https://www.techiediaries.com/angular-bootstrap/
- https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons
- https://www.c-sharpcorner.com/article/how-to-install-font-awesome-in-angular/

### User Authenication / Registration
- https://jasonwatmore.com/post/2019/04/24/angular-7-tutorial-part-2-create-base-project-structure-webpack-config
- https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
- https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
- https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service
- https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component

### Angular - Highcharts
- https://api.highcharts.com/highstock/
- https://www.highcharts.com/blog/post/highcharts-and-angular-7/
- https://www.tutorialspoint.com/angular_highcharts/angular_highcharts_quick_guide.htm

### Build / Deployment
- https://codemeals.com/angular-tutorials/deploy-angular-7-app-to-heroku/
- https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true
- https://levelup.gitconnected.com/simple-application-with-angular-6-node-js-express-2873304fff0f
