const Button = ({ title, fun, color }) => {
  return (
    <div className="button_container">
      <div className="button_subcontainer">
        <button onClick={() => (fun ? fun() : null)}>{title}</button>
      </div>
    </div>
  );
};

export { Button };
