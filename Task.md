## Resources 
**Note: Create new GIPHY account or use existing**
- https://developers.giphy.com/dashboard/ - Generate API Key
- https://developers.giphy.com/explorer - API explore
​
## Technical requirements
- Have a strong concern for mobile devices
- Use `react.js`
- For styling use `css` preprocessor or `css-in-js`
- Use modern javascript features `(ES6+)` where applicable
- Use state management solution such as `Redux` or `React Context`
- Use `browser storage` to persist favourite gif's between sessions
- Write tests using `react-testing-library`
​
## Goals
- New set of gifs should appear on each button click or SPACEBAR press
- Each gif should be locked or unlocked by clicking it respectively
- Locked gifs should be immune to new fetches (hold same place in page grid)
- After page refresh or browser restart new set of gifs should contain prevesiously locked gifs
- App must be production ready and work on all modern browsers
- Implement sorting by `import_datetime` paramet