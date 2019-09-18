import React from 'react';
/**
 *
 *
 * @class TodoForm
 * @extends {React.Component}
 */
class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            value: ''
        };
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <h3 className="text-center">Enter to do</h3>
                    <div className="form-row row d-flex justify-content-center">
                        <div className="row mx-md-n5">
                            <input
                                className="form-control mb-2 mr-sm-2"
                                id="new-todo"
                                placeholder='Title'
                                onChange={this.props.handleChange}
                                value={this.props.text}/>
                            <textarea
                                className="form-control mb-2 mr-sm-2"
                                type="text"
                                placeholder='Description'
                                value={this.props.value}
                                onChange={this.props.handleTextarea}/>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="btn btn-outline-primary">
                            Add #{this.props.items.length + 1}
                        </button>
                        <button className="btn btn-outline-danger" onClick={this.props.emptyTodo}>
                            Empty
                        </button>
                    </div>
                </form>
                <br/>
            </div>
        );
    }
}

export default TodoForm;
