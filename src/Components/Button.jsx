
const Button = ({handler, title}) => {
  return (
    <button
          type="submit"
          onClick={handler}
          className="btn"
        >
          {title}
        </button>
  )
}

export default Button