import React from 'react';
import { Box } from './Box';
import './ColorBoxes.css';

export class ColorBoxes extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    seriesOfBoxes: 16,
  };

  render() {
    return (
      <>
        <div className="container">
          {Array.from({ length: this.props.seriesOfBoxes }).map(() => {
            return <Box />;
          })}
        </div>
      </>
    );
  }
}
