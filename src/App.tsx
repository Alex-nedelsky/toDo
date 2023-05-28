import React from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}


function App(): JSX.Element {
    // JSX =>
    const tasks: TasksType[] = [
        {id: 1, title: 'HTML&CSS', isDone: false},
        {id: 2, title: 'JS', isDone: false},
        {id: 3, title: 'ES6/TS', isDone: false},
    ]
    const tasks1: TasksType[] = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ES6/TS', isDone: true},
    ]

    return (
        <div className="App">
            <TodoList
                title={"What to learn"}
                tasks={tasks}
            />
            <TodoList
                title={"What to learn"}
                tasks={tasks1}
            />

        </div>
    );
}

export default App;
