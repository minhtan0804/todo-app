import Board from "../../components/board/Board";
import Sidebar from "../../components/menu/Menu";
import { Wrapper } from "../login/loginStyle";
import { Content } from "./homeStyle";

const Home = () => {
    return (  
        <Wrapper>
            <Sidebar />
        
            <Content>
                <Board />
            </Content>
        </Wrapper>
    );
}
 
export default Home ;