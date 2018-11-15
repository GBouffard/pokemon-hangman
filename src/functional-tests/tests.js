import { Selector } from 'testcafe';

const app = Selector('.App');
const gameLogo = Selector('.App__logo');
// StatusImage will be tested as a React component
const numberOfLives = Selector('.App__lives');
const nameProgress = Selector('.App__name-progress');
const aLetterButton = Selector('.App__alphabet-letter-button').nth(0);
const bLetterButton = Selector('.App__alphabet-letter-button').nth(1);
const newGameButton = Selector('.App__new-game-button');

fixture('At initial state - ')
  .page('https://gbouffard.github.io/pokemon-hangman/');

test('Renders the page and all its initial components', async (t) => {
  await t
    .expect(gameLogo.count).eql(1)
    .expect(numberOfLives.exists).ok()
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
  .page('https://gbouffard.github.io/pokemon-hangman/');

test('Starting a game update the views with the expected components', async (t) => {
  await t
    .click(newGameButton);

  await t
    .expect(app.innerText).notContains('CLICK NEW GAME')
    .expect(aLetterButton.count).eql(1)
    .expect(bLetterButton.exists).ok();
});