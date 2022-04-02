import React, { PureComponent } from 'react';

export default class Habit extends PureComponent {
    // 타이머를 시작할 때, 실시간 채팅 대화가 이루어진다면 소켓이나 이런 것들을 초기화할 때 등
    componentDidMount() {
        // console.log(`habit: ${this.props.habit.name} mounted`);
    }

    // 타이머를 중지할 때, 정리하고 리소스를 지우고 하는 것 등
    componentWillUnmount() {
        // console.log(`habit: ${this.props.habit.name} will unmounted`);
    }

    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    render() {
        const { name, count } = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button
                    className="habit-button habit-increase"
                    onClick={this.handleIncrement}
                >
                    <i className="fa-solid fa-square-plus"></i>
                </button>
                <button
                    className="habit-button habit-decrease"
                    onClick={this.handleDecrement}
                >
                    <i className="fa-solid fa-square-minus"></i>
                </button>
                <button
                    className="habit-button habit-delete"
                    onClick={this.handleDelete}
                >
                    <i className="fa-solid fa-trash"></i>
                </button>
            </li>
        );
    }
}
