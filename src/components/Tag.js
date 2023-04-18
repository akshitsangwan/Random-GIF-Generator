import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
    
    const [tag, setTag] = useState('car');
    const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="flex flex-col items-center w-1/2 bg-blue-400 rounded-2xl border border-black gap-y-5">
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random <span className='text-orange-200'>{tag}</span> Gif</h1>

        {
            loading ? (<Spinner />) : (<img src={gif} width='450' />)
        }

        <input 
            className='w-10/12 py-2 rounded-lg font-semibold -mb-[10px] text-center'
            onChange={(event) => setTag(event.target.value)}
            value={tag}
        />
        
        <button 
        onClick={() => fetchData()}
        className='w-10/12 bg-white/70 py-2 rounded-lg uppercase font-semibold hover:bg-white transition-all duration-200 mb-[20px]'>
            Generate
        </button>
    </div>
  )
}

export default Tag