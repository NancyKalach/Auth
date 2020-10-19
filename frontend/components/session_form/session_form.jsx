import React from 'react';

class SessionForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password:""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((err, idx) => (
                    <li key={idx}>
                        {err}
                    </li>
                ))}
            </ul>
        );
    }

    render(){
        return (
            <div className = "login-form-container">
                <form className = "login-form-box" onSubmit={this.handleSubmit}>
                    <div className="form-title">
                        Welcome to The NMK Shop
                    </div>
                        
                    <div className="form-title">
                        Please {this.props.formType} or {this.props.navLink}
                        {this.renderErrors()}
                    </div>

                    <div className="input">
                        <label for ="form-username">
                            Username:
                        </label>
                            <input 
                            type="text"
                            id="form-username"
                            onChange={this.update("username")} 
                            className="login-input" />
                    </div> 
                    <div className="input">
                        <label for ="form-password">
                            Password:
                        </label>
                            <input 
                            type="password"
                            id="form-password"
                            onChange={this.update("password")} 
                            className="login-input" />
                    </div>
                    <div className="input">
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;