import React from "react";
import Todo from "./Components/Todo/Todo";
const App = () => {
  const [users, setUsers] = React.useState([]);

  const del = (id) => {
    const filter = users.filter((e) => e.id !== id);
    setUsers(filter);
  };
  const deleteAll = () => {
    setUsers([]);
  };
  return (
    <div className="w-[510px] bg-[#35b5bc] mx-auto px-10 py-10 rounded-lg mt-20">
      <Todo addData={setUsers} />
      {users.map((e, index) => (
        <li
          key={e.id}
          className="list bg-[#094f4f] text-white flex w-full items-center justify-between pr-3 mb-1"
        >
          <div className="flex gap-2 py-3 px-2">
            <p>{index + 1}. </p>
            <h1> {e.input}</h1>
          </div>
          <button onClick={() => del(e.id)}>
            <i className="bx bx-x bg-red-500 p-2 hover:bg-red-800"></i>
          </button>
        </li>
      ))}

      {users.length > 2 ? (
        <button
          onClick={deleteAll}
          className="bg-red-700 px-10 py-2 rounded-md text-white font-medium text-xl hover:bg-red-400 mx-auto block mt-3"
        >
          Clear All
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
