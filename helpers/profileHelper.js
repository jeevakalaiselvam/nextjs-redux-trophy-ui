import { BRONZE, GOLD, SILVER } from "./gameHelper";

export const calculateProfileData = (games) => {
  let profileLevel = 0;
  let totalPoints = 0;
  let totalTrophies = 0;
  let platinumTrophies = 0;
  let goldTrophies = 0;
  let silverTrophies = 0;
  let bronzeTrophies = 0;

  let allUnlockedAchievements = [];

  games &&
    games.length &&
    games.forEach((game) => {
      let gamePoints = 0;
      if (game.completion == 100) {
        platinumTrophies++;
      }
      game &&
        game.achievements &&
        game.achievements.forEach((achievement) => {
          gamePoints += achievement.points;
          if (achievement.percentage && achievement.achieved == 1) {
            let pointsForTrophy = achievement.points;
            totalPoints = totalPoints + pointsForTrophy;

            if (pointsForTrophy <= 10) {
              goldTrophies++;
            } else if (pointsForTrophy > 10 && pointsForTrophy <= 50) {
              silverTrophies++;
            } else {
              bronzeTrophies++;
            }
          }
        });
    });

  profileLevel = calculateProfileLevelFromPoints(totalPoints).level;
  totalTrophies = silverTrophies + bronzeTrophies + goldTrophies;

  return {
    profileLevel,
    totalTrophies,
    platinumTrophies,
    goldTrophies,
    silverTrophies,
    bronzeTrophies,
  };
};

export const calculateProfileDataForGame = (game) => {
  let totalPoints = 0;
  let totalTrophies = 0;
  let platinumTrophies = 0;
  let goldTrophies = 0;
  let silverTrophies = 0;
  let bronzeTrophies = 0;

  if (game && game.achievements.length > 0) {
    game.achievements.forEach((achievement) => {
      if (game.completion == 100) {
        platinumTrophies++;
      }

      if (achievement.percentage && achievement.achieved == 1) {
        let pointsForTrophy = achievement.points;

        totalPoints = totalPoints + pointsForTrophy;

        if (pointsForTrophy <= 10) {
          goldTrophies++;
        } else if (pointsForTrophy > 10 && pointsForTrophy <= 50) {
          silverTrophies++;
        } else {
          bronzeTrophies++;
        }
      }
    });
  }

  totalTrophies = silverTrophies + bronzeTrophies + goldTrophies;

  return {
    totalTrophies,
    platinumTrophies,
    goldTrophies,
    silverTrophies,
    bronzeTrophies,
  };
};

const calculateLevelRecursive = (levelInfo) => {
  if (levelInfo.level < 100 && levelInfo.remainingPoints - 60 >= 0) {
    levelInfo.level = levelInfo.level + 1;
    levelInfo.remainingPoints = levelInfo.remainingPoints - 60;
    calculateLevelRecursive(levelInfo);
  } else if (
    levelInfo.level >= 100 &&
    levelInfo.level < 200 &&
    levelInfo.remainingPoints - 90 >= 0
  ) {
    levelInfo.level = levelInfo.level + 1;
    levelInfo.remainingPoints = levelInfo.remainingPoints - 90;
    calculateLevelRecursive(levelInfo);
  } else if (
    levelInfo.level >= 200 &&
    levelInfo.level < 300 &&
    levelInfo.remainingPoints - 450 >= 0
  ) {
    levelInfo.level = levelInfo.level + 1;
    levelInfo.remainingPoints = levelInfo.remainingPoints - 450;
    calculateLevelRecursive(levelInfo);
  } else if (
    levelInfo.level >= 300 &&
    levelInfo.level < 400 &&
    levelInfo.remainingPoints - 900 >= 0
  ) {
    levelInfo.level = levelInfo.level + 1;
    levelInfo.remainingPoints = levelInfo.remainingPoints - 900;
    calculateLevelRecursive(levelInfo);
  } else if (
    levelInfo.level >= 400 &&
    levelInfo.level < 500 &&
    levelInfo.remainingPoints - 1350 >= 0
  ) {
    levelInfo.level = levelInfo.level + 1;
    levelInfo.remainingPoints = levelInfo.remainingPoints - 1350;
    calculateLevelRecursive(levelInfo);
  } else if (
    levelInfo.level >= 500 &&
    levelInfo.level < 600 &&
    levelInfo.remainingPoints - 1800 >= 0
  ) {
    levelInfo.level = levelInfo.level + 1;
    levelInfo.remainingPoints = levelInfo.remainingPoints - 1800;
    calculateLevelRecursive(levelInfo);
  } else if (
    levelInfo.level >= 600 &&
    levelInfo.level < 700 &&
    levelInfo.remainingPoints - 2250 >= 0
  ) {
    levelInfo.level = levelInfo.level + 1;
    levelInfo.remainingPoints = levelInfo.remainingPoints - 2250;
    calculateLevelRecursive(levelInfo);
  } else if (
    levelInfo.level >= 700 &&
    levelInfo.level < 800 &&
    levelInfo.remainingPoints - 2700 >= 0
  ) {
    levelInfo.level = levelInfo.level + 1;
    levelInfo.remainingPoints = levelInfo.remainingPoints - 2700;
    calculateLevelRecursive(levelInfo);
  } else if (
    levelInfo.level >= 800 &&
    levelInfo.level < 900 &&
    levelInfo.remainingPoints - 3150 >= 0
  ) {
    levelInfo.level = levelInfo.level + 1;
    levelInfo.remainingPoints = levelInfo.remainingPoints - 3150;
    calculateLevelRecursive(levelInfo);
  } else {
    return;
  }
};

const calculateProfileLevelFromPoints = (points) => {
  const levelInfo = {
    level: 0,
    remainingPoints: points,
  };

  calculateLevelRecursive(levelInfo);

  return levelInfo;
};

export const getIconTypeForPercentage = (point) => {
  if (point <= 10) {
    return GOLD;
  } else if (point > 10 && point <= 50) {
    return SILVER;
  } else {
    return BRONZE;
  }
};
