# COMPONENT STRUCTURE
- React Side
1. SongList: list of Songs that is an array of objects
  - Title and Length
  - Render out the list of Songs

2. SongDetail: Displays the Song Title and Length of given Song


## REDUX APP DESIGN
1. How to design Redux side of App
2. How to organize Project Directory
3. Where to create Action Creators, Reducers and Actions, etc

- Approach application as React without Redux
  - App: Song List and Selected Songs
  - Song List: `onSongSelect` and `SongList`
  - Selected Songs: `SongDetail`

- Approach application as React WITH Redux
  - App Component: `SongList` and `SongDetail`
  - Reducers: Song list and Selected song Reducers (both are pieces of State)
  - Action Creators: Select Song (change the State)

# HOW REACT-REDUX WORKS
- How to get the State created from the Reducers
- How to get Action Creator to be called by SongList(consumed)

1. Using React-Redux, create 2 new components(Provider and Connect)
2. Both components created by React-Redux, that I will create instances of
3. Pass some Props into both to configure how they work

## REDUX PROJECT STRUCTURE
2. How to organize Project Directory
- All code for React and Redux will still be held inside the `src` DIR
- `/actions`: Contains all files related to Action Creators
- `/components`: Contains files related to Components
- `/reducers`: Contains files related to Reducers
- `index.js`: Set up BOTH React and Redux sides of the application
- There will be 3 `index.js` files for actions, src and actions

- [x] Build Action Creators inside `/actions` DIR and export
- [x] Build Reducers inside `/reducers` DIR and export
- [x] Wire up reducers with `combineReducers` call
  - import Redux to wire up both reducers to each other with `combineReducers()`

### Redux is pretty much set up and ready to go, here on out it's React and React-Redux
- Add a bit more configuration to `src/index.js`
- Goal is to make sure Provider tag is at the very top of the Component hierarchy
- And make sure it's passed the Redux Store(loads all the reducers)
- Create Provider instance that wraps the App Component with it
- [x] Eventually wire up the Provider

- [x] Create SongList Component
- get list of songs into SongList and console log it
- Create instance of Connect Component & pass it Provider to ask for the list of songs inside the App
- Connect will only be created inside SongList because SongList is the only Component that needs Connect to reach up and get a list of songs
- [] Configure Connect call
