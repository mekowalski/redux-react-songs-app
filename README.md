# Redux React Songs App

Creating this Songs App to learn about the connection of Redux and React

Kowalski, are you there?

## App Summary
- With this Songs App I practiced how to integrate React and Redux together
- Components are still created per usual in a React App
- Specific components in the Application will be selected that need certain information or need to make changes to the State
- Changes made to State, or information received, will be processed through Connect() helper
- With the connect(), it is necessary to define a `mapStateToProps()`
- `mapStateToProps` was passed as the first argument to connect() with odd syntax
  - eg: `export default connect(mapStateToProps)(AnotherComponent)`
- This application is pretty simple and basic
- What was learned:
  - Project structure of `/actions`, `/components` and `/reducers`
  - How Action Creators and Actions relate
  - How the Reducer updates the Data/State of the Store
  - Use of combineReducers and mapStateToProps
  - How to get Data from Store with connect()
  - Named vs Default exports
  - The purpose of the Provider, referencing the Store
  - Separation of React and Redux
  - How React-Redux works

- What this App doesn't do:
  - There isn't a way to add more songs, the songs are hard-coded
  - Modifications are not available(edit, add, delete songs, etc)
