import PropTypes from 'prop-types'

Square.propTypes = {
  children: PropTypes.node,
  updateBoard: PropTypes.func,
  isSelected: PropTypes.bool,
  index: PropTypes.number,
};

export function Square ({children, updateBoard, isSelected, index}) {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div 
      className={className}
      onClick={handleClick}
    >
      {children}
    </div>
   )
}
