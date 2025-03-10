## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Git workflow

This repository utilizes [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow) for managing branches and pull requests.

### Commit Messages

The project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages format.

Branch name should always follow format `ANAl-123-short-description` where `ANAL-123` is Trello issue key.

This means you should commit with a message according to conventional commits format, with additional scope defined in parentheses, using lowercase letters:

```
git commit -m "feat(scope): add new feature"
```
