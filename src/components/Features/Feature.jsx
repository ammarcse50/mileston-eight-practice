import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";

const Feature = ({feature}) => {
    return (
        <div>

            <p className='flex gap-3 items-center'>
                <FaCircleCheck className='text-green-400'>
                    </FaCircleCheck>{feature}</p>
            
        </div>
    );
};

export default Feature;