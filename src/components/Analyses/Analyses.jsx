import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Pie, PieChart } from 'recharts';

const Analyses = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const dataChart = useLoaderData();
    console.log(dataChart);


    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    return (
        <div className='mt-28'>
            <PieChart width={400} height={400}>
                <Pie activeIndex={activeIndex} data={dataChart} dataKey="price" cx="50%" cy="50%" innerRadius={60} outerRadius={80} onMouseEnter={onPieEnter}></Pie>
                {/* <Pie data={dataChart} dataKey="ratings" cx="50%" cy="50%" innerRadius={70} outerRadius={90}></Pie> */}
            </PieChart>
        </div>
    );
};

export default Analyses;