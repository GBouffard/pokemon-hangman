import { Selector } from 'testcafe';

fixture('Guillaume Pokemon Hangman Functional Tests - ')
  .page('https://gbouffard.github.io/pokemon-hangman/')
  .beforeEach(async t => {
    t.ctx.app = Selector('.App');
    t.ctx.gameLogo = Selector('.App__logo');
    // StatusImage will be tested as a React component
    t.ctx.numberOfLives = Selector('.App__lives');
    t.ctx.nameProgress = Selector('.App__name-progress');
    t.ctx.aLetterButton = Selector('.App__alphabet-letter-button').nth(0);
    t.ctx.bLetterButton = Selector('.App__alphabet-letter-button').nth(1);
    t.ctx.newGameButton = Selector('.App__new-game-button');
  });

test('Renders the page and all its initial components', async (t) => {
  await t
    .expect(t.ctx.gameLogo.count).eql(1)
    .expect(t.ctx.numberOfLives.exists).ok()
    .expect(t.ctx.nameProgress.innerText).contains('CLICK NEW GAME')
    .expect(t.ctx.newGameButton.count).eql(1)
    .expect(t.ctx.app.innerText).contains('CLICK NEW GAME');
});

test('Does not show the alphabet buttons at initial state', async (t) => {
  await t
    .expect(t.ctx.aLetterButton.count).eql(0)
    .expect(t.ctx.bLetterButton.exists).notOk();
});

test.skip('Starting a game', async (t) => {
});