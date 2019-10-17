const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
         let stateLength=state.length +1;
         action.data.id=stateLength;
         console.log(action.data);
      return state.concat([action.data]);
    case "DELETE_POST":
      return state.filter(post => post.id !== action.id);
    case "EDIT_POST":
      return state.map(post =>
        post.id === action.id ? { ...post, editing: !post.editing } : post
      );
    case "UPDATE":
      return state.map(post => {
        console.log(action.edata)
        if (post.id === action.edata.id) {
          return {
            ...post,
            email: action.edata.email,
          first: action.edata.first,
          hobby: action.edata.hobby,
          last: action.edata.last,
          location: action.edata.location,
          phone: action.edata.phone

          };
        } else return post;
      });
    default:
      return state;
  }
};
export default postReducer;
