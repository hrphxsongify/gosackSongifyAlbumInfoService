# Developer Log for Songify

- [ ] Document all initial npm dependencies required with some description.
- [ ] Get a basic jest test to run
- [ ] Set up Circle CI to run when a pull request is made to the Github repo.
- [ ] Document Feature branch workflow for git.

## 7/3/19

Evening update: Turns out I was less ambitious than I was thinking I would be. Well, more like
webpack and eslint contiued to give me issues and only at the end of the day did I get them to be largely
resolved. So... lots left to do for project configuration.

Today I will resolve the following tickets.

- [ ] Document all initial npm dependencies required with some description.
- [ ] Get a basic jest test to run
- [ ] Set up Circle CI to run when a pull request is made to the Github repo.
- [ ] Document Feature branch workflow for git.
- [x] Document Webpack setup [webpack documentation](./webpack.md).

## 7/2/19

Spent time planning the application and gathering information.

We broke the app into modules and identified two services that provide data for each of the modules.
Max is providing the "album art" service and I am providing the "album metadata" service.

Beginning to get the repo setup so work can begin on my service in isolation. Created a template repo directory
and started populating the directory with node dependencies. Completed the documentation on applying a style guide,
and linting to a project. This guide can be found at [eslint documentation](./eslint-prettier-vscode.md).
