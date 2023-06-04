import { FormEvent, useRef } from "react";
import useAddTodo from "./hooks/useAddTodo";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);

  const addTodo = useAddTodo(() => {
    if (ref?.current) ref.current.value = "";
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (ref?.current?.value) {
      addTodo.mutate({
        id: Date.now(),
        title: ref.current.value,
        completed: false,
        userId: 1,
      });

      ref.current.value = "";
    }
  };

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}

      <form className="row mb-3" onSubmit={handleSubmit}>
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
