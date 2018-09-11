import React from 'react';
import { connect } from 'react-redux';
import { Col, Button, FormGroup, Label, Input } from 'reactstrap';
import './login.css'
import { Redirect } from 'react-router-dom'
import { createSession } from './_redux/SessionActions'
import { CheckUserLoggedIn } from '../../_redux/AuthActions'
class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    
    this.state = {
      user: {
        email: null,
        password: null  
      },
      error: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      this.props.dispatch(createSession(this.state.user))
      this.props.dispatch(CheckUserLoggedIn())
    }
  }

  validateFormData = () => {
    this.setState({error: null})
    const user = this.state.user;
    if(user.email===undefined || user.password===undefined) {
      this.setState({error: "Email and Password both are required"})
      return false;
    }
    return true;
  }

  componentDidMount() {
    this.props.dispatch(CheckUserLoggedIn())
  }

  render() {
    const { current_user, error, loading } = this.props
    
    if(current_user) {
      return <Redirect to='/' />;
    }

    return (
      <div className="col-md-12 login_page_padding">
        <form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>Email</Label>
            <Col sm={10}>
              <Input type="email" name="email" id="exampleEmail" onChange={this.handleChange} autoComplete="off" placeholder="with a placeholder" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>Password</Label>
            <Col sm={10}>
              <Input type="password" name="password" id="examplePassword" onChange={this.handleChange} placeholder="password placeholder" />
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
            <Col sm={{ size: 10, offset: 2 }}>
              <Button className="btn btn-success">{loading ? 'Checking...' : 'Submit'}</Button>
            </Col>
          </FormGroup>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
 current_user: state.auth.current_user,
 error: state.session.error,
 loading: state.session.loading,
})

export default connect(mapStateToProps)(LoginForm);