const locales = {
  en: {
    challengeComplete: 'Challenge Complete!',
    claim: 'Claim Rewards',
    streak: 'Streak',
    xp: 'Points',
  },
  es: {
    challengeComplete: '¡Desafío completado!',
    claim: 'Reclamar Recompensas',
    streak: 'Racha',
    xp: 'Puntos',
  },
};

function t(lang, key) {
  return locales[lang]?.[key] || locales['en'][key] || key;
}

module.exports = { t };
