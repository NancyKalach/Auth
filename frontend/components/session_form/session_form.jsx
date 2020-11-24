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
            <div>
                <ul>
                    {this.props.errors.map((err, idx) => (
                        <li key={idx}>
                            {err}
                        </li>
                    ))}
                </ul>
            </div>

        );
    }

    title(){
        if (this.props.formType == "Login"){
            return (
                <div className="form-title"> Welcome Back! </div>
            )
        } else {
            return(
                <div className="form-title"> Hello New User!</div>
            )
        }
    }
    render(){
        return (
            <div className = "login-form-container">
                <form className = "login-form-box" onSubmit={this.handleSubmit}>
                    { this.title()}
                    <div className="form-request">
                        Please {this.props.formType} or {this.props.navLink}
                        {this.renderErrors()}
                    </div>

                    <div className="input">
                        <label htmlFor ="form-username">
                            Username
                        </label>
                            <input 
                            type="text"
                            id="form-username"
                            onChange={this.update("username")} 
                            className="login-input" />
                    </div> 
                    <div className="input">
                        <label htmlFor ="form-password">
                            Password
                        </label>
                            <input 
                            type="password"
                            id="form-password"
                            onChange={this.update("password")} 
                            className="login-input" />
                    </div>
                    <div className="input">
                        <button className="session-submit" type="submit">{this.props.formType}</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;