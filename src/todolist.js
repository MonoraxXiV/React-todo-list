import React, { Component } from "react";

class TodoList extends Component {
    render() {
        return (
            <div>
                <form>
                    <input placeholder="enter task">
                    </input>
                    <button type="submit">add</button>
                </form>
            </div>
        )
    }
}

export default TodoList;
