import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: todoService.post,
    onSuccess: (savedTodo, newTodo) => {
      /**
       * APPROACH 1: Invalidating the cache, does not work with Json placeholder, due to fake db
       */
      // queryClient.invalidateQueries({ queryKey: CACHE_KEY_TODOS });
      /**
       * APPROACH 2: Updating the data in the cache
       */
      // queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
      //   savedTodo,
      //   ...todos,
      // ]);
      // if (ref?.current) ref.current.value = "";
      /**
       * APPROACH 3: Optimistic updates: Replace updated todo with todo received from backend
       */
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => {
        return todos?.map((todo) => (todo === newTodo ? savedTodo : todo));
      });
    },

    onMutate: (newTodo: Todo) => {
      /**
       * APPROACH 3: Optimistic updates: Update data in cache before sending to backend.
       */

      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      onAdd();

      return { previousTodos };
    },

    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueriesData<Todo[]>(
        CACHE_KEY_TODOS,
        context.previousTodos
      );
    },
  });
};

export default useAddTodo;
