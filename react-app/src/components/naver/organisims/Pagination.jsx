import styled from "styled-components";

const Pagination = ({ onPageChange, total, nowpage }) => {
  const lastPage = Math.ceil(total / 10); //마지막 페이지 구하기 total=3800개면 페이지 버튼은 총 380개

  const startPage = Math.ceil(nowpage / 10) * 10 - 9; // 1, 11, 21, 31

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
