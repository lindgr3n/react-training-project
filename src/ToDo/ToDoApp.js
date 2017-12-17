import React, { Component } from 'react';

const data = [
  {
    id: 1,
    checked: false,
    text: 'Item 1'
  },
  {
    id: 2,
    checked: true,
    text: 'Item 2'
  },
  {
    id: 3,
    checked: false,
    text: 'Item 3'
  }
];

class ToDoApp extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: data };

    this.onSelected = this.onSelected.bind(this);
    this.onAddToDoItem = this.onAddToDoItem.bind(this);
  }

  onSelected(item) {
    // console.log({ item });
    // const toUpdate = this.state.todos.filter(e => e.id === item.id);
    const newList = [...this.state.todos].map(e => {
      if (e.id === item.id) {
        console.log('test');
        return Object.assign({}, item, { checked: true });
      }
      return e;
    });
    console.log(newList);
    this.setState({
      todos: [...newList]
    });
  }

  onAddToDoItem(event) {
    // console.log({ event });
    console.log('Add: ' + event);
    this.setState({ todos: [...this.state.todos, { id: this.state.todos.length + 1, checked: false, text: event }] });
  }

  render() {
    return (
      <div style={{ display: 'grid', width: '100%', justifyContent: 'center' }}>
        <div>
          <AddTodoItem onAddToDoItem={this.onAddToDoItem} />
        </div>
        <div style={{ alignSelf: 'flex-start' }}>
          <ToDoList todos={this.state.todos} onSelectionChanged={this.onSelected} />
        </div>
      </div>
    );
  }
}

class AddTodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event) {
    console.log(this.form);
    event.preventDefault();
    this.props.onAddToDoItem(this.item.value);
    // this.form.reset();
    this.setState({ value: '' });
  }

  onChange(event) {
    // console.log(event.target);
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form ref={form => (this.form = form)} onSubmit={this.onSubmit}>
        <input ref={input => (this.item = input)} type="text" placeholder="What do you want to add?" onChange={this.onChange} value={this.state.value} />
      </form>
    );
  }
}

const ToDoList = props => {
  const { todos, onSelectionChanged } = props;
  const filtered = todos.filter(e => !e.checked);
  return <div>{Object.keys(filtered).map(key => <ToDoItem key={filtered[key].id} item={filtered[key]} onSelectionChanged={onSelectionChanged} />)}</div>;
};

const ToDoItem = props => {
  const { item, onSelectionChanged } = props;
  return (
    <div>
      <input id="checkBox" type="checkbox" defaultChecked={item.checked} onChange={e => onSelectionChanged(item)} />
      {item.text}
    </div>
  );
};

export default ToDoApp;
