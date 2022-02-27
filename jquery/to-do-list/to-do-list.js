
$("#form").submit((e) => {
  e.preventDefault(); //form의 action을 막는 역할
  //   const jsValue = document.getElementById("input-text").value;
  const value = $("#input-text").val();

  if (value === "") return; //값이 빈값이면 실행하지 말아라

  $(".list-wrapper").append(` <li>         
  <input type="checkbox"/>       
  <p>${value}</p>
  <img src="images/trashcan.png" class="trash-can" />          
</li> `)

  $("#input-text").val(""); //인풋 텍스트 안 비워주기
  $("#input-text").focus();
});
//전체삭제
$(".btn-delete-all").click(() => {
  $(".list-wrapper").html("");
});

// $(".trash-can").click((e) => {
//   $(e.currentTarget).parent().remove();
// // }); 이렇게 하면 기존에 있었던 엘리먼트의 .trash-can에만 적용될 뿐. 새로 엘리먼트가 생겼을 때 .trash-can에는 적용 안 됨

$(".list-wrapper").on("click", ".trash-can", (e) => {
  $(e.currentTarget).parent().remove();
});

//상위 요소에 이벤트를 위임하면 나중에 추가된 엘리먼트에도 이벤트 리스너가 사용될 수 있다.
//"클릭이벤트의 대상이 .trash-can이면" 실행한다. 나중에 추가된 엘리먼트도 이벤트를 추가하려먼 이렇게 써야 함 이벤트 버블링과 관련
// 이벤트 버블링은 특정 화면 요소에서 이벤트가 발생했을 때 해당 이벤트가 더 상위의 화면 요소들로 전달되어 가는 특성을 의미

//vanilla js버전
// document.querySelector(".list-wrapper").addEventListener("click", (e) => {
//   // console.log(e.target);//이벤트가 일어난 상세한 대상
//   // console.log(e.currentTarget);
//   if (e.target.classList.contains("trash-can")) {
//     e.target.parentNode.remove();
//   }
// });
