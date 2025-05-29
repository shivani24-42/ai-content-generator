import { Search } from "lucide-react";
import React from "react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="p-10 bg-gradient-to-tr from-[rgb(0,210,255)] to-[rgb(58,123,213)] flex flex-col justify-center items-center text-white">
      <h2 className="text-3xl font-bold">Browse All Templates</h2>
      <p>What would you like to create today?</p>
      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center p-2 border rounded-md my-5 w-[50%] bg-white ">
          <Search className="text-[rgb(42,193,227)]" />
          <input
            type="text"
            placeholder="Search"
            spellCheck={false}
            onChange={(event) => onSearchInput(event.target.value)}
            className="focus:outline-none focus:ring-0 focus:border-transparent bg-transparent w-full text-[rgb(42,193,227)] placeholder:text-transparent placeholder:bg-clip-text placeholder:bg-gradient-to-tr placeholder:from-[rgb(0,210,255)] placeholder:to-[rgb(58,123,213)] caret-[rgb(42,193,227)]"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
