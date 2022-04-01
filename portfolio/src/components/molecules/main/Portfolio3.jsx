import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../../atoms/main/button";

const Portfolio3 = ()=>{
    return <>투두리스트
    
    <Link to="/todo" target="_blank" rel="noopener noreferrer">
    <Button>View</Button>
    </Link>
    </>
}
export default Portfolio3;