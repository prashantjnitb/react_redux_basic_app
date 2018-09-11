import React from 'react';
import { connect } from 'react-redux';
import { Col, Button, FormGroup, Label, Input } from 'reactstrap';
import './signup.css'
import { createUser } from './_redux/SignupActions'
import { Redirect } from 'react-router-dom'
import { CheckUserLoggedIn } from '../../_redux/AuthActions'
class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    
    this.state = {
      user: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null 
      },
      error: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateFormData = this.validateFormData.bind(this);
  }
  
  handleChange = (event) => {
    let { value } = event.target 
    let object = this.state.user
    value = value==="" ? undefined : value
    object[event.target.name] = value
    this.setState({ user: object });
  }

  handleSubmit = (event) => {
    if (event) event.preventDefault()
    if(this.validateFormData()){
      this.props.dispatch(createUser(this.state.user))
      this.props.dispatch(CheckUserLoggedIn())
    }
  }

  validateFormData = () => {
    this.setState({error: null})
    const user = this.state.user;
    if(user.name===undefined || user.email===undefined || user.password===undefined || user.password_confirmation===undefined) {
      this.setState({error: "All fields are required"})
      return false;
    } else if(user.password!==user.password_confirmation) {
      this.setState({error: "Password and Password confirmation do not match."})
      return false;
    }
    return true;
  }

  componentDidMount() {
    this.props.dispatch(CheckUserLoggedIn())
  }

  render() {
    const { error, current_user } = this.props
    
    if(current_user) {
      return <Redirect to='/' />;
    }

    return (
      <div className="col-md-12 signup_page_padding">
        <form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="name" sm={3}></Label>
            <Col sm={9}>
              <h2>Signup</h2>
            </Col>
          </FormGroup>
          <br/>
          <FormGroup row>
            <Label for="name" sm={3}>Name</Label>
            <Col sm={9}>
              <Input type="text" name="name" id="name" onChange={this.handleChange} autoComplete="off" placeholder="Your full name" required={true} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="email" sm={3}>Email</Label>
            <Col sm={9}>
              <Input type="email" name="email" id="email" onChange={this.handleChange} autoComplete="off" placeholder="Your email address" required={true} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="password" sm={3}>Password</Label>
            <Col sm={9}>
              <Input type="password" name="password" id="password" onChange={this.handleChange} placeholder="Password" required={true} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="password_confirmation" sm={3}>Confirm Password</Label>
            <Col sm={9}>
              <Input type="password" name="password_confirmation" id="password_confirmation" onChange={this.handleChange} placeholder="Password" required={true} />
            </Col>
          </FormGroup>

          { this.state.error && (
            <FormGroup row>
              <Label for="error" sm={3}></Label>
              <Col sm={9}>
                {this.state.error}
              </Col>
            </FormGroup>
          )}
          { error && (
            <FormGroup row>
              <Label for="error" sm={3}></Label>
              <Col sm={9}>
                {error.message}
              </Col>
            </FormGroup>
          )}
          
          <FormGroup check row>
            <Col sm={{ size: 12, offset: 3 }}>
              <Button className="btn btn-success">Submit</Button>
            </Col>
          </FormGroup>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
 current_user: state.auth.current_user,
 user: state.signup.user,
 error: state.signup.error,
 loading: state.signup.loading,
})

export default connect(mapStateToProps)(SignupForm);