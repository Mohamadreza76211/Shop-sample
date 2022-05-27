import "./MainContainer.scss";

const MainContainer = (props) => {
  return (
    <div>
        <div className="Container w-100">
          {props.children}
        </div>
    </div>
  )
}

export default MainContainer