

import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'

//import PostForm from './components/postForm/postForm';
import DataTable from './components/listPost/listPost';
import ModalForm from './components/Modals/modalForm';



class App extends Component {
  state = {
    items: []
  }

  

  addItemToState = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }))
  }

  updateState = (item) => {
    const itemIndex = this.state.items.findIndex(data => data.id === item.id)
    const newArray = [
    // destructure all items from beginning to the indexed item
      ...this.state.items.slice(0, itemIndex),
    // add the updated item to the array
      item,
    // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(itemIndex + 1)
    ]
    this.setState({ items: newArray })
  }

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id)
    this.setState({ items: updatedItems })
  }
  render() {
    return (
      <Container className="App">
      <Row>
        <Col>
          <h1 style={{margin: "20px 0"}}>CRUD Database</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataTable />
        </Col>
      </Row>
      <Row>
        <Col>
          <ModalForm buttonLabel="Add Item" addItemToState={this.addItemToState}/>
        </Col>
      </Row>
    </Container>
    );
    }
  }
export default App;
//items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} 
