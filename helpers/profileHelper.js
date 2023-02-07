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
      if (game.completion == 100) {
        platinumTrophies++;
      }
      game &&
        game.achievements &&
        game.achievements.forEach((achievement) => {
          if (achievement.percentage && achievement.achieved == 1) {
            let pointsForTrophy = getPointsForAchievementPercentage(
              achievement.percentage
            );
            totalPoints = totalPoints + pointsForTrophy;

            if (pointsForTrophy === 90) {
              goldTrophies++;
            } else if (pointsForTrophy === 30) {
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
        let pointsForTrophy = getPointsForAchievementPercentage(
          achievement.percentage
        );

        totalPoints = totalPoints + pointsForTrophy;

        if (pointsForTrophy === 90) {
          goldTrophies++;
        } else if (pointsForTrophy === 30) {
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

export const getPointsForAchievementPercentage = (percentage) => {
  let point = 0;

  if (percentage <= 10) {
    point = 90;
  } else if (percentage > 10 && percentage <= 50) {
    point = 30;
  } else {
    point = 15;
  }

  return point;
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
