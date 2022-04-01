import html5 from "../../../assets/images/main/html5_icon.svg";
import css3 from "../../../assets/images/main/css3_icon.svg";
import js from "../../../assets/images/main/js_icon.svg";
import jquery from "../../../assets/images/main/jquery_icon.svg";
import react from "../../../assets/images/main/react_icon.svg";
import nodejs from "../../../assets/images/main/nodejs_icon.svg";

export const iconList = [
  {
    id: 1,
    icon: html5,
    dataAosDelay: "200",
  },
  {
    id: 2,
    icon: css3,
    dataAosDelay: "300",
  },
  {
    id: 3,
    icon: js,
    dataAosDelay: "400",
  },
  {
    id: 4,
    icon: jquery,
    dataAosDelay: "500",
  },
  {
    id: 5,
    icon: react,
    dataAosDelay: "600",
  },
  {
    id: 6,
    icon: "https://www.styled-components.com/atom.png",
    dataAosDelay: "700",
  },
];

export const skillList = [
  {
    id: 1,
    name: "Javascript",
    content:
      "최신문법인 템플릿 리터럴, 화살표 함수, 구조분해할당, 삼항연산자,  Spread 연산자, Default parameter, Shorthand property names 등에 대해 이해하고 있으며, 이를 사용해 프로젝트를 만들었습니다. 싱글스레드 기반의 하나의 호출스텍으로 이루어진 자바스크립트의 작동원리에 대한 이해를 바탕으로, 지금은 자바스크립트 알고리즘 공부를 하고 있습니다. 아직도 알아야 할 부분들이 많기에 자바스크립트에 대한 공부는 앞으로도 꾸준히 해나갈 것입니다.",
  },
  {
    id: 2,
    name: "Jquery",
    content:
      "토이프로젝트로 제이쿼리를 이용해 추가, 삭제, 수정, 전체삭제 등의 기능이 있는 투두리스트를 만들어 본 경험이 있습니다. 제이쿼리의 다양한 메서드를 사용하면 vanilla javascript로 만들 때 보다 훨씬 더 직관적이고 간결한 코드를 작성할 수 있다고 생각합니다.",
  },
  {
    id: 3,
    name: "React",
    content:
      "React는 현 시점에서 가장 트렌디한 프레임워크로서, 저 역시 이번 프로젝트 모두 react 환경에서 개발했습니다. 함수형 컴포넌트와 useState, useEffect, useRef hook, react-router-dom을 사용했고, 컴포넌트의 재사용성과 수정의 용이성을 고려하여 Atomic design을 참고해 Page>Organism>Molecule>Atom 단위로 컴포넌트를 구성 및 조합했습니다. 리액트에 대한 기초적인 이해를 마친 상태이며, 지금은 리액트 상태관리에 대한 공부를 해나가고 있습니다. 앞으로도 React환경에서 개발해 나가기를 선호하며, 기회가 된다면 Vue.js도 경험해 보고 싶습니다.",
  },
  {
    id: 4,
    name: "Styled Components",
    content:
      "React로 개발할 때 대표적인 CSS-in-JS 라이브러리인 styled-components를 이용해 스타일링을 하고 있습니다. styled-components는 자바스크립트와 연결이 가능하여 리액트의 props등을 이용해 조건부 스타일링이 가능하고, React의 컴포넌트 형태로 사용이 가능해 className의 중복이 발생하지 않으며 스타일의 재사용 및 상속이 가능하다는 편리함을 가지고 있습니다. 이번 프로젝트도 Styled-components를 이용했습니다. 참고로 메인 페이지에서 구현한 야간모드 기능은 Styled-components의 ThemeProvider를 사용했습니다.",
  },
];
