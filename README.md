# Rate Repository App

A mobile app built with React Native. [Server](https://github.com/fullstack-hy2020/rate-repository-api) 
provides Apollo GraphQL API and REST API endpoints with SQLite.

## 🔧 Functionality

- Sign up, sign in, sign out
- Review GitHub repositories
- Sort by latest, highest rated, and lowest rated repositories
- Filter repositories
- View and delete your own reviews
- Infinite scrolling on repositories page and reviews on single repository

## ⚙ Technologies
- Apollo Boost library for GraphQL Apollo Client
- AsyncStorage to save user's session
- Formik for forms and Yup for input validation
- React Router for content navigation
- Jest and React Native Testing Library to test
- Debounces filter value with use-debounce to decrease server load while user types

## 📱 Screenshots
![Home](assets/screenshots/home.png 'Home')

Home - view repositories and sort and/or filter

![Repository View](assets/screenshots/repository-page.png 'Repository View')

Repository View - single repository view shows details from home,
reviews, and a button to view online

![Create Review](assets/screenshots/create-review.png 'Create Review')

Create Review - signed-in users can review repositories

![My Reviews](assets/screenshots/my-reviews.png 'My Reviews')

My Reviews - signed-in users can view and delete reviews that they created

![Sign In](assets/screenshots/sign-in.png 'Sign In')

Sign In - users can sign in to accounts

![Sign Up](assets/screenshots/sign-up.png 'Sign Up')

Sign Up - users can create accounts with a username from 1-30 characters
and a password from 5-50 characters
