

const Todos = ({ todos }) => {
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>Item: {todo.title}</h2>
        </div>
      ))}
    </div>
  );
};
export default Todos;
