import { useState } from "react";

const SingleData = ({ data }) => {

    const [show, setShow] = useState(false)
    const { name, image, category, description } = data

    const shortDescription = description.split(' ').slice(0, 10).join(' ')

    return (
        <div className="p-1 rounded-md border hover:shadow-md space-y-1">
            <div className="flex justify-center items-center">
                <img src={image} alt="image" className="w-52 border border-black h-32" />
            </div>
            <div className="px-2 space-y-1">
                <p className="font-bold">{name}</p>
                <p className="font-medium text-orange-400 first-letter:uppercase">{category}</p>
                <div className="">
                    <p>
                        {show ? description : `${shortDescription}...`}
                    </p>
                    <button onClick={() => setShow(!show)} className="font-bold">
                        {show ? 'See Less' : 'See More'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleData;