
# Documentation

## Instalation

Download and install nodejs on your local computer

click [click](https://nodejs.org/en/download/) to download

 After installing nodejs you can clone this project in your local enviroment navigate to projects directry `cd project_name` and run following command to install all application `package.json` dependecies

```
npm install
```

if you check `package.json` file you can find following scripts are available

```javascript
"scripts": {
    "dev": "nodemon server/index.js",
    "build": "next build",
    "start": "NODE_ENV=production node server/index.js"
},
```

To run this application localy in development mode you should run `dev` script like this:

```
npm run dev
```

After this script application will start and it will be accesable on the followfing URL:

```
http://localhost:3000/
```

Another scripts `build ` and `start` we will use on the production enviroment.

## File structure

```
- components
- gql
- lib
- pages
- server
- static
```

### components 
This is place where global usage react components are located, like header, footer, layouts, inner header componenets like search and header dropdown menus located here. In this folder you find two folders:
```
- mutations
- queries
```

We need to mention that beacause of we are using graphql to retrive and change data on the server we always have two kind of components, the component that retrives data from the server and another one components that changes or adds data to ther server. So we are categorising such kind of components in `mutation` and `query` folders.

### pages
This is next js default folder where you can add pages to you application, each page has its own components folder, where you can locate page specific components. for more information how next.js pages works you can check [here](hhttps://nextjs.org/learn/basics/navigate-between-pages)

### static
This is next.js folder you can read about this folder [here](https://nextjs.org/docs#static-file-serving-eg-images)

### server 
This is a location where nodejs and graphql server stuff is located. here we are going to add new types and resolvers.

### gql
In this folder we are storing actual quesries and mutations. Which are used by components.

## Documentation you need to check

[Next.js](https://nextjs.org/docs)

[Apllo Server (graphql server)](https://www.apollographql.com/docs/apollo-server/)

[Apollo Client (graphql client)](https://www.apollographql.com/docs/react/)

[Json Forms](https://github.com/mozilla-services/react-jsonschema-form)





