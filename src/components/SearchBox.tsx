import type { ChangeEvent } from 'react';

interface SearchBoxProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const SearchBox = ({ value , onChange , placeholder = "Search ..." , className= "" } : SearchBoxProps) => {
    return (
        <div className={`w-full max-w-md ${className}`}>
            <input 
                type="text" 
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full h-[30px] bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                />
        </div>
    )
}

export default SearchBox