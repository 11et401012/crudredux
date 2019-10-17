import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';

class AddEditForm extends React.Component {
  state = {
    id: 0,
    first: '',
    last: '',
    email: '',
    phone: '',
    location: '',
    hobby: ''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = (e) => {
    e.preventDefault();
    // const title = this.title.value;
    // const message =  this.getMessage.value;

    const id = this.state.id;
    const first= this.state.first;
    const last = this.state.last;
    const email=this.state.email ;
    const phone = this.state.phone;
    const location= this.state.location;
    const hobby=this.state.hobby ;
    const data = {
      id,
      first,
      
      last,
      email,
      phone,
      location,
      hobby
    }
    console.log({data})
    this.props.dispatch({
      type:'ADD_POST',
      data});
    //this.getTitle.value = '';
   // this.getMessage.value = '';
  }
//   submitFormAdd = e => {
//     e.preventDefault()
//     fetch('http://localhost:3000/crud', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         first: this.state.first,
//         last: this.state.last,
//         email: this.state.email,
//         phone: this.state.phone,
//         location: this.state.location,
//         hobby: this.state.hobby
//       })
//     })
//       .then(response => response.json())
//       .then(item => {
//         if(Array.isArray(item)) {
//           this.props.addItemToState(item[0])
//           this.props.toggle()
//         } else {
//           console.log('failure')
//         }
//       })
//       .catch(err => console.log(err))
//   }

  submitFormEdit = e => {
    e.preventDefault();
    const id = this.state.id;
    const first= this.state.first;
    const last = this.state.last;
    const email=this.state.email ;
    const phone = this.state.phone;
    const location= this.state.location;
    const hobby=this.state.hobby ;
    const edata = {
      id,
      first,
      
      last,
      email,
      phone,
      location,
      hobby
    }
    console.log({edata})
    this.props.dispatch({
      type:'UPDATE',
      edata});
    // this.props.updateState({
    //   id: this.state.id,
    //   first: this.state.first,
    //   last: this.state.last,
    //   email: this.state.email,
    //   phone: this.state.phone,
    //   location: this.state.location,
    //   hobby: this.state.hobby

    // })
    // this.props.toggle()
    // e.preventDefault()
    // fetch('http://localhost:3000/crud', {
    //   method: 'put',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     id: this.state.id,
    //     first: this.state.first,
    //     last: this.state.last,
    //     email: this.state.email,
    //     phone: this.state.phone,
    //     location: this.state.location,
    //     hobby: this.state.hobby
    //   })
    // })
    //   .then(response => response.json())
    //   .then(item => {
    //     if(Array.isArray(item)) {
    //       // console.log(item[0])
    //       this.props.updateState(item[0])
    //       this.props.toggle()
    //     } else {
    //       console.log('failure')
    //     }
    //   })
    //   .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { id, first, last, email, phone, location, hobby } = this.props.item
      this.setState({ id, first, last, email, phone, location, hobby })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="first">First Name</Label>
          <Input type="text" name="first" id="first" onChange={this.onChange} value={this.state.first === null ? '' : this.state.first} />
        </FormGroup>
        <FormGroup>
          <Label for="last">Last Name</Label>
          <Input type="text" name="last" id="last" onChange={this.onChange} value={this.state.last === null ? '' : this.state.last}  />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email}  />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input type="text" name="phone" id="phone" onChange={this.onChange} value={this.state.phone === null ? '' : this.state.phone}  placeholder="ex. 555-555-5555" />
        </FormGroup>
        <FormGroup>
          <Label for="location">Location</Label>
          <Input type="text" name="location" id="location" onChange={this.onChange} value={this.state.location === null ? '' : this.state.location}  placeholder="City, State" />
        </FormGroup>
        <FormGroup>
          <Label for="hobby">Hobby</Label>
          <Input type="text" name="hobby" id="hobby" onChange={this.onChange} value={this.state.hobby}  />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default connect() (AddEditForm)