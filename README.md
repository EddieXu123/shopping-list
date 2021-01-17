A Shopping List built using the MERN stack. This project uses redux, reactstrap, and has JWT authentication to personalize each persons shopping list. I'd love to deploy on Heroku but don't want to pay for extra MongoDB space in case someone spams new users/items >w<

In the project directory, you can run:

### `npm i`

Installs all the Node dependencies and modules

### `npm run client-install`

Installs all the client-side dependencies and modules

You will also need to connect your own URI because mine is not for grabs D:
You can probably find a tutorial online but basically do this:

Create a Mongo Atlas account, create a new Cluster and connect to the Cluster (Can be through native drivers). Then, copy the connection string into '/config/keys'.mongoURI object (replacing password with your password). You may also need to create a random string for the jwtSecret key in config.

### `npm run dev`

Runs the server.js and client-side application concurrently so you don't needa run both in separate terminals
