import React from 'react';
import { ResizableBox } from 'react-resizable';

export default class ExampleLayout extends React.Component {
  state = {
    width1: 200,
    height1: 200,
    width2: 200,
    height2: 200,
  };

  onResize1 = (event, { size }) => {
    this.setState({ width1: size.width, height1: size.height });
  };

  onResize2 = (event, { size }) => {
    this.setState({ width2: size.width, height2: size.height });
  };

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ResizableBox
          style={{ border: '1px solid #ccc', margin: '0 10px', position: 'relative' }}
          width={this.state.width1}
          height={this.state.height1}
          minConstraints={[100, 100]}
          maxConstraints={[500, 500]}
          onResize={this.onResize1}
          resizeHandles={['e']}
        >
          <span>Resizable Box 1</span>
          <div style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', width: 10, height: '100%', cursor: 'col-resize' }} />
        </ResizableBox>
        <ResizableBox
          style={{ border: '1px solid #ccc', margin: '0 10px', position: 'relative' }}
          width={this.state.width2}
          height={this.state.height2}
          minConstraints={[100, 100]}
          maxConstraints={[500, 500]}
          onResize={this.onResize2}
          resizeHandles={['e']}
        >
          <span>Resizable Box 2</span>
          <div style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', width: 10, height: '100%', cursor: 'col-resize' }} />
        </ResizableBox>
      </div>
    );
  }
}
