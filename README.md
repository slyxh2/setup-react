# setup-react

This personal program contains two parts:
1. mock the **create-react-app** to build the react application.
2. highly intergate react template


## Quick Overview
1. Clone this repository 
2. 
```sh
npm run set-react-app my-app
cd my-app
yarn start
```

you can also use the **create-react-app** to build the application based on my unique template
```sh
npx create-react-app my-app --template cra-template-patrick
```

## cra-template-patrick

The template was intergated with **Redux, React-Router V6, Material UI, Redux-logger, Redux-promise, Redux-thunk**.
The file arrangment was also clear and logical as shown below:
```
cra-template-pak
├─.DS_Store
├─README.md
├─package.json
├─template.json
├─template
|    ├─README.md
|    ├─gitignore
|    ├─src
|    |  ├─types
|    |  |   └index.tsx
|    |  ├─store
|    |  |   ├─index.tsx
|    |  |   ├─reducers
|    |  |   |    ├─count.tsx
|    |  |   |    └index.tsx
|    |  |   ├─actioins
|    |  |   |    └count.tsx
|    |  ├─router
|    |  |   └index.tsx
|    |  ├─pages
|    |  |   ├─show
|    |  |   |  └index.tsx
|    |  |   ├─home
|    |  |   |  ├─.DS_Store
|    |  |   |  ├─index.css
|    |  |   |  ├─index.tsx
|    |  |   |  └react.png
|    |  ├─components
|    |  |     ├─count
|    |  |     |   ├─index.css
|    |  |     |   └index.tsx
|    |  |     ├─avatar
|    |  |     |   ├─index.css
|    |  |     |   └index.tsx
|    ├─public
|    |   ├─index.html

```