import { Search } from "lucide-react";
import React from "react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="p-16 bg-slate-700 flex flex-col justify-center items-center text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent pointer-events-none"></div>
      <h2 className="text-4xl font-extrabold tracking-tight mb-2 z-10">Browse All Templates</h2>
      <p className="text-slate-300 text-lg mb-8 z-10">What would you like to create today?</p>
      <div className="w-full flex justify-center relative z-10">
        <div className="flex gap-3 items-center p-3 border border-slate-700 rounded-xl w-full max-w-2xl bg-slate-800/80 backdrop-blur-sm transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/20 focus-within:bg-slate-800 shadow-xl">
          <Search className="text-primary w-6 h-6 ml-2" />
          <input
            type="text"
            placeholder="Search templates..."
            spellCheck={false}
            onChange={(event) => onSearchInput(event.target.value)}
            className="focus:outline-none bg-transparent w-full text-white placeholder:text-slate-400 text-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
