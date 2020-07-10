# GithubExplorer

This project uses the GitHub REST API v3 to get a list of users and their repositories. It is developed in Angular 10, with Angular Material as CSS Framework.

## Demo

Running app in [GitHub Pages](https://angelurq.github.io/github-explorer)

## Usage

### Users Page

Here is a GitHub users list, contains info like their profile picture, username, a link to GitHub page and a button to explore their repositories. Click on the arrow to get the next 4 users.

![Users page](https://i.imgur.com/Azmyicy.png)

### Repos Page

Once a user is selected, a list of repositories will show up, it contains info about the repo name, description, number of forks, number of issues and a link to GitHub. This section is paginated, so you can click in the arrows to go the next page.

![Repos page](https://i.imgur.com/WSFyWKl.png)

### Cache

All data retrieved from API will be stored in the local storage for the next two hours, so the next time you refresh the app this data will be loaded from the cache.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
