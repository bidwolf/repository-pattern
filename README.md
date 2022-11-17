# repository-pattern
Simple project to apply knowledges about repository patttern with Typescript and Express

## Getting Started

If you already know how to configure a setup with Typescript, you have all you need to starts with this project.
So you can clone this repository in your repository local and install all dependencies with `npm install or yarn install`.

### Create a Typescript project 

If you don't know how to configure a setup with Typescript, i recommend you create a typescript project from scratch following the steps below:

1 . Initialize your project with command `yarn init`

2 . Install express  by using `yarn add express`

3 . Install typescript and express and node types in your repository as development dependency by using `yarn add typescript @types/node @types/express -D `

4 . Execute the script tsc --init to setup automatically the `tsconfig.json` ( The config file to transpile your typescript project). `yarn tsc --init`

5 . In your `tsconfig.json` add outdir key with value "./dist" like that:
  ```JSON
  {
  "compilerOptions" : {
      "outDir": "./dist",
    }
  }
  ```
6 . Install ts-node-dev in your repository as development dependency by using `yarn add ts-node-dev -D`

7 . Configure a script dev, you can run this script with command : `yarn dev` 
  ```JSON
  "scripts": {
    "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules --respawn src/server.ts "
  }
  ```

Now you can use Typescript in your project!

## What is Repository Pattern?

The Repository pattern is a way to abstract the data layer and minimize coupling and prevent side effects caused by implementation details.
To do that you need to create some abstract classes and interfaces to provides a contract following the SOLID principles. 
