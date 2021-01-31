# Rate Repository App

An iOS and Android mobile app built with React Native and Expo.
[Server](https://github.com/fullstack-hy2020/rate-repository-api) 
provides Apollo GraphQL API and REST API endpoints with SQLite.

## 🚀 Getting started
- Clone this repository and run `cd rate-github` to set the current directory to the app.
- Run `npm install`.
- Run `npm start` and record the IP address between `exp://` and `:`. Press `Ctr-C` to stop.
- Copy the contents of the `.env.template` file into an `.env` file.
  In the `.env` file, replace `<EXPO_IP_ADDRESS>` in `APOLLO_URL` with
  the previously recorded address.
- Outside the `rate-github` directory, follow the app
  [server](https://github.com/fullstack-hy2020/rate-repository-api)
  instructions to set up the backend.
- In one terminal window, run `npm start` in the `rate-github` (client) directory.
- In another terminal window, run `npm start` in the `rate-repository-api` (server) directory.
- Connect an [iOS](https://docs.expo.io/workflow/ios-simulator/) or
  [Android](https://docs.expo.io/workflow/android-studio-emulator/) emulator, or install the
  Expo app on your device and scan the QR code in the Expo development tools.

## 🔧 Functionality
- Sign up, sign in, sign out
- Review GitHub repositories
- Sort by latest, highest rated, and lowest rated repositories
- Filter repositories
- View and delete your own reviews
- Infinite scrolling on repositories page and reviews on single repository page

## ⚙ Technologies
- Apollo Boost library for GraphQL Apollo Client
- AsyncStorage to save user's session
- Formik for forms and Yup for input validation
- React Router for content navigation
- Jest and React Native Testing Library to test
- Debounces filter value with use-debounce to decrease server load while user types

## 📱 Screenshots
**Home** - view repositories and sort and/or filter

![Home](assets/screenshots/home.png 'Home')

**Repository View** - single repository view shows details from home,
reviews, and a button to view online

![Repository View](assets/screenshots/repository-page.png 'Repository View')

**Create Review** - signed-in users can review repositories

![Create Review](assets/screenshots/create-review.png 'Create Review')

**My Reviews** - signed-in users can view and delete reviews that they created

![My Reviews](assets/screenshots/my-reviews.png 'My Reviews')

**Sign In** - users can sign in to accounts

![Sign In](assets/screenshots/sign-in.png 'Sign In')

**Sign Up** - users can create accounts with a username from 1-30 characters
and a password from 5-50 characters

![Sign Up](assets/screenshots/sign-up.png 'Sign Up')
