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
