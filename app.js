/* <------------------------------------------------
      31 CARD GAME - APP INFORMATION
   -------------------------------------------------> */
const APP_TITLE = 'Thirty-One';
const APP_CREDITS = 'Tre Thacker';
const APP_YEAR_CREATED = '2026';
const APP_VERSION = '1.00';
const APP_DEDICATION = '';

/* <------------------------------------------------
      CHANGELOG
			
			Version 1.00 - Release
   -------------------------------------------------> */
	 
const dom = {
      body: document.body,
      app: document.getElementById('app'),
      gameScaleFrame: document.getElementById('gameScaleFrame'),
      gameScaleInner: document.getElementById('gameScaleInner'),
      themeSelect: document.getElementById('themeSelect'),
      playerCountSelect: document.getElementById('playerCountSelect'),
      newGameBtn: document.getElementById('newGameBtn'),
      playerName: document.getElementById('playerName'),
      startBtn: document.getElementById('startBtn'),
      optionsBtn: document.getElementById('optionsBtn'),
      helpBtn: document.getElementById('helpBtn'),
      storeBtn: document.getElementById('storeBtn'),
      achievementsBtn: document.getElementById('achievementsBtn'),
      optionsModal: document.getElementById('optionsModal'),
      storeModal: document.getElementById('storeModal'),
      helpModal: document.getElementById('helpModal'),
      closeOptionsBtn: document.getElementById('closeOptionsBtn'),
      closeStoreBtn: document.getElementById('closeStoreBtn'),
      closeHelpBtn: document.getElementById('closeHelpBtn'),
      achievementsModal: document.getElementById('achievementsModal'),
      achievementsStatsGrid: document.getElementById('achievementsStatsGrid'),
      closeAchievementsBtn: document.getElementById('closeAchievementsBtn'),
      storeHomeView: document.getElementById('storeHomeView'),
      storeGalleryView: document.getElementById('storeGalleryView'),
      storeGalleryTitle: document.getElementById('storeGalleryTitle'),
      storeGalleryGrid: document.getElementById('storeGalleryGrid'),
      openCharacterStoreBtn: document.getElementById('openCharacterStoreBtn'),
      openBackgroundStoreBtn: document.getElementById('openBackgroundStoreBtn'),
      storeBackBtn: document.getElementById('storeBackBtn'),
			resetGameBtn: document.getElementById('resetGameBtn'),
			resetWarningModal: document.getElementById('resetWarningModal'),
			resetWarningContinueBtn: document.getElementById('resetWarningContinueBtn'),
			resetWarningCancelBtn: document.getElementById('resetWarningCancelBtn'),
			resetFinalModal: document.getElementById('resetFinalModal'),
			resetConfirmInput: document.getElementById('resetConfirmInput'),
			resetFinalConfirmBtn: document.getElementById('resetFinalConfirmBtn'),
			resetFinalCancelBtn: document.getElementById('resetFinalCancelBtn'),
			saveModal: document.getElementById('saveModal'),
			saveText: document.getElementById('saveText'),
			continueSavedBtn: document.getElementById('continueSavedBtn'),
			startFreshBtn: document.getElementById('startFreshBtn'),
			players: document.getElementById('players'),
      stockPile: document.getElementById('stockPile'),
      discardPile: document.getElementById('discardPile'),
      stockCount: document.getElementById('stockCount'),
      logList: document.getElementById('logList'),
      tableActions: document.querySelector('.table-actions'),
      standBtn: document.getElementById('standBtn'),
			bankPlayerTitle: document.getElementById('bankPlayerTitle'),
			playerBankAmount: document.getElementById('playerBankAmount'),
			gameBankAmount: document.getElementById('gameBankAmount'),
      knockBtn: document.getElementById('knockBtn'),
      roundModal: document.getElementById('roundModal'),
      modalTitle: document.getElementById('modalTitle'),
      modalText: document.getElementById('modalText'),
      revealGrid: document.getElementById('revealGrid'),
      nextRoundBtn: document.getElementById('nextRoundBtn'),
      toast: document.getElementById('toast'),
      achievementToast: document.getElementById('achievementToast'),
      turboStatusToast: document.getElementById('turboStatusToast'),
      gameLogToggleBtn: document.getElementById('gameLogToggleBtn')
    };

    const SUITS = [
      { key: 'spades', symbol: '♠', red: false },
      { key: 'hearts', symbol: '♥', red: true },
      { key: 'diamonds', symbol: '♦', red: true },
      { key: 'clubs', symbol: '♣', red: false }
    ];

    const RANKS = [
      { rank: 'A', value: 11 },
      { rank: '2', value: 2 },
      { rank: '3', value: 3 },
      { rank: '4', value: 4 },
      { rank: '5', value: 5 },
      { rank: '6', value: 6 },
      { rank: '7', value: 7 },
      { rank: '8', value: 8 },
      { rank: '9', value: 9 },
      { rank: '10', value: 10 },
      { rank: 'J', value: 10 },
      { rank: 'Q', value: 10 },
      { rank: 'K', value: 10 }
    ];

    const STARTING_LIVES = 3;
    const HUMAN_INDEX = 0;
		const PLAYER_NAME_SAVE_KEY = 'thirtyOnePlayerName';
		const GAME_STATE_SAVE_KEY = 'thirtyOneSavedGame';
		const PLAYER_BANK_SAVE_KEY = 'thirtyOnePlayerBank';
		const THEME_SAVE_KEY = 'thirtyOneTheme';
		const PLAYER_COUNT_SAVE_KEY = 'thirtyOnePlayerCount';
		const PLAYER_ACHIEVEMENTS_SAVE_KEY = 'thirtyOnePlayerAchievements';
		const PLAYER_ICON_SAVE_KEY = 'thirtyOnePlayerIcon';
		const PLAYER_BACKGROUND_SAVE_KEY = 'thirtyOnePlayerBackground';
		const PLAYER_PURCHASES_SAVE_KEY = 'thirtyOnePlayerPurchases';
		const PLAYER_AVATAR_STATS_SAVE_KEY = 'thirtyOneAvatarStats';
		const PLAYER_GAME_STATS_SAVE_KEY = 'thirtyOneGameStats';
		const GAME_LOG_VISIBLE_SAVE_KEY = 'thirtyOneGameLogVisible';
		const GAME_LOG_TOGGLE_MAX_WIDTH = 1500;
		const RESET_CONFIRM_TEXT = 'RESET MY GAME';
		
		const GAME_STAT_DEFAULTS = {
		  gamesPlayed: 0,
		  gamesWon: 0,
		  roundsPlayed: 0,
		  roundsWon: 0,
		  knocks: 0,
		  stands: 0,
		  exactThirtyOnes: 0
		};		
		
		const ACHIEVEMENT_DEFINITIONS = [
		  {
		    id: 'firstGame',
		    title: 'First Game',
		    description: 'Play your first game.',
		    statName: 'gamesPlayed',
		    requiredValue: 1
		  },
		  {
		    id: 'firstRound',
		    title: 'First Round',
		    description: 'Play your first round.',
		    statName: 'roundsPlayed',
		    requiredValue: 1
		  },
		  {
		    id: 'firstKnock',
		    title: 'First Knock',
		    description: 'Knock for the first time.',
		    statName: 'knocks',
		    requiredValue: 1
		  },
		  {
		    id: 'firstStand',
		    title: 'First Stand',
		    description: 'Stand for the first time.',
		    statName: 'stands',
		    requiredValue: 1
		  },
		  {
		    id: 'firstThirtyOne',
		    title: 'Perfect 31',
		    description: 'Score exactly 31.',
		    statName: 'exactThirtyOnes',
		    requiredValue: 1
		  },
		  {
		    id: 'firstRoundWin',
		    title: 'Round Winner',
		    description: 'Win your first round.',
		    statName: 'roundsWon',
		    requiredValue: 1
		  },
		  {
		    id: 'firstGameWin',
		    title: 'Game Winner',
		    description: 'Win your first game.',
		    statName: 'gamesWon',
		    requiredValue: 1
		  },
		  {
		    id: 'firstImagePurchased',
		    title: 'First Purchase',
		    description: 'Purchase your first store image.',
		    statSource: 'avatar',
		    statName: 'imagesPurchased',
		    requiredValue: 1
		  },
		  {
		    id: 'firstAvatarChange',
		    title: 'New Look',
		    description: 'Change your player avatar for the first time.',
		    statSource: 'avatar',
		    statName: 'avatarChanges',
		    requiredValue: 1
		  },
		  {
		    id: 'firstBackgroundChange',
		    title: 'Fresh Background',
		    description: 'Change your player background for the first time.',
		    statSource: 'avatar',
		    statName: 'backgroundChanges',
		    requiredValue: 1
		  },
		  {
		    id: 'fiveRoundsPlayed',
		    title: 'Getting Warmed Up',
		    description: 'Complete 5 rounds.',
		    statName: 'roundsPlayed',
		    requiredValue: 5
		  },
		  {
		    id: 'tenRoundsPlayed',
		    title: 'Table Regular',
		    description: 'Complete 10 rounds.',
		    statName: 'roundsPlayed',
		    requiredValue: 10
		  },
		  {
		    id: 'fiveRoundWins',
		    title: 'Round Streaker',
		    description: 'Win 5 rounds.',
		    statName: 'roundsWon',
		    requiredValue: 5
		  },
		  {
		    id: 'tenKnocks',
		    title: 'Knock Master',
		    description: 'Knock 10 times.',
		    statName: 'knocks',
		    requiredValue: 10
		  },
		  {
		    id: 'fiveStands',
		    title: 'Standing Strong',
		    description: 'Stand 5 times.',
		    statName: 'stands',
		    requiredValue: 5
		  },
		  {
		    id: 'fiveThirtyOnes',
		    title: '31 Hunter',
		    description: 'Score exactly 31 five times.',
		    statName: 'exactThirtyOnes',
		    requiredValue: 5
		  },
		  {
		    id: 'threeGameWins',
		    title: 'Game Champion',
		    description: 'Win 3 games.',
		    statName: 'gamesWon',
		    requiredValue: 3
		  },
		  {
		    id: 'fiveImagesPurchased',
		    title: 'Collector',
		    description: 'Purchase 5 store images.',
		    statSource: 'avatar',
		    statName: 'imagesPurchased',
		    requiredValue: 5
		  },
		  {
		    id: 'tenImagesPurchased',
		    title: 'Big Spender',
		    description: 'Purchase 10 store images.',
		    statSource: 'avatar',
		    statName: 'imagesPurchased',
		    requiredValue: 10
		  },
		  {
		    id: 'fiveAvatarChanges',
		    title: 'Style Switcher',
		    description: 'Change your player avatar 5 times.',
		    statSource: 'avatar',
		    statName: 'avatarChanges',
		    requiredValue: 5
		  },
		  {
		    id: 'fiveBackgroundChanges',
		    title: 'Scene Setter',
		    description: 'Change your player background 5 times.',
		    statSource: 'avatar',
		    statName: 'backgroundChanges',
		    requiredValue: 5
		  },
		  {
		    id: 'twentyRoundsPlayed',
		    title: 'Card Shark',
		    description: 'Complete 20 rounds.',
		    statName: 'roundsPlayed',
		    requiredValue: 20
		  },
		  {
		    id: 'tenRoundWins',
		    title: 'Round Legend',
		    description: 'Win 10 rounds.',
		    statName: 'roundsWon',
		    requiredValue: 10
		  },
		  {
		    id: 'twentyKnocks',
		    title: 'Knocking Machine',
		    description: 'Knock 20 times.',
		    statName: 'knocks',
		    requiredValue: 20
		  },
		  {
		    id: 'tenStands',
		    title: 'Stand Specialist',
		    description: 'Stand 10 times.',
		    statName: 'stands',
		    requiredValue: 10
		  },
		  {
		    id: 'tenThirtyOnes',
		    title: '31 Master',
		    description: 'Score exactly 31 ten times.',
		    statName: 'exactThirtyOnes',
		    requiredValue: 10
		  },
		  {
		    id: 'fiveGameWins',
		    title: 'Tournament Winner',
		    description: 'Win 5 games.',
		    statName: 'gamesWon',
		    requiredValue: 5
		  }
		];

		const DEFAULT_UNLOCKED_ACHIEVEMENTS = [];	
		
