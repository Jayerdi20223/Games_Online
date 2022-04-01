# Games Online

Games Online is Web Application to save a list of your favorite games. All data are store in a Json file.

# Installation

```shell
npm install
npm run build
npm start
```

# Environment Variables

- `PORT`, this is the http port of the server. by default is `5000`.
- `APPID` - (optional), this is an unique ID for the application to identify in a load balancer

Also you can create a .env file with the environment variables mentioned above.

# Docker

```shell
docker build -t Games_Online .
```

```shell
docker run -p 80:5000 Games_Online .
```

then visit: `http://localhost`

# Considerations

- Make sure nodemon ignores the file `src/games.json`.

## Reference

- https://babeljs.io/docs/en/babel-plugin-transform-runtime

### Todo

- [ ] Add user authentication
- [ ] Allow to download the json data
- [ ] Publish a docker container image on dockerhub
- [x] Change to dark theme
