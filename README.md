# Next Games // Junior Developer position // assignmentTask
The aim is to buid a simple, extendable React-Redux site for displaying data from different services.


## Documentation

## Usage
```
1. open the file 
2. run `yarn install`
3. run `yarn start`
4. open browser visit`http://localhost:3000`
```

## Project directory structure
```
public               --Contains HTML file and mock data
src
  -index.js          --Project entry point
  -page/             --Contains all the component
    App.jsx/         --The root component
    azure.jsx/       --Azure server list and presentational component
    dataDog.jsx/     --DataDog incidents and presentational component
  -store/
    azure/           --Azure service state management
    datadog/         --Datalog service state management
```
## How to extend
1.First create a new demo.jsx component in the `page/` folder, defined the content and export it.
2. Import demo.jsx and unified export in App.jsx
  ```jsx
    import Demo from './demo';
  ```
Add a clickable sidebar
  ```js
    <li>
      <NavLink to="/demo">Demo</NavLink>
    </li>
   ```
Add a router
  ```js
    <Switch>
      <Route exact path="/demo" component={Demo} />
    </Switch>
  ```
## How to use state management

1.Create a new folder `demo/` folder under the `store/` directory and create `actionType`, `action`, `reducer`.

2.Import `reducer` in the `store/` folder and export it uniformly

3.In `demo` component, use `connect`and export it
```jsx
    const mapStateToProps = (state) => {
      return { demoData: state.demoData.data };
    };
    const mapDispatchToProps = (dispatch) => ({
      getDemoData: () => dispatch(getDemoData()),
    });

    export default connect(
      mapStateToProps,
      mapDispatchToProps,
    )(Demo);
```

## Conclusion

1.This project implements redux state management, and can send asynchronous `action`. The state of each component is scattered in different folders (under the `store` folder), which is a good separation.
2.This project does not have the ability to implement the direct request interface to get the returned `json` data for rendering, because the interface provided by Microsoft or `dataDog` is not found, or the interface will cause cross-domain and cannot be used in this project request.
3.This project is created with `create-react-app`. I created `mock` data in the public folder and perform interface simulation request. This project is developed and debugged in this mode.
4. The most difficult part is to fetch the data without using any API.If I want to get real data, there are two ways to do it:

```
     1. Use the RSS feed provided by the website, get the concise information data provided by the website, after `parse`,filter  `XML` data, then render it in this project.
     Pros : Spam Free,Saves Time,Unsubscribing Is Easy
     Cons : Not Widely Adopted Yet,Source Origination Difficult
     2. Use web scraping with Python. In this way, I can scraping `html` structure of the website, afer parsing, filter it, then display it in this project.
     Pros : Easy to implement,Accuracy
     Cons : Difficult to analyze,peed and protection policies 
     3. The above methods can Automatic refresh once every 10 minutes.
```
## Time Spend
24h
