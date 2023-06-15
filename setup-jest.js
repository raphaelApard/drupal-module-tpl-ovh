import '@testing-library/jest-dom';

global.Drupal = {
  behaviors: {},
  debounce: (func) => func,
  t: (text) => text,
  formatPlural: (amount, singular, plural) => {
    if (amount <= 1) {
      return singular;
    }
    return plural;
  },
};

global.drupalSettings = {
  ovh: {
    subsidiary: {
      locale: 'en',
    },
  },
};

global.OVH = {
  t: (text) => text,
  formatPlural: (amount, singular, plural) => {
    if (amount <= 1) {
      return singular;
    }
    return plural;
  },
};