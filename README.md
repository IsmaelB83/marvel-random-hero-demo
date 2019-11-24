# marvel-random-hero-demo

This project is simple react app created as a demo for the npm module [marvel-random-hero](https://www.npmjs.com/package/marvel-random-hero). Marvel-random-hero is my first npm package published. I created it for the Keepcoding Bootcamp Fullstack Web Development, which I am studying at the moment.

## Install

```sh
npm install 
```

## Usage

I used create-react-app as the framework to create the react app, therefore starting this app is that easy as:
this module generates the hash required by Marvel API
```sh
npm start
```

The only consideration is to have a proper .env file in the root directory. This .env file requires two variables, which are the public and private api keys provided by Marvel when registering to use their API. More information ][here](https://developer.marvel.com/)
```js
REACT_APP_PUBLIC=12345678900987654321
REACT_APP_PRIVATE=1234567890qwerty0987654321
```