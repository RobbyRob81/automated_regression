# Cogility React App

---

## Get up and running

1. clone repo
2. yarn
3. yarn storybook

### Generators

---
The concept here is that everything that can be automated should be.  Easily add to the project with the following scrips:

#### Components

Running this command will generate a component with the given name.
`yarn g component <NAME>`

#### Page

Running this command will generate a page with the given name.
`yarn g page <NAME>`

#### Hook

Running this command will generate a hook with the given name.
`yarn g hook <NAME>`

#### Services

Running this command will generate a service with the given name.
`yarn g service <NAME>`

#### Util

Running this command will generate a hook with the given name.
`yarn g Util <NAME>`

### Living Style Guide

---
We use storybook to bring transparency into the development cycle and to achieve the following:

• Increased velocity
• Streamline the workflow
• Build components in isolation
• Mock hard to reach use cases
• Document use cases as stories
• Share and reuse everything
• Ship with confidence

You can read more about storybook [here](https://storybook.js.org/docs/basics/introduction/).

### Story structure

Each component should have a story for each state.  For example:

• default
• Empty
• Normalized

### Component Library

---
Our team uses Material UI and Material UI Core to power the front end.
read more about material ui [here](https://material-ui.com/)

Component API can be explored [here](https://material-ui.com/api/app-bar/)

### Testing

---

• Storybook
• Jest
• addon-storyshots
• storyshots-puppeteer

We use the testing pyramid to ensure we deliver high quality user experiences.  We've automated unit and most integration test cases by using jest, storybook and storyshots.  Our stories generate tests to cover:

• Unit tests (good coverage)
• Integration tests, visual regression
• End-to-end test, cross-browser visual regression

Having React coupled with Storybook and Storyshots, unlocks a different model: the Diamond model.
The diamond model for your UI/App means: little to zero unit tests, massive amount of integration tests, and zero manual tests.

What changed? Integration tests were avoided in the early days because they had a reputation of running slowly; granted — with most technologies this is still very true.

With Jest, React, and Storybook/Storyshots, this is (arguably) no longer the case. No longer must you bring up a browser for each test that leaves its traces in your test environment, or have flaky test suites run and fail randomly, using a not-so-smart test runner that forces you to run everything exactly when you didn’t want to. It’s an era where frontend tooling really does work, and hard becomes easy.

#### Structural Tests

If you already write stories for every component, you already are writing tests, and you just don’t know it yet. Given the thesis above, each of your stories can automatically become a tests:

    • Input is your story
    • Processing is simply rendering a story (which storybook already does)
    • Output is a generated snapshot

And this is what Storyshots does. Storyshots will verify that a React component renders correctly; and if you build multiple stories with a number of different properties then Storyshots can snapshot those as well, and those would be verified on every test run.

| Test Type | Level | Subject | Solution | Source |
| --------- | ----- | ------- | -------- | ------ |
| Browser Regression | Integration | Page/Component | Storyshots | Story |
| Visual Regression | Integration | Page/Component | Storyshots  | Story |
| Render | Integration | Page/Component | Storyshots  | Story |
| Interaction | Unit | Component | Storyshots  | Unit Test |

That said, you should definitely keep your “classic” unit tests for logic, library and domain model code. All these things you put in /lib, external packages that deal with your domain model and so on.

You can read more about it [here](https://medium.com/hiredscore-engineering/how-to-test-a-full-react-app-using-nothing-but-storybook-15f4c584e30a)

#### Commands

• `yarn storybook`, starts storybook at [localhost:9009](http://localhost:9009/)
• `yarn test:regression:all`, compares updated UI to image snapshots
• `yarn test:snapshots:all`, compares react tree to previous tree
• `yarn report` view coverage report in the browser
• `yarn report:update` updates test coverage report
• `yarn report:wallaby` view coverage report in the browser via Wallaby extension

run `yarn storybook` and `yarn test:coverage` in seperate terminals to get instant feedback on regression tests

#### Wallaby inline IDE test coverage

You can get test coverage feedback in your editor if you use Wallaby.js More info about it can be found [here](https://wallabyjs.com).  You'll need the pro version to use all the features, it's highly recommended.

    Setup
    1. Install IDE extension. More info [here](https://wallabyjs.com/download/)
    2. Configure via Automatic Configuration, select `Automatic Configuration <project directory>` More info [here](https://wallabyjs.com/docs/intro/config.html)
    3. You Should now see test coverage in your editor.
    4. Optional, you can view the app test coverage by going to [ http://localhost:51245]( http://localhost:51245) to see test coverage
