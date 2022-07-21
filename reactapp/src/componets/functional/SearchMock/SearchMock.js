import React, { useState } from "react";

const SearchMock = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <SearchInput value={input} setValue={setInput} />
      <SearchList search={input} />
    </div>
  );
};

const SearchInput = ({ value, setValue }) => {
  return (
    <input
      value={value}
      setValue={setValue}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};


const SearchList = (search) => {
  const list = [
    { title: "Harry Potter 6" },
    { title: "Game of thrones" },
    { title: "Lion king" },
    { title: "How to train your dragon" },
    { title: "Kamiondzije" },
  ];

  const searchList = list.filter(movie => {
    if (search === "") return false
    return movie.title.includes(search)
  })
  return (
    <div>
      {searchList.map((movie) => {
        <p>{movie.title}</p>;
      })}
    </div>
  );
};

export default SearchMock;
