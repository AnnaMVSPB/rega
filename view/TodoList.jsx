const React = require('react');
const Form = require('./Form');
const Layout = require('./Layout');

const TodoList = ({ title, todos }) => {
  return (
    <Layout title={title}>
      <Form />
      <ul className="todo__list">
        {todos.map((todo) => (
          <li
            id={todo.id}
            key={todo.id}
            className={todo.important ? 'todo__card important' : 'todo__card'}
          >
            <h3>{todo.title}</h3>
            <img src={todo.url} alt="4to-to" />
            <button id="button" className="btn btn-success">
              delete
            </button>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

module.exports = TodoList;
