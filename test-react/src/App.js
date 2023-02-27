function RegForm() {
  return (
    <div className="form-container">
      <form className="form">
        <label for="name" name="name" className="form-fieldname">Name</label>
        <input type="text" placeholder="Enter your name here" className="form-input-field" />
      </form>
    </div>
  );
}

function App() {
  return (
    <>
      <h1 className="header-title">Components with react!</h1>
      <hr style={{ border: "1px solid lightgray" }} />
      <br />
      <div>
        <RegForm />
      </div>
    </>
  );
}

export default App;
