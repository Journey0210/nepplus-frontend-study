let index = 1; //nth-child

const itemLength = $(".carousel-list").children().length; //선택한 요소의 자식(child) 요소를 모두 선택.

//첫화면: nth-child(1)에만 display:block으로 되어 있음
$(".btn-next").click(() => {
  //다음버튼을 누를 때
  //1)index가 item갯수랑 같으면 index를 1으로
  //2)그렇지 않으면 index 1증가

  //   if (index === itemLength) {
  //     index = 1;
  //   } else {
  //     index += 1;
  //   }

  //   index === itemLength ? index = 1 : index += 1;

  index = index === itemLength ? 1 : index + 1;

  $(".carousel-item").removeClass("active");
  $(".carousel-item:nth-child(" + index + ")").addClass("active");
});

$(".btn-prev").click(() => {
  //이전버튼을 누를 때
  //1)index가 1이면 index를 item갯수로
  //2)그렇지 않으면 index 1증가

  index = index === 1 ? itemLength : index - 1;

  $(".carousel-item").removeClass("active");
  $(`.carousel-item:nth-child(${index})`).addClass("active");
});

$(".button-list button").click(function () {
  //   console.log(this.innerText);
  index = this.innerText;
  $(".carousel-item").removeClass("active");
  $(`.carousel-item:nth-child(${index})`).addClass("active");
});
