import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions/inputForm-actions';
class Login extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            warning: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        alert("form submitted" + this.state.value);
        e.preventDefault();
        const data = {
            name: this.name.value,
            email: this.email.value,
            password: this.password.value,
            confirmpassword: this.confirmpassword.value

        }
        this.props.getData(data);
    }

    handleChange(e, check) {
        const input = e.target.value;
        switch (check) {
            case 1:
                if (!/^[a-zA-Z]*$/g.test(input)) {
                    this.setState({ warning: "* only alphabets *" })
                }
                else {
                    this.setState({ warning: '' })
                }
                break;
            case 2:
                console.log(check + input);
                break;
            case 3:
                console.log(check + input);
                break;
            case 4:
                console.log(check + input);
                break;
            default:
                console.log("default");
                break;
        }
    }
    render() {
        return (
            <div className="formContainer">
                <form className="form" onSubmit={this.handleSubmit}>
                    <input value={this.state.warning} />
                    <label for="name">UserName</label>
                    <input type="text" placeholder="UserName" ref={(name) => { this.name = name }}
                        onChange={event => this.handleChange(event, 1)} required />
                    <br />
                    <label for="email">Email</label>
                    <input type="text" placeholder="Enter Email" ref={(email) => { this.email = email }}
                        onChange={event => this.handleChange(event, 2)} required />
                    <br />
                    <label for="password">Password</label>
                    <input type="text" placeholder="Enter Password" ref={(password) => { this.password = password }}
                        onChange={event => this.handleChange(event, 3)} required />
                    <br />
                    <label for="confirm password">Confrim Password</label>
                    <input type="text" placeholder="Confirm Password" ref={(confirmpassword) => { this.confirmpassword = confirmpassword }}
                        onChange={event => this.handleChange(event, 4)} required />
                    <br />
                    <button type="Submit" >Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {

}
export default connect(mapStateToProps, { getData })(Login);