# o-shop

To start building the application, begin with the server-side components. Create a `server.js` file to set up an Express server and establish a connection to MongoDB. Define collections within the MongoDB database using models. Develop the necessary routes and thoroughly test them using Postman tool for backend functionality before integrating them into the frontend.

Ensure password security by employing hashing and encryption techniques within the helper functions.

Organize the server logic by implementing controllers. These controllers will handle various actions, like user registration, utilizing try-catch blocks to handle errors effectively.

Implement middleware to manage specific tasks, such as user authentication and safeguarding admin and user routes.

Transition to the frontend side and generate a React application. Begin by installing the `react-helmet` library, which allows dynamic title setting for each page.

Design a user registration form using the `useState` hook to manage input fields. Handle form submissions through the `handleSubmit` function. Integrate Axios for API requests and React Toastify for displaying notifications. Concurrently run both the server and client using packages like `concurrently` and `cors`, while setting up a proxy in the client's `package.json` to facilitate server-client communication.

Create a login form, send data to the server, and manage the login process using controllers and routes. Implement a context (`auth.js`) for managing authentication across components.

Design a dashboard and establish private routes using React Router. Create a context provider (`auth.js`) for authentication and employ a custom hook to implement private routes effectively.

Extend functionality by incorporating a "forgot password" feature. Integrate relevant functionalities in the user model, controller, and routes. Design a UI for the forgot password page and seamlessly integrate it into the app's flow.

Develop an admin dashboard, differentiating between admin and user routes. Implement necessary controllers and manage UI components.

For managing products and categories, create models, routes, and controllers. Integrate image handling using `express-formidable` for product routes. Design UI components for efficient interaction with products and categories.

Install the Braintree payment gateway for handling purchases and carts. Install required packages on both the server (`npm i braintree`) and client (`npm i braintree-web-drop-in-react`). Connect PayPal to Braintree using keys and IDs stored in the `.env` file.

Implement order management using the `moment` library on the client side. Develop features related to order processing to provide a comprehensive user experience.

All done.
