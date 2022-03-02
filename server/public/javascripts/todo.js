//1.입력하기
$("#form").submit((e) => {
  e.preventDefault(); //form의 action을 막는 역할
  //   const jsValue = document.getElementById("input-text").value;
  const value = $("#input-text").val();

  if (value === "") return; //값이 빈값이면 실행하지 말아라

  const name = $("#input-name").val();

  $.ajax({
    // 비동기 함수
    url: "/todo",
    method: "POST",
    data: {
      text: value,
      name: name,
    },
    success: (result) => {
      console.log(result);
      const id = result.id;

      $(".list-wrapper").append(`<li class="item-list" data-id="${id}">
        <input type="checkbox"/>
        <p class="content">${value}</p>
        <img src="../images/images/modify.png" class="modify"  />
        <img src="../images/images/trashcan.png" class="trash-can" />
      </li>`);
    },
  });

  $("#input-text").val(""); //인풋 텍스트 안 비워주기
  $("#input-text").focus();
});
//전체삭제
$(".btn-delete-all").click(() => {
  const name = $("#input-name").val();

  $.ajax({
    url: "/todo",
    method: "DELETE",
    data: {
      name: name, //앞에 있는 name은 백엔드 개발자가 정해 높은 key명, 뒤에 있는 name은 프론트엔드 개발자가 정한 name
    },
    success: (result) => {
      //서버의 응답데이터가 클라이언트에게 도착하면 자동으로 실행되는함수(콜백)
      //result - 응답데이터
      console.log(result);
      $(".list-wrapper").html("");
    },
  });
});

//삭제하기
$(".list-wrapper").on("click", ".trash-can", (e) => {
  const id = $(e.currentTarget).closest(".item-list").data("id");
  $.ajax({
    url: `/todo/${id}`, //id가 서버 변수인지 클라이언트 변수인지 db의 열인지 구분해야 함
    method: "DELETE", //db에서도 삭제를 하기 위해서
    success: (result) => {
      console.log(result);
      $(e.currentTarget).parent().remove();
    },
  });
});

//할 일 체크하기
$(document).on("change", "input[type=checkbox]", (e) => {
  const id = $(e.currentTarget).closest(".item-list").data("id");
  const checked = e.currentTarget.checked; //true or false ,input[type=checkbox]가 e.currentTarget
  $.ajax({
    url: `/todo/${id}`,
    method: "PATCH",
    data: {
      isDone: checked ? 1 : 0, //true면 1 false면 0을 보냄
    },

    success: (result) => {
      console.log(result);
      if (checked) {
        $(e.currentTarget).parent().addClass("done"); //만약 부모의 부모를 찾아야 한다면 closest()를 사용한다. $(e.currentTarget).closest("li").addClass("done")
      } else {
        $(e.currentTarget).parent().removeClass("done");
      }
    },
  });
});

//할 일 수정하기//prompt로 변경할 텍스트 받아오기
$(document).on("click", ".modify", (e) => {
  const modified = prompt("수정할 내용을 입력하세요");
  const id = $(e.currentTarget).data("id");

  $.ajax({
    url: `/todo/${id}`,
    method: "PUT",
    data: {
      text: modified,
    },
    success: (result) => {
      console.log(result);
    },
  }); //비동기 함수

  if (modified !== null) {
    $(e.currentTarget).siblings(".content").text(modified); //js는 innerText, innerHTML/ jquery는 text(),html()
  }
});

//서버: 전체체크 api 실행(isDone:1)
//클라이언트: 모든 checkbox 체크,
//모든 li에 active(done)클래스 추가
$("#btn-check-all").click(() => {
  const name = $("#input-name").val();
  $.ajax({
    url: "/todo/all",
    method: "PATCH",
    data: {
      name: name,
      isDone: 1,
    },
    success: (result) => {
      console.log(result);
      $("input[type='checkbox']").prop("checked", true);

      $(".item-list").addClass("done");
    },
  });
});

//서버: 전체체크해제 api 실행(isDone :0)
//클라이언트: 모든 checkboxdp 체크해체,
//모든 li에 active(done)클래스 제거
$("#btn-uncheck-all").click(() => {
  const name = $("#input-name").val();
  $.ajax({
    url: "/todo/all",
    method: "PATCH",
    data: {
      name: name,
      isDone: 0,
    },
    success: (result) => {
      console.log(result);
      $("input[type='checkbox']").prop("checked", false);
      $(".item-list").removeClass("done");
    },
  });
});
