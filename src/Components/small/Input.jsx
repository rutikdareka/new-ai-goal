const Input = ({ title, fun, value }) => {
  return (
    <div className="input_container">
      <input
        value={value}
        placeholder={title}
        onChange={(e) => (fun ? fun(e.target.value) : null)}
      />
    </div>
  );
};

export { Input };
