var heading = document.querySelector("#heading");
/*해석: html문서 안에서 #heading을 불러와서 그것을 heading이라는 변수로 설정할거야*/
/*querySelctor()는 ()안의 해당 내용을 선택하는 함수*/
/* 변수()는 함수를 실행한다는 의미.  #heading이 인풋, document.querySelector("#heading")가 아웃풋  그 아웃풋을 heading이라는 변수로 선언할거야*/
/* 앞으로 heading은  document.querySelector("#heading")로 취급   =은 대입의 의미. ===가 같다는 의미*/
heading.onclick = function () {
  /*onclik은 함수. heading에 클릭을 하면,  다음 함수실행 / function (){heading.style.color="red"}이라는 함수를 heading.onclick에 넣은 것 */
  heading.style.color = "red"; /*heading의 스타일의 컬러는 레드*/
};
