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
