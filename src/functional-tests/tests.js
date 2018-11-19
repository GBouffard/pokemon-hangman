import { Selector } from 'testcafe';

const app = Selector('.App');
const gameLogo = Selector('.App__logo');
// StatusImage will be tested as a React component
const numberOfLives = Selector('.App__lives');
const heart = Selector('.App__heart');
const nameProgress = Selector('.App__name-progress');
const letterButton = Selector('.App__alphabet-letter-button');
const aLetterButton = letterButton.nth(0);
const aHiddenLetterButton = Selector('.App__alphabet-letter-hidden-button').nth(0);
const bLetterButton = letterButton.nth(1);
const newGameButton = Selector('.App__new-game-button');
let nameProgressInitial;

fixture('At initial state - ')
  .page('https://gbouffard.github.io/pokemon-hangman/');

test('Renders the page and all its initial components', async (t) => {
  await t
    .expect(gameLogo.count).eql(1)
    .expect(numberOfLives.exists).notOk()
    .expect(heart.count).eql(0)
    .expect(nameProgress.innerText).contains('CLICK NEW GAME')
    .expect(newGameButton.count).eql(1)
    .expect(app.innerText).contains('CLICK NEW GAME');
});

test('Does not show the alphabet buttons', async (t) => {
  await t
    .expect(aLetterButton.count).eql(0)
    .expect(bLetterButton.exists).notOk();
});

fixture('When playing - ')
  .page('https://gbouffard.github.io/pokemon-hangman/')
  .beforeEach(async t => {
    await t
      .click(newGameButton);
    nameProgressInitial = nameProgress.innerText;
  });

test('Starting a game updates the views with the expected components', async (t) => {
  await t
    .expect(app.innerText).notContains('CLICK NEW GAME')
    .expect(app.innerText).contains('_')
    .expect(numberOfLives.exists).ok()
    .expect(heart.count).eql(6)
    .expect(aLetterButton.count).eql(1)
    .expect(aHiddenLetterButton.count).eql(0)
    .expect(bLetterButton.exists).ok()
    .expect(letterButton.count).eql(26);
});

test('Clicking a letter removes its button from the game', async (t) => {
  await t
    .click(aLetterButton)
    .expect(aHiddenLetterButton.count).eql(1);
});

test('Clicking a letter either remove a life or add a letter to the name progress', async (t) => {
  await t
    .click(bLetterButton);
  await t
    .expect(heart.count).lte(6)
    .expect(heart.count).gte(4)
    .expect(nameProgress.innerText.length).eql(nameProgressInitial.length)
});