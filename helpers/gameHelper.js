export const sortGamesByRecent = (games) => {
  return games;
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
