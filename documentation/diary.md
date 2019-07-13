# Developer Log for Songify

# 7/12/19

Today, I need to get the database sorted out.

- [ ] A schema
- [ ] A model
- [ ] Getting data into the model (sort of done)
- [ ] Coming up with routes for querying the data
- [ ] What does the initial page-load query look like?
- [ ] Start working on a rough proxy

Was not able to get very much sorted today due to the unexpected difficulty of connecting to a pre-populated database. I am trying not to dive into 'knowing everything,' on the other hand, I can't just 'write code and trust that it works under the hood' if, you know, I have no freaking idea what to write because everything that I do write, fails. Will start from the ground up tomorrow and will complete a mongo tutorial. So sick of burning up days here.

## 7/11/19

Was able to create a basic script that will generate fake 'album' data with faker.
Used the following command to populate the database with the fake data.

`C:\Program Files\MongoDB\Server\4.0\bin\mongoimport.exe' --host localhost --port 27017 --db albums --drop --jsonArray --file .\albums.json`

Started laying some foundations for the database logic.

- [ ] Document all initial npm dependencies required with some description.
- [x] Get a basic jest test to run
- [x] Set up Circle CI to run when a pull request is made to the Github repo.
- [x] Document Feature branch workflow for git.

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
