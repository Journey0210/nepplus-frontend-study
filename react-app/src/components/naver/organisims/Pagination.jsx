import styled from "styled-components";

const Pagination = ({ onPageChange, total, nowpage, display }) => {
  const lastPage = Math.ceil(total / display); //마지막 페이지 구하기 total=3800개면 페이지 버튼은 총 380개 , 여기서 10은 디스플레이 개수와 연관
  const startPage = Math.ceil(nowpage / 10) * 10 - 9; // 1, 11, 21, 31// 여기서 10은 페이지 버튼의 개수를 말한다.
  console.log(nowpage);
  const endPage = startPage + 9 > lastPage ? lastPage : startPage + 9;

  const pageList = [];
  for (let i = startPage; i <= endPage; i++) {
    pageList.push(i);
  }

  return (
    <>
      {nowpage > 1 && (
        <Page onClick={() => onPageChange(nowpage - 1)}>이전</Page>
      )}
      {pageList.map((page) => (
        <Page
          key={page}
          onClick={() => onPageChange(page)}
          active={nowpage === page}
        >
          {page}
        </Page>
      ))}
      {nowpage < lastPage && (
        <Page onClick={() => onPageChange(nowpage + 1)}>다음</Page>
      )}
    </>
  );
};
const Page = styled.button`
  background: ${({ active }) => active && "black"};
  color: ${({ active }) => active && "white"};
`;
export default Pagination;
