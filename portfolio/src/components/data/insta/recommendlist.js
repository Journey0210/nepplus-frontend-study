import eightballtown from "../../../assets/images/insta/eightballtown.jpg";
import giriboy from "../../../assets/images/insta/giriboy.jpg";

const recommendAccountList = [
  {
    id: 1,
    user: {
      profile: eightballtown,
      id: "8balltown",
      text: "회원님을 위한 추천",
    },
  },
  {
    id: 2,
    user: {
      profile: giriboy,
      id: "giriboy91",
      text: "meenoie님이 팔로우 합니다",
    },
  },
  {
    id: 3,
    user: {
      profile:
        "data:image/jpeg;base64,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",
      id: "since______",
      text: "인기",
    },
  },
  {
    id: 4,
    user: {
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-X4yI-emgV--ciJQISeG1I-_Wv1Z7AZm55g&usqp=CAU",
      id: "ph1boyyy",
      text: "인기",
    },
  },
];

export default recommendAccountList;
