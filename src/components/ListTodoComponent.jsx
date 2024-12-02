import React, { useState } from "react";

export default function ListTodoComponent() {
  const dummyData = [
    {
      id: 1,
      title: "Learn Spring Boot",
      description: "Learn Spring boot with project",
      completed: true,
    },
    {
      id: 2,
      title: "Learn Hibernate updated",
      description: "Learn Hibernate with project updated",
      completed: true,
    },
  ];
  const [todos, setTodos] = useState(dummyData);
  return (
    <div className="container">
      <h2 className="text-center">List of Todos</h2>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Todo Title</th>
              <th>Todo Description</th>
              <th>Todo Completed</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.completed ? "YES" : "NO"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
