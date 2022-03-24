import permissonToDance from "../../../assets/images/insta/permissonToDance.jpg";
import bts from "../../../assets/images/insta/bts.jpg";
import meenoieprofile from "../../../assets/images/insta/meenoiprofile.jpg";
import meenoiePostImage from "../../../assets/images/insta/meenoie.jpg";

export const shortList = [
  {
    id: 1,
    user: {
      name: "meenoie",
      profile: meenoieprofile,
    },
  },
  {
    id: 2,
    user: {
      name: "bts.bighitofficial",
      profile:
        "https://pbs.twimg.com/profile_images/1387421728251408385/gVcCautU_400x400.jpg",
    },
  },
  {
    id: 3,
    user: {
      name: "mindle.maum",
      profile:
        "https://pbs.twimg.com/profile_images/1206067694694326272/GtMlctLb_400x400.jpg",
    },
  },
];

export const postList = [
  {
    id: 1,
    user: {
      profile: meenoieprofile,
      name: "meenoie",
    },
    post: {
      image: meenoiePostImage,
      imageSize: 750,
      like: "62,038",
      content: "@voguekorea♥",
      commentCount: "505",
      createAt: "21시간",
    },
  },
  {
    id: 2,
    user: {
      profile:
        "https://pbs.twimg.com/profile_images/1387421728251408385/gVcCautU_400x400.jpg",
      name: "bts.bighitofficial",
    },
    post: {
      image: bts,
      imageSize: 613,
      like: "1,747,311",
      content: "SEE YOU AT BTS PERMISSION TO DANCE ON STAGE – LAS VEGAS...",
      commentCount: "4,952",
      createAt: "6시간",
    },
  },
];
