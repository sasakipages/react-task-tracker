import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return <button style={{ backgroundColor: color }}
                 className='btn'
                 onClick={onClick}
         >{text}</button>
}

Button.defaltProps = {
  color: 'steelblue'
}

Button.protoType = {
  text: PropTypes.string,
  color: PropTypes.string,
  onCLick: PropTypes.func.isRequired,
}

export default Button