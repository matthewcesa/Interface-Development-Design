# TP1

# Overview
A web application built for the Interface Development and Design module during my 2nd year at EFREI Paris.

The idea was to create a mini Vue.js application that allows displaying, searching, adding, and deleting articles while navigating between different pages using Vue Router.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

## Project structure
```text
TP1/
├── router/
│   └── index.js     # the app routes
└── src/
  ├── App.vue        # principal structure of the app
  ├── main.js        # vue application initalizator
  ├── components/    # reusable components
  ├── composables/   # logical component (named composables)
  ├── data/          # Local memory stored in the cache
  └── views/         # differents views/pages of the application
```

## How the application works

The application is a mini online store built with Vue.js. From the home page, users can access the article catalogue and view article details. The catalogue allows users to search for an article by title or category, filter results by category, and navigate between pages.

From an article details page, users can add an article to the cart. The number of items in the cart is updated in the navigation bar. The cart page allows users to remove an item or empty the entire cart.

The administration area is protected by authentication. After logging in with the credentials listed below, the administrator can view the list of articles, add a new one, or delete an existing one. Articles and the login state are stored locally in the browser.

## Admin page
To access the admin page : 
  - mail : test@test.com
  - password : 1234