import { Card } from "./Card";
import { showFormattedDate } from "../utils/formatDate";
import { memo, useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import ModalComponents from "./ModalComponent";
/* eslint-disable react/prop-types */

const ListCards = ({ datas }) => {
    const [dataModal, setDataModal] = useState();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-4">
            {datas.map((data, i) => (
                <Card
                key={i}
                title={data.title}
                date={showFormattedDate(data.isoDate)}
                content={data.contentSnippet}
                image={data.image.small}
                link={data.link}
                onOpen={onOpen}
                setDataModal={setDataModal} />
            ))}
            </div>
            <ModalComponents isOpen={isOpen} onOpenChange={onOpenChange} news={dataModal} />
        </>
    );
};

export default memo(ListCards);