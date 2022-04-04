import styled from "styled-components"
import { ReactComponent as Like } from "../../../assets/images/insta/Like.svg";
import { ReactComponent as Comment } from "../../../assets/images/insta/Comment.svg";
import { ReactComponent as Direct } from "../../../assets/images/insta/Direct.svg";
import { ReactComponent as Save } from "../../../assets/images/insta/Save.svg";

const CommentIconList =()=>{
    return<>    
        <IconWrapper>
              <Left>
                <Icon>
                  <Like />
                </Icon>
                <Icon>
                  <Comment />
                </Icon>
                <Icon>
                  <Direct />
                </Icon>
              </Left>
              <Right>
                <Icon>
                  <Save />
                </Icon>
              </Right>
       </IconWrapper>
    </>
}
const IconWrapper = styled.div`
  width:100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 10px 0 6px 16px;
  border-top: 1px solid #ddd;
`;
const Left = styled.div`
  display: flex;
`;
const Right = styled.div``;
const Icon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;
export default CommentIconList

