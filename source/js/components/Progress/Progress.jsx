import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Global/Icon';


const defaultProps = {
  completed: 0,
  color: '#0BD318',
  symbol: '$',
  target: 100,
  animation: 500,
};

class Progress extends React.Component {
  componentDidMount() {
    const progressBar = this.progressBar;
    const { completed, target } = this.props;
    const percentage = (completed / target) * 100;
    setTimeout(() => {
      progressBar.style.width = `${ percentage }%`;
    });
  }

  render() {
    const { color, target, symbol, completed, animation, height, className, children, ...rest } = this.props;
    const style = {
      background: color,
      transition: `all ${ animation }ms`,
      height,
    };

    return (
      <div className='progress-wrapper'>
        <div className='progress-container'>
          <div className='progress-reached'>Reached:</div>
          <div className={ className || 'progress' } { ...rest }>
            <div className='progress-bar' ref={ (p) => { this.progressBar = p; } } style={ style }>
              <div className='progress-current-value'>
                <Icon height='10px' glyph='caret-up' />
                <span>{symbol}{completed}</span>
              </div>
            </div>
          </div>

          <div className={ `progress-target ${ target === completed ? 'success' : '' }` }><span>Target <br /> {symbol} {target}</span> </div>
        </div>
        <div className='progress-info'>
          {completed < target ? (
            <div><Icon height='15px' glyph='info' />
              You need {symbol} {target - completed} more to reach your target</div>
          ) : (
            <div><Icon height='15px' glyph='success' />
              You reached the target</div>
          )
          }
        </div>
        {children}
      </div>
    );
  }
}

Progress.propTypes = {
  completed: ((props, propName) => {
    if (typeof props[propName] !== 'number') {
      return Progress.throwError('Invalid Props: "completed" should a number ');
    }
    if (props[propName] < 0 || props[propName] > props.target) {
      return Progress.throwError('Invalid Props: "completed" should be lower or equal to target');
    }
    return 1;
  }),
  target: ((props, propName) => {
    if (typeof props[propName] !== 'number') {
      return Progress.throwError('Invalid Props: "target" should be a number');
    }
    if (props[propName] < 0 || props[propName] < props.completed) {
      return Progress.throwError('Invalid Props: "target" should be greater than target');
    }
    return 1;
  }),
  color: PropTypes.string,
  animation: PropTypes.number,
  symbol: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]),
};

Progress.throwError = function () {
  return new Error(...arguments);
};
Progress.defaultProps = defaultProps;

export default Progress;
