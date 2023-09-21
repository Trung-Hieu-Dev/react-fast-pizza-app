# Fast React Pizza App

## Project Requirements From Business

- Very simple application, where users can order one or more pizzas from a menu
- Requires no user accounts and no login: users just input their names before using the app
- The pizza menu can change, so it should be loaded from an API
- Users can add multiple pizzas to a cart before ordering
- Ordering requires just the user's name, phone number, and address
- If possible, GPS location should also be provided, to make delivery easier
- User's can mark their order as "priority" for an additional 20% of the cart price
- Orders are made by sending a POST request with the order data (user data + selected pizzas) to the API
- Payments are made on delivery, so no payment processing is necessary in the app
- Each order will get a unique ID that should be displayed, so the user can later look up their order based on the ID
- Users should be able to mark their order as "priority" order even after it has been placed

## Technologies Required

- Redux
- React Router
- TailwindCSS

## How to test search order manually

In the Search Order Input Field, type IDDSAT. This is the id of the order, that was stored in the database.

## Knowledge Reviewing

- Building app with Vite.
- Destructure project.
- React Router: Routes, Fetching Data with Loader, Writing Data with Actions, Handling Errors.
- Redux Tool Kit: Managing Complex State, Predictable State Update, Debug
- TailwindCSS: Installing, Setting Up, Styling, Grid, Flexbox, Responsive Design.

## How to install app on local

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast
  Refresh

### Download Source

You could use git clone or download file directly.

### Installing Node Packages

$ npm i

### Start Project

$ npm run dev
