import React, { Component } from 'react';

import cx from 'classnames';
import './stylesheets/CrossSection.scss';

class CrossSection extends Component {

  getBoardEdges() {
    const { rowIndex, colIndex } = this.props;
    if (colIndex === 0) {
      if (rowIndex === 0) {
        return 'topLeftCorner';
      }
      if (rowIndex === 18) {
        return 'bottomLeftCorner';
      }
      return 'leftEdge';
    }
    if (colIndex === 18) {
      if (rowIndex === 0) {
        return 'topRightCorner';
      }
      if (rowIndex === 18) {
        return 'bottomRightCorner';
      }
      return 'rightEdge';
    }
    if (rowIndex === 0) {
      return 'topEdge';
    }
    if (rowIndex === 18) {
      return 'bottomEdge';
    }
    return '';
  }

  setPiece = () => {
    const { setPiece, pieceColour, userColour, colIndex, rowIndex } = this.props;
    if (!pieceColour) {
      return setPiece(userColour, colIndex, rowIndex);
    }
    return null;
  }

  render() {
    const { pieceColour } = this.props;
    const hasPiece = pieceColour === 'w' || pieceColour === 'b';
    const crossSection = this.getBoardEdges();
    const gamePiece = pieceColour === 'w' ? 'whitePiece' : 'blackPiece';
    const showPiece = hasPiece ? 'showPiece' : 'hiddenPiece';

    return (
      <div className='crossSection' onClick={this.setPiece}>
        <div className={cx('vertical-line', crossSection)} />
        <div className={cx('horizontal-line', crossSection)} />
        <div className={cx('piece', showPiece, gamePiece)} />
      </div>
    );
  }
}

CrossSection.propTypes = {
  rowIndex: React.PropTypes.number.isRequired,
  colIndex: React.PropTypes.number.isRequired,
  userColour: React.PropTypes.string.isRequired,
  pieceColour: React.PropTypes.string.isRequired,
  setPiece: React.PropTypes.func.isRequired
};

export default CrossSection;
