const React = require('react');
const Layout = require('./Layout');

function Rega (){
  return (
    <Layout>
      <div style={{backgroundColor: 'gray', padding: '20px', marginTop: '20px', borderRadius: '15px'}} className='container'>
      <form action="/auth/reg" method="post" id="formRega">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
        <label htmlFor="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input name="email" type="email" className="form-control" id="exampleCheck1" />
        </div>
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
      <div className='errorReg'/>
      </div>
    </Layout>
  )
}

module.exports = Rega;
