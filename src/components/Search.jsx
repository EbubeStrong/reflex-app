import React, { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  return (
    <div className="flex justify-center items-center">
      <input
        className="bg-gray-100 rounded-full py-2 px-4 w-full border-[1px] border-blue-300 outline-none focus:ring focus:ring-blue-300"
        type="text"
        placeholder="Search..." 
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}
