// import React from 'react';
//
// const BenchIndexItem = ({ bench }) => (
//   <div>
//     <li>
//       {bench.description}
//     </li>
//   </div>
// );
//
// export default BenchIndexItem;


// import React from 'react';
//
// export const BenchIndexItem = ({bench}) => (
//   <li className="bench">
//     description: {bench.description}<br/>
//     <br/><br/>
//   </li>
// );



import React from 'react';
import { withRouter } from 'react-router-dom';
import BenchIndexContainer from './bench_index_container';

class BenchIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { description } = this.props.benches;
    return (
        <div className="index-item-info">
          <span className="index-item-category">Description:</span>
          <span className="index-item-copy">{description}</span>
        </div>
    );
  }
}

export default withRouter(BenchIndexItem);
