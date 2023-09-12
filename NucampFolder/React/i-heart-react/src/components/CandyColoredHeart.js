import HeartSVG from './HeartSVG';
import { Component } from 'react';


const colors = [
  '#b8e3f5',
  '#f5b8e4',
  '#b8f5b9',
  '#f5f3b8',
  '#e3b8f5',
  '#fffcf2'
];

class CandyColoredHeart extends Component { 
  render() {
  const randomCol = colors[Math.floor(Math.random() * colors.length)];

  return(
    <div className='heart'>
      <div className='heart-img'>
        <HeartSVG col={randomCol} />
        <p className='heart-message'>{this.props.msg}</p>
      </div>
    </div>
  )}
}

export default CandyColoredHeart;