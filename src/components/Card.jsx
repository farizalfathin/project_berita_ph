/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/react";

export const Card = ({ image, date, title, content, link, onOpen, setDataModal }) => {
    return (
        <article className="w-full bg-white shadow-md rounded-lg overflow-hidden mt-8">
            <img
            src={image}
            className="w-full h-44 object-cover"
            />
            <div className="p-4">
                <p className="text-gray-500 text-xs">{date}</p>
                <h2 className="text-xl font-bold my-2 text-ellipsis line-clamp-2">{title}</h2>
                <p className="text-gray-700 mb-4 text-ellipsis line-clamp-6">{content}</p>
                <Button onPress={() => {
                    setDataModal({ title, link })
                    onOpen();
                }}
                color="primary" className="z-10" variant="flat">
                    Open Modal
                </Button>
            </div>
        </article>
    );
};