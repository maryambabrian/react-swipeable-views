import React, { PureComponent, useContext } from 'react';
import SwipeableViews, { swipeableViewsContext } from 'react-swipeable-views';

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
    WebkitOverflowScrolling: 'touch', // iOS momentum scrolling
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    maxHeight: 150,
    overflowY: 'auto',
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
  slide4: {
    backgroundColor: '#FEA900',
  },
  button: {
    marginTop: 14,
  },
};

const list = [];

for (let i = 0; i < 30; i += 1) {
  list.push(<div key={i}>{`item n°${i + 1}`}</div>);
}

class Slide4 extends PureComponent {
  state = {
    large: false,
  };

  componentDidUpdate() {
    const { slideUpdateHeight } = useContext(swipeableViewsContext);
    slideUpdateHeight();
  }

  handleClick = () => {
    this.setState(state => ({
      large: !state.large,
    }));
  };

  render() {
    return (
      <div style={Object.assign({}, styles.slide, styles.slide4)}>
        {list.slice(0, this.state.large ? 8 : 3)}
        <button onClick={this.handleClick} type="button" style={styles.button}>
          {this.state.large ? 'Collaspe' : 'Expand'}
        </button>
      </div>
    );
  }
}


function DemoAnimateHeight() {
  return (
    <SwipeableViews animateHeight enableMouseEvents>
      <div style={Object.assign({}, styles.slide, styles.slide1)}>{list.slice(0, 10)}</div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}>
        {'This slide has a max-height limit:'}
        <br />
        <br />
        {list.slice(0, 7)}
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>{list.slice(0, 7)}</div>
      <Slide4 />
    </SwipeableViews>
  );
}

export default DemoAnimateHeight;
