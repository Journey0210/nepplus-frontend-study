let index = 0;

const itemLength = $(".carousel-list").children().length; //선택한 요소의 자식(child) 요소를 모두 선택.

$(".btn-next").click(() => {
  index = index === itemLength - 1 ? 0 : index + 1;
  $(".carousel-list").css("transform", `translateX(-${index * 800}px)`);
});

$(".btn-prev").click(() => {
  index = index === 0 ? itemLength - 1 : index - 1;

  $(".carousel-list").css("transform", `translateX(-${index * 800}px)`);
});

$(".button-list button").click(function () {
  //   console.log(this.innerText);
  index = this.innerText - 1;
  $(".carousel-list").css("transform", `translateX(-${index * 800}px)`);
});
