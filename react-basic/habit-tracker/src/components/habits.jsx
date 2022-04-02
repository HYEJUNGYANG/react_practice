import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    // 직접적으로 state의 배열 값을 수정하면 좋지 않음

    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    };

    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    };

    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };

    render() {
        return (
            <ul>
                {this.props.habits.map((habit) => (
                    <Habit
                        key={habit.id}
                        habit={habit}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    />
                ))}
            </ul>
        );
    }
}

export default Habits;
