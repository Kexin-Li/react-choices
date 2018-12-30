export const transformChoices = (choices, answer) => {
  if (!choices) return choices;
  return choices.map((choice, index) => ({
    name: choice,
    isActive: answer === index || false
  }));
};

export const formatChoices = choices => {
  if (!choices) return choices;
  return choices.map(choice => choice.name);
};

export const findAnswer = choices =>
  choices.findIndex(choice => choice.isActive);
