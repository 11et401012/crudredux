// import React, { Component } from 'react';

import { connect } from 'react-redux';

// import Post from '../../Post';

// import EditComponent from '../editPost/editpost';

// class AllPost extends Component {
//     render() {
//         return (
//             <div>
//             <h1 className="post_heading">All Posts</h1>
//             {this.props.posts.map((post) => (
//             <div key={post.id}>
//               {post.editing ? <EditComponent post={post} key={post.id} /> : <Post post={post}
//               key={post.id} />}
//             </div>
//           ))}
//           </div>
//           );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         posts: state
//     }
// }
// export default connect(mapStateToProps)(AllPost);

import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/modalForm'

class DataTable extends Component {

  render() {

    const items = this.props.items.map(item => {
      return (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.first}</td>
          <td>{item.last}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.location}</td>
          <td>{item.hobby}</td>
          <td>
            <div style={{width:"110px",float:"right"}}>
              <ModalForm buttonLabel="Edit" item={item} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(item.id)}>Del</Button>
            </div>
          </td>
        </tr>
        )
      })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Hobby</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}

// export default DataTable
const mapStateToProps = (state) => {
    return {
        items: state
    }
}
export default connect(mapStateToProps)(DataTable);
