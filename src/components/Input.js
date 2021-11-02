import React from 'react';

const Input = (props)=>{
    const{lableName,inputType,placeHolder,valueTx,className}=props
    return(
        <label className="flex flex-col mb-4 text-sm">
            {lableName}
            <input className="bg-gray-200 rounded py-0.5 px-1 text-sm" type={inputType} placeholder={placeHolder} value={valueTx}/>
        </label>
    )
}
export default Input;