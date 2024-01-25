
const Button = ({handler, title}) => {
  return (
    <button
          type="submit"
          onClick={handler}
          style={{
            backgroundColor: "#0A2FB6",
          }}
          className="btn text-white w-100 p-3"
        >
          {title}
        </button>
  )
}

export default Button