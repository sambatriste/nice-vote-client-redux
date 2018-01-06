import sut from './voteReducer';

const state = {
  themes: [
    {
      themeId: 1,
      description: "好きな食べ物",
      opinions: [
        {
          opinionId: 1,
          description: 'すいか',
          agreementCount: 0
        },
        {
          opinionId: 2,
          description: 'いちご',
          agreementCount: 1
        }
      ]
    },
    {
      themeId: 2,
      description: "好きな人物",
      opinions: [
        {
          opinionId: 1,
          description: '織田信長',
          agreementCount: 0
        },
        {
          opinionId: 2,
          description: '織田信成',
          agreementCount: 1
        }
      ]
    }
  ]
};

it('renders without crashing', () => {

  const action = {
    type: "VOTE",
    themeId: 2,
    opinionId: 1
  };
  const actual = sut(state, action);
  expect(actual[1].opinions[0].agreementCount).toBe(1)
});