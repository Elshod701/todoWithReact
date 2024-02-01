import React from "react";

const Todo = ({ addData }) => {
  const [state, setState] = React.useState({ input: "" });

  const submit = (e) => {
    e.preventDefault();
    if (state.input.length > 2) {
      addData((p) => [...p, { ...state, id: Date.now() }]);
      setState({ input: "" });
    } else {
      alert("Add more than two letters");
    }
  };
  const change = (e) => {
    setState((state2) => ({ ...state2, input: e.target.value }));
  };

  return (
    <div>
      <h1 className="text-center font-semibold text-3xl py-4">MY TODO APP</h1>
      <form
        onSubmit={submit}
        className="flex items-center justify-between mb-1"
      >
        <input
          className="outline-none border-none py-2 pl-2 bg-gray-200 w-[100%] rounded-lg"
          onChange={change}
          name="input"
          value={state.input}
          type="text"
          placeholder="Text"
        />
        <button
          className="bg-green-600 hover:bg-green-900 px-8 py-2 text-white font-medium "
          type="submit"
        >
          OK
        </button>
      </form>
    </div>
  );
};

export default Todo;
