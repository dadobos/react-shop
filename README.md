# React Shop

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

## Description
The Online Shop is build with React. It has custom responsive layout styled with SCSS. It makes an API call to fetch mock products from [Dummy JSON API](https://dummyjson.com/products) with Redux [RTK Query](https://redux-toolkit.js.org/rtk-query/overview). Added also Toastify for notifications. 
The application shows a product home page and a cart page, the routing is done with React Router. 

## Quick overview
- Browse products retrieved from a mock API
- View product details and add items to a cart
- Update item quantities or remove items from the cart
- Toast notifications for user actions
- Responsive layout using SCSS

## Tech stack
- React (functional components + hooks)
- Redux Toolkit + RTK Query for async data
- React Router for navigation
- SCSS for styling
- react-toastify (notifications)

## Getting started (local)
1. Clone the repository :
```git clone https://dadobos.github.io/react-shop.git```
2. Go into the project folder:
```cd react-shop```
3. Install dependencies:
```npm install```
4. Start the dev server:
```npm start```
5. Open the app in your browser:
```http://localhost:3000/```

## Common scripts
- npm start — start dev server (hot reload)
- npm run build — create a production build
- npm test — run tests (if present)

## Notes for development
- API calls are handled with RTK Query; service files are located in src (look for a services or api directory).
- Styles are in SCSS — components can import their module styles or use shared partials.
- Routing lives under src (check App or routes-related files) — add pages or adjust routes there.
- For mock API changes, update the base URL or endpoints in the RTK Query service file.