import Inferno from "inferno";

export const createView = actions => model => {
  const inputField = (name, value) =>
    <input type="text" id={name} name={name} className="form-control" value={value}
      onInput={actions.editingTodo(name)}/>;

  const errorMessage = errors => errors ?
    <div className="ui red label pointing">{errors[0]}</div> : null;

  const inputDiv = (field, label) =>
    <div className={'field' + (model.validationErrors[field] && model.validationErrors[field].length > 0 ? ' error' : '')}>
      <label htmlFor={field}>{label}</label>
      {inputField(field, model.todo[field])}
      {errorMessage(model.validationErrors[field])}
    </div>;

  return (
    <form className="ui form">
      <input type="hidden" name="id" value={model.todo.id}/>
      {inputDiv("priority", "Priority:")}
      {inputDiv("description", "Description:")}
      <div>
        <button className="ui primary basic small button" onClick={actions.saveTodo(model.todo)}>Save</button>
        <button className="ui basic small button" onClick={actions.clearForm()}>Cancel</button>
      </div>
    </form>
  );
};
