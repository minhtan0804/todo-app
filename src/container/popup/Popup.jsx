import { useState } from "react";
import ModalCus from "../../components/modalCus/ModalCus";

const Popup = () => {
    const [isCancelButtonHidden, setIsCancelButtonHidden] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (  
        <div >
            <ModalCus
                titleButton="Open"
                titleModal="React JS"
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                isCancelButtonHidden={isCancelButtonHidden}
                desctiptions={
                    <div>
                        Lorem ipsum dolor
                    </div>
                }
            ></ModalCus>
        </div>
    );
}
 
export default Popup;