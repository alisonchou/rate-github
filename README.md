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
