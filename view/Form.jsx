const React = require('react');

const Form = () => {
  return (
    <div className="container mt-3">
      <form action="/todos" method="post" id="form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            URL
          </label>
          <input name="url" type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input name="important" type="checkbox" className="form-check-input" id="exampleCheck1" />
        </div>
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
    </div>
  );
};

module.exports = Form;
