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

                    Welcome to BenchBnb!
                    <br/>
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}

                    <div className="login-form">
                        <br/>
                        <label>
                            Username:
                            <input 
                            type="text"
                            
                            onChange={this.update("username")} 
                            className="login-input" />
                        </label>  
                        <br/>
                        <label>
                            Password:
                            <input 
                            type="password"
                             
                            onChange={this.update("password")} 
                            className="login-input" />
                        </label>
                        <br/>
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;