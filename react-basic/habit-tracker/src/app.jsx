import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
    state = {
        habits: [
            { id: 1, name: 'Reading', count: 0 },
            { id: 2, name: 'Running', count: 0 },
            { id: 3, name: 'Coding', count: 0 },
        ],
    };

    handleIncrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++; // 💩
        this.setState({ habits }); // habits: habits의 축약버전
    };

    handleDecrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count; // 💩
        this.setState({ habits });
    };

    handleDelete = (habit) => {
        const habits = this.state.habits.filter((item) => item.id !== habit.id);
        this.setState({ habits });
    };

    handleAdd = (name) => {
        const habits = [
            ...this.state.habits,
            { id: Date.now(), name, count: 0 },
        ];
        this.setState({ habits });

        // const length = this.state.habits.length;
        // this.state.habits.push({ id: length + 1, name: name, count: 0 });
        // const habits = [...this.state.habits];
        // this.setState({ habits });
    };

    handleReset = () => {
        const habits = this.state.habits.map((habit) => {
            habit.count = 0;
            return habit;
        });
        this.setState({ habits });
    };

    // const name = undefined;
    // class="" (x) -> className =""
    // onclick="" (x) -> onClick (대문자)
    // return (
    //     // 형제 노드가 있을 때는 묶어줘야 함
    //     // <></> 아무것도 작성하지 않아도 React.Fragment를 작성한 것과 동일
    //     <React.Fragment>
    //         <h1>Hello</h1>
    //         {name && <h1>Hello {name} :)</h1>}
    //         {['💕', '🍎'].map((item) => (
    //             <h1>{item}</h1>
    //         ))}
    //     </React.Fragment>
    // );

    render() {
        console.log('app');
        return (
            <>
                <Navbar
                    totalCount={
                        this.state.habits.filter((item) => item.count > 0)
                            .length
                    }
                />
                <Habits
                    habits={this.state.habits}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    onAdd={this.handleAdd}
                    onReset={this.handleReset}
                />
            </>
        );
    }
}

export default App;
