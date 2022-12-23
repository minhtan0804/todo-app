import Board from "../../components/board/Board";
import Column from "../../components/column/Column";
import Sidebar from "../../components/menu/Menu";
import Task from "../../components/task/Task";
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