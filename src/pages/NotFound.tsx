import { Link } from 'react-router-dom';
import { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <>
        <h1>Not Found</h1>
        <Link to="/">GO HOME</Link>
      </>
    );
  }
}

// class NotFound extends Component {
//   render() {
//     return (
//       <div className="not-found">
//         <h2>Страница не найдена</h2>
//       </div>
//     );
//   }
// }
export default NotFound;
