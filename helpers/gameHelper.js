export const addPointsForAchievementsInGames = (games) => {
  console.clear();
  let newGames = [];

  games.forEach((game) => {
    let newGame = { ...game };
    let newAchievements = [];
    let totalPercentage = 0;

    let totalPoints = 0;

    game.achievements.forEach((achievement) => {
      totalPercentage = totalPercentage + achievement.percentage;
    });

    game.achievements.forEach((achievement) => {
      let newAchievement = { ...achievement };
      let currentPoint =
        (1350 * Math.floor(achievement.percentage)) / totalPercentage;
      newAchievement.points = Math.floor(currentPoint);
      totalPoints += newAchievement.points;

      if (newAchievement.points <= 10) {
        newAchievement.type = GOLD;
      } else if (newAchievement.points > 10 && newAchievement.points <= 50) {
        newAchievement.type = SILVER;
      } else {
        newAchievement.type = BRONZE;
      }

      newAchievements.push(newAchievement);
    });
    newGame = {
      ...newGame,
      achievements: newAchievements,
      totalPoints: totalPoints,
    };
    console.log("JEEVA - TOTAL POINTS", game.name, totalPoints);
    newGames.push(newGame);
  });
  return newGames.sort((game1, game2) => game2.lastPlayed - game1.lastPlayed);
};

export const getTrophyIconForLevel = (level) => {
  if (false) {
    if (level < 100) {
      return "1.png";
    } else if (level >= 100 && level < 200) {
      return "2.png";
    } else if (level >= 200 && level < 300) {
      return "3.png";
    } else if (level >= 300 && level < 400) {
      return "4.png";
    } else if (level >= 400 && level < 500) {
      return "5.png";
    } else if (level >= 500 && level < 600) {
      return "6.png";
    } else if (level >= 600 && level < 700) {
      return "7.png";
    } else if (level >= 700 && level < 800) {
      return "8.png";
    } else if (level >= 800 && level < 900) {
      return "9.png";
    } else {
      return "10.png";
    }
  }
  return "5.png";
};

export const PLATINUM = "PLATINUM";
export const GOLD = "GOLD";
export const SILVER = "SILVER";
export const BRONZE = "BRONZE";

export const getIconForTrophyType = (type) => {
  switch (type) {
    case PLATINUM:
      return "platinumNew.png";
    case GOLD:
      return "goldNew.png";
    case SILVER:
      return "silverNew.png";
    case BRONZE:
      return "bronzeNew.png";
  }
};

export const getRarityIcon = (percentage) => {
  if (percentage <= 1) {
    return "rarity.png";
  } else if (percentage > 1 && percentage <= 10) {
    return "rarity.png";
  } else if (percentage > 10 && percentage <= 25) {
    return "rarity.png";
  } else {
    return "rarity.png";
  }
};

export const getTrophyNameForType = (type) => {
  switch (type) {
    case PLATINUM:
      return "Platinum";
    case GOLD:
      return "Gold";
    case SILVER:
      return "Silver";
    case BRONZE:
      return "Bronze";
  }
};

export const getRarityTitle = (percentage) => {
  if (percentage <= 1) {
    return "Ultra Rare";
  } else if (percentage > 1 && percentage <= 10) {
    return "Rare";
  } else if (percentage > 10 && percentage <= 25) {
    return "Uncommon";
  } else {
    return "Common";
  }
};
