const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware(["/api"], { target: "http://localhost:3001" })
    );
};
//followed https://9to5answer.com/reactjs-app-in-heroku-quot-invalid-host-header-quot-host-configuration
//for help with invalid host header with heroku connection to react/node/express for deployment
// followed https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
//for learning purposes and future useage