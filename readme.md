# Day - 24: React Fundamentals

## Topics

-[x] Component in react  
-[x] What is JSX?  
-[x] Passing Data Using Props  
-[x] Parent to child data Passing  
-[x] Child to Parent Data Passing  
-[x] Prop Drilling & its Disadvantage

### Setting up React App using Vite

1. Open a terminal and run the following command to create a new React app.

```bash
npm create vite@latest
```

2. You will be prompted to type project name. Type project-name and press enter.

3. Next, select the framework you want to use. Select react and press enter.

4. Next, select the variant you want to use. Select javascript and press enter.

5. Next, Open the folder in VSCode Editor.

6. Open the terminal inside VS Code and run the following command to start the development server.

```bash
npm install
```

```
npm run dev
```

### Props Drilling

When you have a deeply nested component structure, passing props from the top-level component to the bottom-level component can be cumbersome. This is known as prop drilling.

### Disadvantages of Prop Drilling

1. Prop drilling makes the code harder to maintain.
2. The data is unncessarily passed through the intermediate components, which can be a performance issue.
