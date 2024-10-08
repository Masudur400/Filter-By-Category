import React, { useEffect, useState } from 'react';
import SingleData from './SingleData';
import { FaArrowUp } from 'react-icons/fa';

const Home = () => {

    const [allData, setAllData] = useState([])
    const [category, setCategory] = useState([])
    const [active, setActive] = useState()
    useEffect(() => {
        fetch('fake-data.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])


    const allCategory = [... new Set(allData.map(data => data.category))]

    const handleClick = (category) => {
        setCategory(category)
        setActive(category)
    }

    const filteredData = allData.filter(data => data.category === category)

    return (
        <div>
            <h1 className='text-2xl font-bold my-7 opacity-80'>Filter By Category</h1>

            <div className='flex gap-3 px-2 flex-wrap'>
                {
                    allCategory?.map((category, idx) => <button key={idx} onClick={() => handleClick(category)} className={`${active === category ? 'px-3 py-1 rounded-md border hover:shadow-md bg-gray-100 first-letter:uppercase text-sm font-medium' : 'px-3 py-1 rounded-md border hover:shadow-md first-letter:uppercase text-sm'}`}>{category}</button>)
                }
            </div>

            <div className="divider"></div>

            {active ? <h2 className="text-2xl font-bold my-5 opacity-80">Show <span className='capitalize'>{active}</span> Collection</h2> :
                <h2 className="text-2xl font-bold my-5 flex gap-1 items-center mx-2"> Click The Button <FaArrowUp /></h2>}


            <div className='grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5'>
                {filteredData?.map(data => <SingleData key={data?.id} data={data}></SingleData>)}
            </div>

        </div>
    );
};

export default Home;