/* <------------------------------------------------
      AVATAR STORE IMAGE REGISTRY
   -------------------------------------------------> */
		const DEFAULT_PLAYER_AVATAR_ID = 'newplayer';

		const BACKGROUND_IMAGE_REGISTRY = [
		  { id: 'back1', fileName: 'back1.webp', path: 'image/background/back1.webp', unlockedByDefault: true, price: 0 },
		  { id: 'back11', fileName: 'back11.webp', path: 'image/background/back11.webp', unlockedByDefault: true, price: 0 },
		  { id: 'back27', fileName: 'back27.webp', path: 'image/background/back27.webp', unlockedByDefault: true, price: 0 },
		  { id: 'back32', fileName: 'back32.webp', path: 'image/background/back32.webp', unlockedByDefault: true, price: 0 },
		  ...Array.from({ length: 33 }, (_, index) => {
		    const number = index + 1;
		    const id = `back${number}`;

		    return {
		      id,
		      fileName: `${id}.webp`,
		      path: `image/background/${id}.webp`,
		      unlockedByDefault: false,
		      price: 10 + Math.min(40, Math.floor((number - 1) / 4) * 5)
		    };
		  }).filter(background => !['back1', 'back11', 'back27', 'back32'].includes(background.id))
		];

		const PLAYER_IMAGE_REGISTRY = [
		  { id: 'newplayer', fileName: 'newplayer.webp', path: 'image/player/newplayer.webp', unlockedByDefault: true, price: 0, isDefault: true },
		  { id: 'man1', fileName: 'man1.webp', path: 'image/player/man1.webp', unlockedByDefault: true, price: 0 },
		  { id: 'man2', fileName: 'man2.webp', path: 'image/player/man2.webp', unlockedByDefault: true, price: 0 },
		  { id: 'man3', fileName: 'man3.webp', path: 'image/player/man3.webp', unlockedByDefault: true, price: 0 },
		  { id: 'woman1', fileName: 'woman1.webp', path: 'image/player/woman1.webp', unlockedByDefault: true, price: 0 },
		  { id: 'woman2', fileName: 'woman2.webp', path: 'image/player/woman2.webp', unlockedByDefault: true, price: 0 },
		  { id: 'woman3', fileName: 'woman3.webp', path: 'image/player/woman3.webp', unlockedByDefault: true, price: 0 },
		  { id: 'man4', fileName: 'man4.webp', path: 'image/player/man4.webp', unlockedByDefault: false, price: 10 },
		  { id: 'woman4', fileName: 'woman4.webp', path: 'image/player/woman4.webp', unlockedByDefault: false, price: 10 },
		  { id: 'man5', fileName: 'man5.webp', path: 'image/player/man5.webp', unlockedByDefault: false, price: 15 },
		  { id: 'woman5', fileName: 'woman5.webp', path: 'image/player/woman5.webp', unlockedByDefault: false, price: 15 },
		  { id: 'cat', fileName: 'cat.webp', path: 'image/player/cat.webp', unlockedByDefault: false, price: 20 },
		  { id: 'dog', fileName: 'dog.webp', path: 'image/player/dog.webp', unlockedByDefault: false, price: 20 },
		  { id: 'frog', fileName: 'frog.webp', path: 'image/player/frog.webp', unlockedByDefault: false, price: 25 },
		  { id: 'horse', fileName: 'horse.webp', path: 'image/player/horse.webp', unlockedByDefault: false, price: 25 },
		  { id: 'man6', fileName: 'man6.webp', path: 'image/player/man6.webp', unlockedByDefault: false, price: 30 },
		  { id: 'woman6', fileName: 'woman6.webp', path: 'image/player/woman6.webp', unlockedByDefault: false, price: 30 },
		  { id: 'man7', fileName: 'man7.webp', path: 'image/player/man7.webp', unlockedByDefault: false, price: 35 },
		  { id: 'woman7', fileName: 'woman7.webp', path: 'image/player/woman7.webp', unlockedByDefault: false, price: 35 },
		  { id: 'alienman', fileName: 'alienman.webp', path: 'image/player/alienman.webp', unlockedByDefault: false, price: 40 },
		  { id: 'alienwoman', fileName: 'alienwoman.webp', path: 'image/player/alienwoman.webp', unlockedByDefault: false, price: 40 },
		  { id: 'man8', fileName: 'man8.webp', path: 'image/player/man8.webp', unlockedByDefault: false, price: 40 },
		  { id: 'woman8', fileName: 'woman8.webp', path: 'image/player/woman8.webp', unlockedByDefault: false, price: 40 },
		  { id: 'man9', fileName: 'man9.webp', path: 'image/player/man9.webp', unlockedByDefault: false, price: 45 },
		  { id: 'woman9', fileName: 'woman9.webp', path: 'image/player/woman9.webp', unlockedByDefault: false, price: 45 },
		  { id: 'man10', fileName: 'man10.webp', path: 'image/player/man10.webp', unlockedByDefault: false, price: 50 },
		  { id: 'woman10', fileName: 'woman10.webp', path: 'image/player/woman10.webp', unlockedByDefault: false, price: 50 }
		];	
		const AI_NAME_POOL = [
		  'Ava',
		  'Knox',
		  'Luna',
		  'Milo',
		  'Nova',
		  'Zane',
		  'Ivy',
		  'Jax',
		  'Skye',
		  'Ryder',
		  'Aria',
		  'Kai',
		  'Blaze',
		  'Echo',
		  'Atlas',
		  'Ruby',
		  'Finn',
		  'Jade',
		  'Axel',
		  'Niko',
		  'Hazel',
		  'Stormy',
		  'Vega',
		  'Remy',
		  'Orion',
			'Lilly',
			'Jaiden',
			'Asher',
			'Maddy',
			'April',
			'Megan',
			'Cisco',
			'Donovan',
			'Chris',
			'Brian',
			'Heather',
			'Rob',
			'Paco',
			'Connie',
			'Katie',
			'Connor',
			'Steven',
			'Amber',
			'Tre',
			'Kristen'
		];
		
/* <------------------------------------------------
      FAMILY AI NAME MODE
   -------------------------------------------------> */
		const FAMILY_MODE_HUMAN_NAMES = ['tre-family', 'april-family'];
		const FAMILY_REQUIRED_AI_NAMES = ['Heather', 'Rob'];
		const FAMILY_AI_NAME_POOL = [
		  'Heather',
		  'Rob',
		  'Paco',
		  'Connie',
		  'April',
		  'Tre',
		  'Brian',
		  'Katie',
		  'Amber',
		  'Connor',
		  'Steven',
		  'Lilly',
		  'Luna',
		  'Megan',
		  'Donovan',
		  'Cisco',
		  'Aria',
		  'Jaiden',
		  'Asher',
		  'Zane',
		  'Kristen',
		  'Chris',
		  'Maddy'
		];

/* <------------------------------------------------
      AI AVATAR ASSIGNMENT DATA
   -------------------------------------------------> */
		const AI_NAME_GENDER_MAP = {
		  ava: 'female',
		  knox: 'male',
		  luna: 'female',
		  milo: 'male',
		  nova: 'female',
		  zane: 'male',
		  ivy: 'female',
		  jax: 'male',
		  skye: 'female',
		  ryder: 'male',
		  aria: 'female',
		  kai: 'female',
		  blaze: 'male',
		  echo: 'female',
		  atlas: 'male',
		  ruby: 'female',
		  finn: 'male',
		  jade: 'female',
		  axel: 'male',
		  niko: 'male',
		  hazel: 'female',
		  stormy: 'female',
		  vega: 'female',
		  remy: 'male',
		  orion: 'male',
		  lilly: 'female',
		  jaiden: 'female',
		  asher: 'female',
		  maddy: 'female',
		  april: 'female',
		  megan: 'female',
		  cisco: 'male',
		  donovan: 'male',
		  chris: 'male',
		  brian: 'male',
		  heather: 'female',
		  rob: 'male',
		  paco: 'male',
		  connie: 'female',
		  katie: 'female',
		  connor: 'male',
		  steven: 'male',
		  amber: 'female',
		  tre: 'male',
		  kristen: 'female'
		};

		const AI_MALE_AVATAR_IDS = Array.from({ length: 10 }, (_, index) => `man${index + 1}`);
		const AI_FEMALE_AVATAR_IDS = Array.from({ length: 10 }, (_, index) => `woman${index + 1}`);		
		
		const knockSound = new Audio('audio/3knocks.mp3');
		knockSound.preload = 'auto';

    let state = createEmptyState();

/* <------------------------------------------------
    STATE CREATION
   -------------------------------------------------> */
    function createEmptyState() {
      return {
        deck: [],
        discard: [],
        players: [],
        currentPlayer: 0,
        phase: 'setup',
        drawnCard: null,
        hasDrawn: false,
        knocker: null,
        finalTurnsRemaining: 0,
        roundNumber: 0,
        gameOver: false,
        turboMode: false,
        turboNoticeShown: false,
        familyMode: false,
				playerBank: 9,
				gameBank: 0,
        playerCount: 4,
        log: []
      };
    }

/* <------------------------------------------------
  	DECK AND CARD HELPERS
   -------------------------------------------------> */
    function createDeck() {
      const deck = [];
      for (const suit of SUITS) {
        for (const rank of RANKS) {
          deck.push({
            id: `${rank.rank}-${suit.key}-${Math.random().toString(36).slice(2)}`,
            rank: rank.rank,
            value: rank.value,
            suit: suit.key,
            symbol: suit.symbol,
            red: suit.red
          });
        }
      }
      return shuffle(deck);
    }

    function shuffle(cards) {
      const copy = [...cards];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    function drawFromDeck() {
      if (state.deck.length === 0) {
        recycleDiscardIntoDeck();
      }
      return state.deck.pop() || null;
    }

    function recycleDiscardIntoDeck() {
      if (state.discard.length <= 1) return;
      const top = state.discard.pop();
      state.deck = shuffle(state.discard);
      state.discard = top ? [top] : [];
      logMessage('Stock was reshuffled from the discard pile.');
    }

/* <------------------------------------------------
    SCORING
   -------------------------------------------------> */
    function scoreHand(hand) {
      const rankSet = new Set(hand.map(card => card.rank));
      if (rankSet.size === 1 && hand.length === 3) {
        return { score: 30.5, label: 'Three of a kind', suit: 'mixed' };
      }

      const suitTotals = {};
      for (const card of hand) {
        suitTotals[card.suit] = (suitTotals[card.suit] || 0) + card.value;
      }

      let bestSuit = null;
      let bestScore = 0;
      for (const [suit, total] of Object.entries(suitTotals)) {
        if (total > bestScore) {
          bestSuit = suit;
          bestScore = total;
        }
      }

      return {
        score: bestScore,
        label: `${bestScore} ${bestSuit || ''}`.trim(),
        suit: bestSuit
      };
    }

    function scoreSortValue(player) {
      return scoreHand(player.hand).score;
    }
  
/* <------------------------------------------------
      LIFE LOSS MESSAGE HELPER
   -------------------------------------------------> */
  function formatLifeLossMessage(losers, amount) {
    const names = losers.map(player => player.name).join(', ');
    const verb = losers.length === 1 ? 'loses' : 'lose';
    const lifeText = amount === 1 ? '1 coin' : `${amount} coins`;
    return `${names} ${verb} ${lifeText}.`;
  }
  
/* <------------------------------------------------
      GAME BANK COIN TRACKING
   -------------------------------------------------> */
  function chargeLifeLoss(losers, amount) {

    for (const loser of losers) {

      for (let i = 0; i < amount; i++) {

        if (loser.lives > 0) {

          loser.lives -= 1;
          state.gameBank += 1;

          if (loser.lives === 0 && !loser.onYourLips) {
            loser.onYourLips = true;
            logMessage(`${loser.name} is ON THEIR LIPS! 👄 One chance left!`);
            break;
          }

        } else if (loser.onYourLips) {

          loser.onYourLips = false;
          loser.eliminated = true;
        }

      }

    }

  }

/* <------------------------------------------------
      HUMAN ELIMINATION TURBO MODE
   -------------------------------------------------> */
  function checkHumanTurboMode() {
    const humanPlayer = state.players[HUMAN_INDEX];

    if (
      humanPlayer &&
      humanPlayer.eliminated &&
      !state.turboMode
    ) {

      state.turboMode = true;

      if (!state.turboNoticeShown) {
        state.turboNoticeShown = true;

        dom.modalTitle.textContent = 'Turbo Mode';

        dom.modalText.textContent =
          `${humanPlayer.name}, you have been taken out. Switching to turbo mode to finish the game.`;

        dom.revealGrid.innerHTML = '';
        dom.nextRoundBtn.textContent = 'OK';

        dom.roundModal.classList.add('show');
      }
    }
  }  

/* <------------------------------------------------
    GAME FLOW
   -------------------------------------------------> */
  function startGame(chargeEntryFee = false) {
    clearSavedGame();
    const enteredName = dom.playerName.value.trim() || 'Player';
    const playerData = prepareHumanPlayerName(enteredName);
    const name = playerData.displayName;
    const playerCount = Number(dom.playerCountSelect.value) || 4;

    dom.playerName.value = enteredName;
    savePlayerName(enteredName);
    savePlayerCount(playerCount);

    const currentBank = loadPlayerBank();

    if (chargeEntryFee && currentBank < STARTING_LIVES) {
      toast(`<span class="log-player-0">${escapeHtml(name)}</span> needs 3 coins to start a new game.`);
      return;
    }

    const updatedBank = chargeEntryFee ? currentBank - STARTING_LIVES : currentBank;
    savePlayerBank(updatedBank);

    dom.logList.innerHTML = '';

    state = createEmptyState();
    state.playerBank = updatedBank;
    state.gameBank = 0;
    state.playerCount = playerCount;
    state.familyMode = playerData.familyMode;
    state.players = createPlayersForNewGame(name, playerCount, state.familyMode);
    state.phase = 'playing';
    logMessage('New game started.');
    startRound();
	}
    function createPlayer(name, isAI, seat, avatarId = DEFAULT_PLAYER_AVATAR_ID, backgroundId = 'back1') {
      return {
        name,
        isAI,
        seat,
        avatarId,
        backgroundId,
        hand: [],
        lives: STARTING_LIVES,
        onYourLips: false,
        eliminated: false,
        stood: false
      };
    }
  
/* <------------------------------------------------
      LOCAL SAVE SYSTEM
   -------------------------------------------------> */
  function savePlayerName(name) {
    localStorage.setItem(PLAYER_NAME_SAVE_KEY, name);
  }

  function loadPlayerName() {
    const savedName = localStorage.getItem(PLAYER_NAME_SAVE_KEY);
    if (savedName) dom.playerName.value = savedName;
  }
  
  function loadPlayerBank() {
    const savedBank = Number(localStorage.getItem(PLAYER_BANK_SAVE_KEY));
    return Number.isFinite(savedBank) ? savedBank : 9;
  }
	
  function saveTheme(themeName) {
    localStorage.setItem(THEME_SAVE_KEY, themeName);
  }

  function loadTheme() {
    return localStorage.getItem(THEME_SAVE_KEY) || 'theme-classic';
  }	
	
/* <------------------------------------------------
      PLAYER COUNT AND AI NAME SYSTEM
   -------------------------------------------------> */
  function savePlayerCount(playerCount) {
    localStorage.setItem(PLAYER_COUNT_SAVE_KEY, String(playerCount));
  }

  function loadPlayerCount() {
    const savedPlayerCount = Number(localStorage.getItem(PLAYER_COUNT_SAVE_KEY));
    return Number.isInteger(savedPlayerCount) && savedPlayerCount >= 4 && savedPlayerCount <= 8 ? savedPlayerCount : 4;
  }

  function normalizePlayerName(name) {
    return String(name).trim().toLowerCase();
  }

  function isFamilyModeEntry(playerName) {
    return FAMILY_MODE_HUMAN_NAMES.includes(normalizePlayerName(playerName));
  }

  function getFamilyDisplayName(playerName) {
    const normalizedName = normalizePlayerName(playerName);

    if (normalizedName === 'tre-family') return 'Tre';
    if (normalizedName === 'april-family') return 'April';

    return String(playerName).trim() || 'Player';
  }

  function prepareHumanPlayerName(playerName) {
    const familyMode = isFamilyModeEntry(playerName);

    return {
      displayName: familyMode ? getFamilyDisplayName(playerName) : String(playerName).trim() || 'Player',
      familyMode
    };
  }

  function getAvailableAIName(usedNames, namePool = AI_NAME_POOL) {
    const shuffledNames = shuffle(namePool);

    for (const aiName of shuffledNames) {
      if (!usedNames.includes(normalizePlayerName(aiName))) {
        return aiName;
      }
    }

    return `Player ${usedNames.length + 1}`;
  }

  function getRandomAINames(totalAIPlayers, humanPlayerName, familyMode = false) {
    const usedNames = [normalizePlayerName(humanPlayerName)];
    const aiNames = [];
    const namePool = familyMode ? FAMILY_AI_NAME_POOL : AI_NAME_POOL;

    if (familyMode) {
      FAMILY_REQUIRED_AI_NAMES.forEach(aiName => {
        if (
          aiNames.length < totalAIPlayers &&
          !usedNames.includes(normalizePlayerName(aiName))
        ) {
          aiNames.push(aiName);
          usedNames.push(normalizePlayerName(aiName));
        }
      });
    }

    while (aiNames.length < totalAIPlayers) {
      const aiName = getAvailableAIName(usedNames, namePool);
      aiNames.push(aiName);
      usedNames.push(normalizePlayerName(aiName));
    }

    return aiNames;
  }

  function resolveDuplicateAINames() {
    if (!state.players[HUMAN_INDEX]) return;

    const humanPlayerName = state.players[HUMAN_INDEX].name;
    const usedNames = [normalizePlayerName(humanPlayerName)];
    const namePool = state.familyMode ? FAMILY_AI_NAME_POOL : AI_NAME_POOL;

    state.players.forEach((player, index) => {
      if (index === HUMAN_INDEX) return;

      const currentName = normalizePlayerName(player.name);

      if (usedNames.includes(currentName)) {
        player.name = getAvailableAIName(usedNames, namePool);
      }

      usedNames.push(normalizePlayerName(player.name));
    });
  }

/* <------------------------------------------------
      AI AVATAR ASSIGNMENT HELPERS
   -------------------------------------------------> */
  function getAIGenderByName(playerName) {
    return AI_NAME_GENDER_MAP[normalizePlayerName(playerName)] || 'male';
  }

  function getRandomUnusedItem(items, usedItems) {
    const availableItems = items.filter(item => !usedItems.includes(item));
    const sourceItems = availableItems.length > 0 ? availableItems : items;

    return shuffle(sourceItems)[0];
  }

  function getAIAvatarIdByGender(gender, usedAvatarIds) {
    const avatarPool = gender === 'female' ? AI_FEMALE_AVATAR_IDS : AI_MALE_AVATAR_IDS;
    return getRandomUnusedItem(avatarPool, usedAvatarIds);
  }

  function getAIBackgroundId(usedBackgroundIds) {
    const backgroundIds = BACKGROUND_IMAGE_REGISTRY.map(background => background.id);
    return getRandomUnusedItem(backgroundIds, usedBackgroundIds);
  }
	
  function resolveAIAvatarDuplicatesAfterHumanChange() {
    const usedAvatarIds = [loadSelectedPlayerIcon()];
    const usedBackgroundIds = [loadSelectedPlayerBackground()];

    state.players.forEach((player, index) => {
      if (index === HUMAN_INDEX || !player.isAI) return;

      if (!player.avatarId || usedAvatarIds.includes(player.avatarId)) {
        const aiGender = getAIGenderByName(player.name);
        player.avatarId = getAIAvatarIdByGender(aiGender, usedAvatarIds);
      }

      usedAvatarIds.push(player.avatarId);

      if (!player.backgroundId || usedBackgroundIds.includes(player.backgroundId)) {
        player.backgroundId = getAIBackgroundId(usedBackgroundIds);
      }

      usedBackgroundIds.push(player.backgroundId);
    });

    localStorage.setItem(GAME_STATE_SAVE_KEY, JSON.stringify(state));
  }	

  function getSeatLayout(playerCount) {
    const seatLayouts = {
      4: ['bottom', 'left', 'top', 'right'],
      5: ['bottom', 'lower-left', 'upper-left', 'upper-right', 'lower-right'],
      6: ['bottom', 'lower-left', 'left', 'top', 'right', 'lower-right'],
      7: ['bottom', 'lower-left', 'left', 'upper-left', 'upper-right', 'right', 'lower-right'],
      8: ['bottom', 'lower-left', 'left', 'upper-left', 'top', 'upper-right', 'right', 'lower-right']
    };

    return seatLayouts[playerCount] || seatLayouts[4];
  }

  function createPlayersForNewGame(playerName, playerCount, familyMode = false) {
    const seats = getSeatLayout(playerCount);
    const aiNames = getRandomAINames(playerCount - 1, playerName, familyMode);
    const usedAIAvatarIds = [loadSelectedPlayerIcon()];
    const usedAIBackgroundIds = [loadSelectedPlayerBackground()];

    return [
      createPlayer(playerName, false, seats[0]),
      ...aiNames.map((aiName, index) => {
        const aiGender = getAIGenderByName(aiName);
        const aiAvatarId = getAIAvatarIdByGender(aiGender, usedAIAvatarIds);
        const aiBackgroundId = getAIBackgroundId(usedAIBackgroundIds);

        usedAIAvatarIds.push(aiAvatarId);
        usedAIBackgroundIds.push(aiBackgroundId);

        return createPlayer(aiName, true, seats[index + 1], aiAvatarId, aiBackgroundId);
      })
    ];
  }

  function savePlayerBank(amount) {
    localStorage.setItem(PLAYER_BANK_SAVE_KEY, String(amount));
  }

  function saveGameStateBeforeHumanTurn() {
    if (state.phase !== 'playing' || state.currentPlayer !== HUMAN_INDEX || state.gameOver) return;
    localStorage.setItem(GAME_STATE_SAVE_KEY, JSON.stringify(state));
  }

  function getSavedGameState() {
    const savedGame = localStorage.getItem(GAME_STATE_SAVE_KEY);
    if (!savedGame) return null;

    try {
    return JSON.parse(savedGame);
    } catch {
    clearSavedGame();
    return null;
    }
  }

  function clearSavedGame() {
    localStorage.removeItem(GAME_STATE_SAVE_KEY);
  }

  function showSavedGamePrompt(savedGame) {
    const savedName = localStorage.getItem(PLAYER_NAME_SAVE_KEY) || savedGame.players?.[HUMAN_INDEX]?.name || 'Player';
    dom.saveText.textContent = `Hey ${savedName}!`;
    dom.saveModal.classList.add('show');
  }

  function continueSavedGame() {
    const savedGame = getSavedGameState();
    if (!savedGame) {
    startGame();
    return;
    }

    state = savedGame;
    state.playerBank = Number.isFinite(state.playerBank) ? state.playerBank : loadPlayerBank();
    state.gameBank = Number.isFinite(state.gameBank) ? state.gameBank : 0;
    state.playerCount = Number.isInteger(state.playerCount) ? state.playerCount : 4;
		state.familyMode = Boolean(state.familyMode);
    dom.playerCountSelect.value = String(state.playerCount);
    dom.playerName.value = localStorage.getItem(PLAYER_NAME_SAVE_KEY) || state.players[HUMAN_INDEX]?.name || dom.playerName.value || 'Player';
    dom.saveModal.classList.remove('show');
    render();
    renderSavedGameLog();
  }

  function startFreshGameFromSavePrompt() {
    clearSavedGame();
    dom.saveModal.classList.remove('show');
    startGame();
  }
	
  function applyOptions() {
    const enteredName = dom.playerName.value.trim() || 'Player';
    const playerData = prepareHumanPlayerName(enteredName);
    const name = playerData.displayName;
    const themeName = dom.themeSelect.value;
    const playerCount = Number(dom.playerCountSelect.value) || 4;

    dom.playerName.value = enteredName;
    savePlayerName(enteredName);
    saveTheme(themeName);
    savePlayerCount(playerCount);
    dom.body.className = themeName;

    if (state.players[HUMAN_INDEX]) {
      state.players[HUMAN_INDEX].name = name;
      state.familyMode = playerData.familyMode;
      resolveDuplicateAINames();
    }

    render();
    saveGameStateBeforeHumanTurn();
    closeOptionsModal();
  }	

  function initializeSavedGameFlow() {
    loadPlayerName();

    const savedTheme = loadTheme();
    const savedPlayerCount = loadPlayerCount();
    dom.themeSelect.value = savedTheme;
    dom.playerCountSelect.value = String(savedPlayerCount);
    dom.body.className = savedTheme;

    const savedGame = getSavedGameState();

    if (savedGame) {
      showSavedGamePrompt(savedGame);
      return;
    }

    startGame();
  }

    function startRound() {
      state.roundNumber += 1;
      state.deck = createDeck();
      state.discard = [];
      state.drawnCard = null;
      state.hasDrawn = false;
      state.knocker = null;
      state.finalTurnsRemaining = 0;
      state.phase = 'playing';
      state.gameOver = false;

      for (const player of state.players) {
        player.hand = [];
        player.stood = false;
      }

      for (let i = 0; i < 3; i++) {
        for (const player of activePlayers()) {
          player.hand.push(drawFromDeck());
        }
      }

      state.discard.push(drawFromDeck());
      state.currentPlayer = nextActiveIndex(-1);
      logMessage(`Round ${state.roundNumber} begins.`);
      closeModal();
      render();
      checkImmediateThirtyOne();
    saveGameStateBeforeHumanTurn();
      continueIfAI();
    }

    function activePlayers() {
      return state.players.filter(player => !player.eliminated);
    }

    function nextActiveIndex(fromIndex) {
      for (let step = 1; step <= state.players.length; step++) {
        const index = (fromIndex + step + state.players.length) % state.players.length;
        if (!state.players[index].eliminated) return index;
      }
      return 0;
    }

    function currentPlayer() {
      return state.players[state.currentPlayer];
    }

    function humanCanAct() {
      return state.phase === 'playing' && state.currentPlayer === HUMAN_INDEX && !state.gameOver;
    }

    function drawCard(source) {
      if (!humanCanAct() || state.hasDrawn) return;
      const player = currentPlayer();
      const card = source === 'discard' ? state.discard.pop() : drawFromDeck();
      if (!card) return;
      player.hand.push(card);
      state.drawnCard = card;
      state.hasDrawn = true;
      logMessage(`${player.name} drew from ${source}. Choose a card to discard.`);
      render();
    }

    function discardCard(cardId) {
      if (!humanCanAct() || !state.hasDrawn) return;
      const player = currentPlayer();
      const index = player.hand.findIndex(card => card.id === cardId);
      if (index === -1 || player.hand.length <= 3) return;
      const [discarded] = player.hand.splice(index, 1);
      state.discard.push(discarded);
      logMessage(`${player.name} discarded ${discarded.rank}${discarded.symbol}.`);
      completeTurn();
    }

    function stand() {
      if (!humanCanAct()) return;
      if (!state.knocker) {
        toast('You can only stand after someone knocks. Draw or knock instead.');
        return;
      }
      currentPlayer().stood = true;
      increaseGameStat('stands');
      logMessage(`${currentPlayer().name} stands.`);
      completeTurn();
    }

    function knock() {
      if (!humanCanAct() || state.hasDrawn || state.knocker !== null) return;
      increaseGameStat('knocks');
      startKnock(HUMAN_INDEX);
      completeTurn(true);
    }

    function startKnock(playerIndex) {
      state.knocker = playerIndex;
      state.finalTurnsRemaining = activePlayers().length - 1;
      knockSound.currentTime = 0;
    knockSound.play().catch(() => {});
      logMessage(`${state.players[playerIndex].name} knocks. Everyone else gets one final turn.`);
      toast(`<span class="log-player-${playerIndex}">${escapeHtml(state.players[playerIndex].name)}</span> <span class="toast-knocked-word">knocked!</span>`);
    }

    function completeTurn(knockedThisTurn = false) {
      checkImmediateThirtyOne();
      if (state.gameOver) return;

      if (state.knocker !== null && !knockedThisTurn && state.currentPlayer !== state.knocker) {
        state.finalTurnsRemaining -= 1;
      }

      if (state.knocker !== null && state.finalTurnsRemaining <= 0) {
        endRound('Knock resolved.');
        return;
      }

      state.hasDrawn = false;
      state.drawnCard = null;
      state.currentPlayer = nextActiveIndex(state.currentPlayer);
      render();
    saveGameStateBeforeHumanTurn();
      continueIfAI();
    }

  function checkImmediateThirtyOne() {
    for (let i = 0; i < state.players.length; i++) {
    const player = state.players[i];

    if (!player.eliminated && scoreHand(player.hand).score === 31) {

      if (i === HUMAN_INDEX) {
        increaseGameStat('exactThirtyOnes');
        increaseGameStat('roundsWon');
      }

      state.gameBank += 3;
      renderBanks();

      toast(`<span class="log-player-${i}">${escapeHtml(player.name)}</span> <span class="toast-knocked-word">hit a natural 31!</span> 3 bonus coins added to game bank!`);

      endRound(`${player.name} hit exactly 31! 3 bonus coins added to game bank.`, i);
      return;
    }
    }
  }

    function endRound(reason, blitzWinner = null) {
      state.gameOver = true;
      state.phase = 'roundOver';
      increaseGameStat('roundsPlayed');
      const active = activePlayers();
      const scores = active.map(player => ({ player, score: scoreHand(player.hand).score }));
      let roundText = reason;
      let losers = [];

      if (blitzWinner !== null) {
        losers = active.filter(player => player !== state.players[blitzWinner]);
        chargeLifeLoss(losers, 1);
        roundText = `${state.players[blitzWinner].name} scored 31. ${formatLifeLossMessage(losers, 1)}`;
      } else {
        const lowest = Math.min(...scores.map(item => item.score));
        losers = scores.filter(item => item.score === lowest).map(item => item.player);

        if (state.knocker !== null) {
          const knocker = state.players[state.knocker];
          const knockerScore = scoreHand(knocker.hand).score;
          const beatSomeone = scores.some(item => item.player !== knocker && knockerScore > item.score);
          if (!beatSomeone) {
            losers = [knocker];
            chargeLifeLoss([knocker], 2);
            roundText = `${formatLifeLossMessage([knocker], 2)} Failed knock penalty.`;
          } else {
            chargeLifeLoss(losers, 1);
            roundText = `${reason} ${formatLifeLossMessage(losers, 1)}`;
          }
        } else {
          chargeLifeLoss(losers, 1);
          roundText = `${reason} ${formatLifeLossMessage(losers, 1)}`;
        }
      }

      if (
        state.phase === 'roundOver' &&
        !losers.includes(state.players[HUMAN_INDEX]) &&
        !state.players[HUMAN_INDEX].eliminated
      ) {
        increaseGameStat('roundsWon');
      }

      for (const player of state.players) {

        if (player.lives < 0) {
          player.lives = 0;
        }

      }

      checkHumanTurboMode();

  const remaining = activePlayers();
  if (remaining.length <= 1) {
    const winner = remaining[0];
    state.phase = 'gameOver';
    increaseGameStat('gamesPlayed');

    if (winner && !winner.isAI) {
    increaseGameStat('gamesWon');
    state.playerBank += state.gameBank;
    savePlayerBank(state.playerBank);
    roundText += ` ${winner.name} wins the game and collects ${state.gameBank} coins!`;
    } else {
    savePlayerBank(state.playerBank);
    roundText += ` ${winner?.name || 'Nobody'} wins the game!`;
    }
  }

      logMessage(roundText);
      render();
      if (
        state.turboMode &&
        state.phase !== 'gameOver'
      ) {

        if (dom.roundModal.classList.contains('show')) {
          return;
        }

        render();

        startRound();

        return;
      }
			
      showRoundModal(roundText, losers);
    }			

/* <------------------------------------------------
    AI LOGIC
   -------------------------------------------------> */
    function continueIfAI() {
      if (state.phase !== 'playing' || state.gameOver) return;

      const player = currentPlayer();

      if (!player.isAI) return;

			/* AI TURN SPEED DELAY - SMALLER NUMBER = FASTER */
			/* FIRST NUMBER IS TURBO MODE, SECOND IS GAME PLAY MODE */
      const aiDelay = state.turboMode ? 100 : 300;

      setTimeout(() => takeAITurn(state.currentPlayer), aiDelay);
    }

    function takeAITurn(playerIndex) {
      if (state.currentPlayer !== playerIndex || state.phase !== 'playing') return;
      const player = state.players[playerIndex];
      const move = chooseAIMove(player);

      if (move.action === 'knock' && state.knocker === null) {
        startKnock(playerIndex);
        completeTurn(true);
        return;
      }

      if (move.action === 'stand') {
        player.stood = true;
        logMessage(`${player.name} stands.`);
        completeTurn();
        return;
      }

      const source = move.drawSource;
      const drawn = source === 'discard' ? state.discard.pop() : drawFromDeck();
      if (drawn) player.hand.push(drawn);

      const discardIndex = chooseAIDiscardIndex(player.hand);
      const [discarded] = player.hand.splice(discardIndex, 1);
      state.discard.push(discarded);
      logMessage(`${player.name} drew from ${source} and discarded ${discarded.rank}${discarded.symbol}.`);
      completeTurn();
    }

    function chooseAIMove(player) {
      const currentScore = scoreHand(player.hand).score;
      const discardTop = state.discard[state.discard.length - 1];
      const withDiscardScore = discardTop ? bestScoreAfterAdding(player.hand, discardTop).score : 0;
      const riskThreshold = 24 + Math.min(state.roundNumber, 4);

      if (state.knocker !== null && currentScore >= 27) {
        return { action: 'stand' };
      }

      if (state.knocker === null && currentScore >= riskThreshold) {
        return { action: 'knock' };
      }

      return {
        action: 'draw',
        drawSource: discardTop && withDiscardScore >= currentScore + 2 ? 'discard' : 'stock'
      };
    }

    function bestScoreAfterAdding(hand, card) {
      let best = { score: -1, discardIndex: 0 };
      const testHand = [...hand, card];
      for (let i = 0; i < testHand.length; i++) {
        const kept = testHand.filter((_, index) => index !== i);
        const score = scoreHand(kept).score;
        if (score > best.score) {
          best = { score, discardIndex: i };
        }
      }
      return best;
    }

    function chooseAIDiscardIndex(hand) {
      let best = { score: -1, discardIndex: 0 };
      for (let i = 0; i < hand.length; i++) {
        const kept = hand.filter((_, index) => index !== i);
        const score = scoreHand(kept).score;
        if (score > best.score) {
          best = { score, discardIndex: i };
        }
      }
      return best.discardIndex;
    }

/* <------------------------------------------------
      PLAYER AVATAR RENDERING
   -------------------------------------------------> */
    function renderPlayerAvatar(playerIndex) {
      const player = state.players[playerIndex];
      const avatarId = playerIndex === HUMAN_INDEX ? loadSelectedPlayerIcon() : player.avatarId || DEFAULT_PLAYER_AVATAR_ID;
      const backgroundId = playerIndex === HUMAN_INDEX ? loadSelectedPlayerBackground() : player.backgroundId || 'back1';

      if (avatarId === DEFAULT_PLAYER_AVATAR_ID) {
        return `<img class="avatar-character" src="image/player/${avatarId}.webp" alt="" draggable="false" />`;
      }

      return `
        <img class="avatar-background" src="image/background/${backgroundId}.webp" alt="" draggable="false" />
        <img class="avatar-character" src="image/player/${avatarId}.webp" alt="" draggable="false" />
      `;
    }
		
/* <------------------------------------------------
    RENDERING
   -------------------------------------------------> */
    function render() {
      renderPlayers();
      renderPiles();
      renderButtons();
      renderBanks();
      renderTurboStatusToast();
    }

    function renderPlayers() {
      dom.players.innerHTML = '';
      dom.players.className = `players player-count-${state.players.length}`;
      state.players.forEach((player, index) => {
        const score = scoreHand(player.hand);
        const seat = document.createElement('div');
        seat.className = `seat ${player.seat}${index === state.currentPlayer && state.phase === 'playing' ? ' active' : ''}${player.eliminated ? ' out' : ''}`;

        const showCards = !player.isAI || state.phase === 'roundOver' || state.phase === 'gameOver';
        seat.innerHTML = `
      ${
        state.knocker !== null &&
        state.knocker !== HUMAN_INDEX &&
        index === HUMAN_INDEX &&
        !state.gameOver
        ? '<div class="final-turn-banner">FINAL TURN</div>'
        : ''
      }

      <div class="player-head">
            <div>
              <div class="name player-name-${index}">${escapeHtml(player.name)}</div>
              <div class="score-meta">${player.eliminated ? 'Eliminated' : showCards ? `Score: ${score.score}` : ''}</div>
            </div>
            <div class="badges">
              ${state.knocker === index ? '<span class="badge danger knock-center-banner">KNOCK</span>' : ''}
              ${player.stood ? '<span class="badge good">STAND</span>' : ''}
              <span class="coins">${renderCoins(player.lives, player.onYourLips)}</span>
            </div>
          </div>
          <div class="player-body">
            <div class="avatar-frame" aria-label="${escapeHtml(player.name)} avatar">
              ${renderPlayerAvatar(index)}
            </div>
            <div class="hand"></div>
          </div>
        `;

        const hand = seat.querySelector('.hand');
        player.hand.forEach(card => {
          const cardEl = createCardElement(card, !showCards);
          if (index === HUMAN_INDEX && state.hasDrawn && state.phase === 'playing') {
            cardEl.classList.add('card-clickable');
            cardEl.addEventListener('click', () => discardCard(card.id));
          }
          hand.appendChild(cardEl);
        });

        if (index === HUMAN_INDEX) {
          seat.appendChild(dom.tableActions);
        }

        dom.players.appendChild(seat);
      });
    }

    function renderPiles() {
      dom.stockCount.textContent = `(${state.deck.length})`;
      const topDiscard = state.discard[state.discard.length - 1];
      dom.discardPile.innerHTML = '';
      if (topDiscard) dom.discardPile.appendChild(createCardElement(topDiscard, false));
    }

    function renderCoins(count, onYourLips = false) {

      if (onYourLips) {
        return '<span class="coin-lips">👄</span>';
      }

      if (count <= 0) {
        return '<span class="coin">0</span>';
      }

      return Array.from(
        { length: count },
        () => '<span class="coin">$</span>'
      ).join('');
    }

    function renderButtons() {
      const canAct = humanCanAct();
      dom.knockBtn.disabled = !canAct || state.hasDrawn || state.knocker !== null;
      dom.standBtn.disabled = !canAct || state.knocker === null || state.hasDrawn;
    }
  
/* <------------------------------------------------
      BANK RENDERING
   -------------------------------------------------> */
  function renderBanks() {
    const humanPlayer = state.players[HUMAN_INDEX];
    const playerName = humanPlayer?.name || dom.playerName.value || 'Player';
    const playerBank = Number.isFinite(state.playerBank) ? state.playerBank : loadPlayerBank();
    const gameBank = Number.isFinite(state.gameBank) ? state.gameBank : 0;

    dom.bankPlayerTitle.innerHTML = `<span class="player-name-0">${escapeHtml(playerName)}'s Bank:</span>`;
    dom.playerBankAmount.textContent = `${playerBank} coins`;
    dom.gameBankAmount.textContent = `${gameBank} coins`;
  }  
  
/* <------------------------------------------------
      INLINE CARD FORMATTER
   -------------------------------------------------> */
  function formatInlineCards(text) {
    return text.replace(
    /\b(A|K|Q|J|10|[2-9])([♠♥♦♣])/g,
    (_, rank, suit) => {
      const cardColor = suit === '♥' || suit === '♦' ? '#c1121f' : '#111111';
      return `<span class="inline-card" style="background:#ffffff !important; color:${cardColor} !important;">${rank}${suit}</span>`;
    }
    );
  }  

  function createCardElement(card, hidden) {
    const cardEl = document.createElement('div');
    cardEl.className = hidden ? 'card back' : `card ${card.red ? 'red' : 'black'}`;

    if (!hidden) {
    const cardColor = card.red ? '#c1121f' : '#111111';

    cardEl.style.setProperty('background', '#ffffff', 'important');
    cardEl.style.setProperty('color', cardColor, 'important');

    cardEl.innerHTML = `
      <div class="rank" style="color:${cardColor} !important;">${card.rank}</div>
      <div class="suit" style="color:${cardColor} !important;">${card.symbol}</div>
      <div class="rank bottom" style="color:${cardColor} !important;">${card.rank}</div>
    `;
    }

    return cardEl;
  }

/* <------------------------------------------------
    MODALS, LOGS, AND FEEDBACK
   -------------------------------------------------> */
    function showRoundModal(text, losers) {
      dom.modalTitle.textContent = state.phase === 'gameOver' ? 'Game Over' : 'Round Over';
      dom.modalText.innerHTML = formatLogMessage(text);
      dom.revealGrid.innerHTML = state.players.map(player => {
        const score = scoreHand(player.hand);
        const lost = losers.includes(player);
        const cards = player.hand.map(card => `${card.rank}${card.symbol}`).join(' ');
        return `
          <div class="reveal-row ${lost ? 'pulse' : ''}">
            <div>
              <strong>${escapeHtml(player.name)}</strong>
              <div class="score-meta">${formatInlineCards(cards)}</div>
            </div>
            <div><strong>${score.score}</strong>${lost ? ' · lost coin' : ''}</div>
          </div>
        `;
      }).join('');
      dom.nextRoundBtn.textContent = state.phase === 'gameOver' ? 'Start New Game' : 'Next Round';
      dom.roundModal.classList.add('show');
    }

    function closeModal() {
      dom.roundModal.classList.remove('show');
    }

    function openOptionsModal() {
      dom.optionsModal.classList.add('show');
    }

    function closeOptionsModal() {
      dom.optionsModal.classList.remove('show');
    }

/* <------------------------------------------------
      AVATAR SELECTION STORAGE
   -------------------------------------------------> */
    function saveSelectedPlayerIcon(iconId) {
      const currentIconId = loadSelectedPlayerIcon();

      localStorage.setItem(PLAYER_ICON_SAVE_KEY, iconId);
      localStorage.setItem(GAME_STATE_SAVE_KEY, JSON.stringify(state));

      if (iconId !== currentIconId) {
        increaseAvatarStat('avatarChanges');
      }
    }

    function loadSelectedPlayerIcon() {
      return localStorage.getItem(PLAYER_ICON_SAVE_KEY) || DEFAULT_PLAYER_AVATAR_ID;
    }

    function saveSelectedPlayerBackground(backgroundId) {
      const currentBackgroundId = loadSelectedPlayerBackground();

      localStorage.setItem(PLAYER_BACKGROUND_SAVE_KEY, backgroundId);
      localStorage.setItem(GAME_STATE_SAVE_KEY, JSON.stringify(state));

      if (backgroundId !== currentBackgroundId) {
        increaseAvatarStat('backgroundChanges');
      }
    }

    function loadSelectedPlayerBackground() {
      return localStorage.getItem(PLAYER_BACKGROUND_SAVE_KEY) || 'back1';
    }
		
    function loadPurchasedImageIds() {
      const savedPurchases = localStorage.getItem(PLAYER_PURCHASES_SAVE_KEY);

      if (!savedPurchases) {
        return [];
      }

      try {
        const purchases = JSON.parse(savedPurchases);
        return Array.isArray(purchases) ? purchases : [];
      } catch {
        return [];
      }
    }

    function savePurchasedImageIds(purchasedImageIds) {
      localStorage.setItem(PLAYER_PURCHASES_SAVE_KEY, JSON.stringify(purchasedImageIds));
    }

    function isStoreImageUnlocked(image) {
      return image.unlockedByDefault || loadPurchasedImageIds().includes(image.id);
    }	

    function loadAvatarStats() {
      const savedStats = localStorage.getItem(PLAYER_AVATAR_STATS_SAVE_KEY);

      if (!savedStats) {
        return {
          avatarChanges: 0,
          backgroundChanges: 0,
          imagesPurchased: 0
        };
      }

      try {
        const stats = JSON.parse(savedStats);

        return {
          avatarChanges: Number.isFinite(stats.avatarChanges) ? stats.avatarChanges : 0,
          backgroundChanges: Number.isFinite(stats.backgroundChanges) ? stats.backgroundChanges : 0,
          imagesPurchased: Number.isFinite(stats.imagesPurchased) ? stats.imagesPurchased : 0
        };
      } catch {
        return {
          avatarChanges: 0,
          backgroundChanges: 0,
          imagesPurchased: 0
        };
      }
    }

    function saveAvatarStats(stats) {
      localStorage.setItem(PLAYER_AVATAR_STATS_SAVE_KEY, JSON.stringify(stats));
    }
		
/* <------------------------------------------------
      GAME STAT STORAGE
   -------------------------------------------------> */
    function loadGameStats() {
      const savedStats = localStorage.getItem(PLAYER_GAME_STATS_SAVE_KEY);

      if (!savedStats) {
        return { ...GAME_STAT_DEFAULTS };
      }

      try {
        const stats = JSON.parse(savedStats);

        return {
          ...GAME_STAT_DEFAULTS,
          ...stats
        };
      } catch {
        return { ...GAME_STAT_DEFAULTS };
      }
    }

    function saveGameStats(stats) {
      localStorage.setItem(
        PLAYER_GAME_STATS_SAVE_KEY,
        JSON.stringify(stats)
      );
    }

    function increaseGameStat(statName, amount = 1) {
      const stats = loadGameStats();

      stats[statName] =
        (Number(stats[statName]) || 0) + amount;

      saveGameStats(stats);

      checkAchievementUnlocks(statName);
    }

/* <------------------------------------------------
      ACHIEVEMENT STORAGE
   -------------------------------------------------> */
    function loadUnlockedAchievements() {
      const savedAchievements =
        localStorage.getItem(PLAYER_ACHIEVEMENTS_SAVE_KEY);

      if (!savedAchievements) {
        return [...DEFAULT_UNLOCKED_ACHIEVEMENTS];
      }

      try {
        const achievements = JSON.parse(savedAchievements);

        if (!Array.isArray(achievements)) {
          return [...DEFAULT_UNLOCKED_ACHIEVEMENTS];
        }

        return achievements.filter(
          achievement => achievement !== 'New Player!'
        );
      } catch {
        return [...DEFAULT_UNLOCKED_ACHIEVEMENTS];
      }
    }

    function saveUnlockedAchievements(achievements) {
      localStorage.setItem(
        PLAYER_ACHIEVEMENTS_SAVE_KEY,
        JSON.stringify(achievements)
      );
    }

/* <------------------------------------------------
      ACHIEVEMENT UNLOCK CHECKER
   -------------------------------------------------> */
    function checkAchievementUnlocks(changedStatName) {

      const unlockedAchievements =
        loadUnlockedAchievements();

      const gameStats =
        loadGameStats();
			
	    const avatarStats =
        loadAvatarStats();		

      let achievementUnlocked = false;

      ACHIEVEMENT_DEFINITIONS.forEach(achievement => {

        if (
          unlockedAchievements.includes(
            achievement.title
          ) ||
          achievement.statName !== changedStatName
        ) {
          return;
        }

        const statSource =
          achievement.statSource === 'avatar'
            ? avatarStats
            : gameStats;

        const currentValue =
          Number(
            statSource[
              achievement.statName
            ]
          ) || 0;

        if (
          currentValue >=
          achievement.requiredValue
        ) {

          unlockedAchievements.push(
            achievement.title
          );

          achievementUnlocked = true;

          achievementToast(
            `🏆 ${achievement.title}`
          );

          logMessage(
            `Achievement unlocked: 🏆 ${achievement.title}`
          );
        }

      });

      if (achievementUnlocked) {
        saveUnlockedAchievements(
          unlockedAchievements
        );
      }
    }		

    function increaseAvatarStat(statName) {
      const stats = loadAvatarStats();
      stats[statName] = Number.isFinite(stats[statName]) ? stats[statName] + 1 : 1;
      saveAvatarStats(stats);
      checkAchievementUnlocks(statName);
    }	
		
    function purchaseStoreImage(imageId) {
      const allStoreImages = [...PLAYER_IMAGE_REGISTRY, ...BACKGROUND_IMAGE_REGISTRY];
      const image = allStoreImages.find(storeImage => storeImage.id === imageId);

      if (!image || isStoreImageUnlocked(image)) {
        return true;
      }

      if (state.playerBank < image.price) {
        toast(`You need ${image.price} coins to unlock this image.`);
        return false;
      }

      const purchasedImageIds = loadPurchasedImageIds();

      state.playerBank -= image.price;
      savePlayerBank(state.playerBank);
      savePurchasedImageIds([...purchasedImageIds, image.id]);
      increaseAvatarStat('imagesPurchased');
      localStorage.setItem(GAME_STATE_SAVE_KEY, JSON.stringify(state));

      toast(`Unlocked image for ${image.price} coins!`);
      renderBanks();

      return true;
    }		

/* <------------------------------------------------
      STORE IMAGE RENDERING
   -------------------------------------------------> */
    function sortStoreImages(images) {
      return [...images].sort((firstImage, secondImage) => {

        if (firstImage.isDefault) return -1;
        if (secondImage.isDefault) return 1;

        if (firstImage.unlockedByDefault && !secondImage.unlockedByDefault) return -1;
        if (!firstImage.unlockedByDefault && secondImage.unlockedByDefault) return 1;

        if (!firstImage.unlockedByDefault && !secondImage.unlockedByDefault) {
          return firstImage.price - secondImage.price || firstImage.fileName.localeCompare(secondImage.fileName);
        }

        return firstImage.fileName.localeCompare(secondImage.fileName);
      });
    }

    function renderStoreGallery(imageType) {
      const images = imageType === 'backgrounds' ? BACKGROUND_IMAGE_REGISTRY : PLAYER_IMAGE_REGISTRY;
      const selectedImageId = imageType === 'backgrounds' ? loadSelectedPlayerBackground() : loadSelectedPlayerIcon();

      dom.storeGalleryGrid.innerHTML = sortStoreImages(images).map(image => {
        const isLocked = !isStoreImageUnlocked(image);
        const isSelected = image.id === selectedImageId;

        return `
          <button class="store-tile ${isLocked ? 'locked' : ''}" type="button" data-store-image-id="${image.id}">
            <img src="${image.path}" alt="" draggable="false" />
            ${isLocked ? `<span class="store-lock-overlay">🔒<br>${image.price}</span>` : ''}
            ${isSelected ? '<span class="store-selected-check">✓</span>' : ''}
          </button>
        `;
      }).join('');
    }
		
/* <------------------------------------------------
      STORE VIEW NAVIGATION
   -------------------------------------------------> */
    function showStoreHomeView() {
      dom.storeModal.querySelector('.store-modal-card').classList.remove('store-gallery-mode');
      dom.storeGalleryView.classList.remove('store-view-active');
      dom.storeHomeView.classList.add('store-view-active');
    }

    function showStoreGalleryView(title, imageType) {
      dom.storeModal.querySelector('.store-modal-card').classList.add('store-gallery-mode');
      dom.storeHomeView.classList.remove('store-view-active');
      dom.storeGalleryView.classList.add('store-view-active');
      dom.storeGalleryTitle.textContent = title;
      renderStoreGallery(imageType);
    }

    function openStoreModal() {
      showStoreHomeView();
      dom.storeModal.classList.add('show');
    }

    function closeStoreModal() {
      dom.storeModal.classList.remove('show');
      showStoreHomeView();
    }

    function openHelpModal() {
      dom.helpModal.classList.add('show');
    }

    function closeHelpModal() {
      dom.helpModal.classList.remove('show');
    }
		
/* <------------------------------------------------
      GAME LOG TOGGLE SYSTEM
   -------------------------------------------------> */
  function isGameLogToggleAllowed() {
    return window.innerWidth < GAME_LOG_TOGGLE_MAX_WIDTH;
  }

  function loadGameLogVisible() {
    return localStorage.getItem(GAME_LOG_VISIBLE_SAVE_KEY) !== 'closed';
  }

  function saveGameLogVisible(isVisible) {
    localStorage.setItem(
      GAME_LOG_VISIBLE_SAVE_KEY,
      isVisible ? 'open' : 'closed'
    );
  }

  function applyGameLogVisibility() {
    const toggleAllowed = isGameLogToggleAllowed();
    const logVisible = toggleAllowed ? loadGameLogVisible() : true;

    dom.app.classList.toggle('game-log-toggle-ready', toggleAllowed);
    dom.app.classList.toggle('game-log-hidden', toggleAllowed && !logVisible);

    dom.gameLogToggleBtn.textContent = logVisible ? '›' : '‹';
    dom.gameLogToggleBtn.setAttribute(
      'aria-label',
      logVisible ? 'Hide Game Log' : 'Show Game Log'
    );
  }

  function toggleGameLogVisibility() {
    if (!isGameLogToggleAllowed()) return;

    saveGameLogVisible(!loadGameLogVisible());
    applyGameLogVisibility();
    scaleGameToWindow();
  }		

/* <------------------------------------------------
      ACHIEVEMENTS WINDOW
   -------------------------------------------------> */
    function renderAchievementStats() {
      const avatarStats = loadAvatarStats();
      const gameStats = loadGameStats();
      const unlockedAchievements = loadUnlockedAchievements();

      const achievementRows = ACHIEVEMENT_DEFINITIONS.map(achievement => {
        const isUnlocked = unlockedAchievements.includes(achievement.title);

        return `
          <div class="achievement-stat-row ${isUnlocked ? '' : 'locked'}">
            <span>
              ${isUnlocked ? '🏆' : '🔒'} ${achievement.title}
              <span class="achievement-stat-description">${achievement.description}</span>
            </span>
            <span class="achievement-stat-value">${isUnlocked ? 'Unlocked' : 'Locked'}</span>
          </div>
        `;
      }).join('');

      const unlockedAchievementCount = ACHIEVEMENT_DEFINITIONS.filter(
        achievement => unlockedAchievements.includes(achievement.title)
      ).length;

      dom.achievementsStatsGrid.innerHTML = `
        <div class="achievement-section-title">
          TROPHIES
        </div>

        <div class="achievement-stat-row">
          <span>Unlocked Trophies</span>
          <span class="achievement-stat-value">${unlockedAchievementCount}/${ACHIEVEMENT_DEFINITIONS.length}</span>
        </div>

        ${achievementRows}

        <div class="achievement-section-title">
          GAMEPLAY STATS
        </div>

        <div class="achievement-stat-row">
          <span>Games Played</span>
          <span class="achievement-stat-value">${gameStats.gamesPlayed}</span>
        </div>

        <div class="achievement-stat-row">
          <span>Games Won</span>
          <span class="achievement-stat-value">${gameStats.gamesWon}</span>
        </div>

        <div class="achievement-stat-row">
          <span>Rounds Played</span>
          <span class="achievement-stat-value">${gameStats.roundsPlayed}</span>
        </div>

        <div class="achievement-stat-row">
          <span>Rounds Won</span>
          <span class="achievement-stat-value">${gameStats.roundsWon}</span>
        </div>

        <div class="achievement-stat-row">
          <span>Knocks</span>
          <span class="achievement-stat-value">${gameStats.knocks}</span>
        </div>

        <div class="achievement-stat-row">
          <span>Stands</span>
          <span class="achievement-stat-value">${gameStats.stands}</span>
        </div>

        <div class="achievement-stat-row">
          <span>31s Made</span>
          <span class="achievement-stat-value">${gameStats.exactThirtyOnes}</span>
        </div>

        <div class="achievement-section-title">
          STORE STATS
        </div>

        <div class="achievement-stat-row">
          <span>Images Purchased</span>
          <span class="achievement-stat-value">${avatarStats.imagesPurchased}</span>
        </div>

        <div class="achievement-stat-row">
          <span>Avatar Changes</span>
          <span class="achievement-stat-value">${avatarStats.avatarChanges}</span>
        </div>

        <div class="achievement-stat-row">
          <span>Background Changes</span>
          <span class="achievement-stat-value">${avatarStats.backgroundChanges}</span>
        </div>
      `;
    }

    function openAchievementsModal() {
      renderAchievementStats();

      dom.achievementsModal.classList.add('show');
    }

    function closeAchievementsModal() {
      dom.achievementsModal.classList.remove('show');
    }

/* <------------------------------------------------
      RESET GAME SYSTEM
   -------------------------------------------------> */
  function openResetWarningModal() {
    closeOptionsModal();
    dom.resetWarningModal.classList.add('show');
  }

  function closeResetWarningModal() {
    dom.resetWarningModal.classList.remove('show');
  }

  function openResetFinalModal() {
    closeResetWarningModal();
    dom.resetConfirmInput.value = '';
    dom.resetFinalConfirmBtn.disabled = true;
    dom.resetFinalModal.classList.add('show');
    dom.resetConfirmInput.focus();
  }

  function closeResetFinalModal() {
    dom.resetFinalModal.classList.remove('show');
  }

  function updateResetConfirmButton() {
    dom.resetFinalConfirmBtn.disabled = dom.resetConfirmInput.value !== RESET_CONFIRM_TEXT;
  }

  function cancelResetGame() {
    closeResetWarningModal();
    closeResetFinalModal();
  }

  function saveDefaultFutureResetData() {
    localStorage.setItem(PLAYER_ACHIEVEMENTS_SAVE_KEY, JSON.stringify([]));
    localStorage.setItem(PLAYER_ICON_SAVE_KEY, DEFAULT_PLAYER_AVATAR_ID);
    localStorage.setItem(PLAYER_BACKGROUND_SAVE_KEY, 'back1');
    localStorage.setItem(PLAYER_PURCHASES_SAVE_KEY, JSON.stringify([]));
    saveAvatarStats({
      avatarChanges: 0,
      backgroundChanges: 0,
      imagesPurchased: 0
    });

    saveGameStats({
      ...GAME_STAT_DEFAULTS
    });
  }

  function resetGameToDefaults() {
    if (dom.resetConfirmInput.value !== RESET_CONFIRM_TEXT) return;

    closeResetFinalModal();
    clearSavedGame();
    savePlayerName('Player');
    savePlayerBank(9);
    saveDefaultFutureResetData();

    dom.playerName.value = 'Player';
    dom.themeSelect.value = 'theme-classic';
    dom.playerCountSelect.value = '4';
    dom.body.className = 'theme-classic';
    saveTheme('theme-classic');
    savePlayerCount(4);

    state = createEmptyState();
    state.playerBank = 9;
    state.gameBank = 0;
    state.playerCount = 4;
    state.familyMode = false;
    state.players = createPlayersForNewGame('Player', 4, state.familyMode);
    state.phase = 'playing';
    state.log = [];
    dom.logList.innerHTML = '';
    logMessage('Game reset to default state.');
    startRound();
  }

  function logMessage(message) {
    state.log.unshift(message);
    state.log = state.log.slice(0, 60);

    const newItem = document.createElement('div');
    newItem.className = 'log-item';
    newItem.innerHTML = formatLogMessage(message);

    dom.logList.prepend(newItem);

    while (dom.logList.children.length > 60) {
      dom.logList.removeChild(dom.logList.lastChild);
    }
  }
	
/* <------------------------------------------------
      SAVED GAME LOG RENDERING
   -------------------------------------------------> */
  function renderSavedGameLog() {
    dom.logList.innerHTML = '';

    state.log.forEach(message => {
      const logItem = document.createElement('div');
      logItem.className = 'log-item';
      logItem.innerHTML = formatLogMessage(message);
      dom.logList.appendChild(logItem);
    });
  }	

 /* <------------------------------------------------
     LOG FORMATTER
    -------------------------------------------------> */
  function formatLogMessage(message) {
    let formatted = escapeHtml(message);
    const hasPlayerName = state.players.some(player => formatted.includes(escapeHtml(player.name)));

    state.players.forEach((player, index) => {
    const safeName = escapeHtml(player.name);
    formatted = formatted.replaceAll(
      safeName,
      `<span class="log-player-${index}">${safeName}</span>`
    );
    });

    formatted = formatted

    .replaceAll('knocks', '<span class="log-knock">knocks</span>')
    .replaceAll('Knock', '<span class="log-knock">Knock</span>')

    .replaceAll('drew', '<span class="log-special">drew</span>')

    .replaceAll(
      'from stock',
      'from <span class="log-draw">stock</span>'
    )

    .replaceAll(
      'from discard',
      'from <span class="log-discard">discard</span>'
    )

    .replaceAll(
      'Choose a card to discard',
      'Choose a card to <span class="log-special">discard</span>'
    )
    
    .replaceAll(
      'FINAL TURN',
      '<span class="log-final-turn">FINAL TURN</span>'
    )

    .replaceAll(
      'discarded',
      '<span class="log-special">discarded</span>'
    )

    .replaceAll('1 coin', '<span class="log-special">1 coin</span>')
    .replaceAll('2 coins', '<span class="log-special">2 coins</span>')

    .replaceAll(
      'ON THEIR LIPS!',
      '<span class="log-on-your-lips">ON THEIR LIPS!</span>'
    )

    .replaceAll(
      'One chance left!',
      '<span class="log-special">One chance left!</span>'
    )

    .replaceAll(
      '👄',
      '<span class="log-lips-icon">👄</span>'
    );

    formatted = formatInlineCards(formatted);

    return hasPlayerName
    ? formatted
    : `<span class="log-special">${formatted}</span>`;
  }

  function toast(message) {
    dom.toast.innerHTML = message;
    dom.toast.classList.add('show');
    setTimeout(() => dom.toast.classList.remove('show'), 1400);
  }
	
/* <------------------------------------------------
      ACHIEVEMENT TOAST
   -------------------------------------------------> */
  function achievementToast(message) {
    dom.achievementToast.innerHTML = message;
    dom.achievementToast.classList.add('show');
    setTimeout(() => dom.achievementToast.classList.remove('show'), 1800);
  }	
	
/* <------------------------------------------------
      TURBO MODE STATUS TOAST
   -------------------------------------------------> */
  function renderTurboStatusToast() {
    const humanPlayer = state.players[HUMAN_INDEX];

    if (
      state.turboMode &&
      humanPlayer &&
      humanPlayer.eliminated &&
      state.phase !== 'gameOver'
    ) {
      dom.turboStatusToast.innerHTML = `
        <div class="turbo-status-title">AI Turbo Mode</div>
        <div class="turbo-status-subtitle">${escapeHtml(humanPlayer.name)} has been eliminated!</div>
      `;
      dom.turboStatusToast.classList.add('show');
      return;
    }

    dom.turboStatusToast.classList.remove('show');
  }	

	function escapeHtml(value) {
		return String(value)
			.replaceAll('&', '&amp;')
			.replaceAll('<', '&lt;')
			.replaceAll('>', '&gt;')
			.replaceAll('"', '&quot;')
			.replaceAll("'", '&#039;');
	}

 /* <------------------------------------------------
     EVENTS
   -------------------------------------------------> */
    dom.themeSelect.addEventListener('change', event => {
      dom.body.className = event.target.value;
      saveTheme(event.target.value);
    });

    dom.optionsBtn.addEventListener('click', openOptionsModal);
    dom.storeBtn.addEventListener('click', openStoreModal);
    dom.helpBtn.addEventListener('click', openHelpModal);
    dom.achievementsBtn.addEventListener('click', openAchievementsModal);
    dom.gameLogToggleBtn.addEventListener('click', toggleGameLogVisibility);		
    dom.closeOptionsBtn.addEventListener('click', closeOptionsModal);
    dom.closeStoreBtn.addEventListener('click', closeStoreModal);
    dom.closeHelpBtn.addEventListener('click', closeHelpModal);
    dom.closeAchievementsBtn.addEventListener('click', closeAchievementsModal);
    dom.openCharacterStoreBtn.addEventListener('click', () => showStoreGalleryView('Characters', 'players'));
    dom.openBackgroundStoreBtn.addEventListener('click', () => showStoreGalleryView('Backgrounds', 'backgrounds'));
    dom.storeBackBtn.addEventListener('click', showStoreHomeView);
    dom.storeGalleryGrid.addEventListener('click', event => {
      const tile = event.target.closest('.store-tile');
      if (!tile) return;

      const imageId = tile.dataset.storeImageId;
      const imageType = dom.storeGalleryTitle.textContent === 'Backgrounds'
        ? 'backgrounds'
        : 'players';

      if (!purchaseStoreImage(imageId)) {
        return;
      }

      if (imageType === 'backgrounds') {
        saveSelectedPlayerBackground(imageId);
        resolveAIAvatarDuplicatesAfterHumanChange();
        renderStoreGallery('backgrounds');
        render();
        return;
      }

      saveSelectedPlayerIcon(imageId);
      resolveAIAvatarDuplicatesAfterHumanChange();
      renderStoreGallery('players');
      render();
    });	
    dom.resetGameBtn.addEventListener('click', openResetWarningModal);
    dom.resetWarningContinueBtn.addEventListener('click', openResetFinalModal);
    dom.resetWarningCancelBtn.addEventListener('click', cancelResetGame);
    dom.resetFinalCancelBtn.addEventListener('click', cancelResetGame);
    dom.resetConfirmInput.addEventListener('input', updateResetConfirmButton);
    dom.resetFinalConfirmBtn.addEventListener('click', resetGameToDefaults);
		dom.continueSavedBtn.addEventListener('click', continueSavedGame);
		dom.startFreshBtn.addEventListener('click', startFreshGameFromSavePrompt);
    dom.startBtn.addEventListener('click', applyOptions);
    dom.newGameBtn.addEventListener('click', () => {
      closeOptionsModal();
      startGame();
    });
    dom.standBtn.addEventListener('click', stand);
    dom.knockBtn.addEventListener('click', knock);
    dom.stockPile.addEventListener('click', () => drawCard('stock'));
    dom.discardPile.addEventListener('click', () => drawCard('discard'));
    dom.nextRoundBtn.addEventListener('click', () => {

      closeModal();

      if (state.phase === 'gameOver') {
        startGame(true);
        return;
      }

      if (state.turboMode) {
        startRound();
        return;
      }

      startRound();
    });

    window.addEventListener('resize', () => {
      applyGameLogVisibility();
      scaleGameToWindow();
    });
    window.addEventListener('keydown', event => {
      if (event.key.toLowerCase() === 'k') knock();
      if (event.key.toLowerCase() === 's') stand();
      if (event.key === '1') drawCard('stock');
      if (event.key === '2') drawCard('discard');
    });

/* <------------------------------------------------
      GAME AUTO SCALE SYSTEM
   -------------------------------------------------> */
function scaleGameToWindow() {
  const baseWidth = dom.app.offsetWidth;
  const availableWidth = window.innerWidth;
  const availableHeight = window.innerHeight;
  const gameLogHidden = dom.app.classList.contains('game-log-hidden');

  dom.app.style.removeProperty('--game-log-hidden-table-height');

  if (gameLogHidden) {
    const widthScale = availableWidth / baseWidth;
    const targetAppHeight = availableHeight / widthScale;
    const appVerticalPadding = 36;
    const targetTableHeight = Math.max(740, targetAppHeight - appVerticalPadding);

    dom.app.style.setProperty(
      '--game-log-hidden-table-height',
      `${targetTableHeight}px`
    );
  }

  const baseHeight = dom.app.offsetHeight;

  const scale = Math.min(
    availableWidth / baseWidth,
    availableHeight / baseHeight
  );

  const scaledWidth = baseWidth * scale;
  const scaledHeight = baseHeight * scale;

  const offsetX = (availableWidth - scaledWidth) / 2;
  const offsetY = (availableHeight - scaledHeight) / 2;

  dom.gameScaleInner.style.width = `${baseWidth}px`;
  dom.gameScaleInner.style.transform =
    `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;

  dom.gameScaleFrame.style.height =
    `${window.innerHeight}px`;
}

/* <------------------------------------------------
    INITIAL RENDER
   -------------------------------------------------> */
    initializeSavedGameFlow();
    applyGameLogVisibility();
    scaleGameToWindow();

/* <------------------------------------------------
      SERVICE WORKER REGISTRATION
   -------------------------------------------------> */
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js');
      });
    }
		
		
