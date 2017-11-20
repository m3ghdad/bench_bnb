import React from 'react';
import { BenchIndexItem } from './bench_index_item';


class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchBenches();
  }

  render() {
    let benches = this.benches;
    return(
      <div>
        <h1>Benches: </h1>
        {benches.map(bench => (
          <BenchIndexItem
            bench={bench}
            key={bench.id}
          />
        ))}
      </div>
    );
  }
}

export default BenchIndex;


//
// import React from 'react';
// import BenchIndexItem from './bench_index_item';
//
// const BenchIndex = ({ benches }) => (
//   let benches = []
//
// );
//
// export default BenchIndex;
