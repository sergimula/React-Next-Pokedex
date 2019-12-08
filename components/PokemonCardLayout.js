import Header from './Header'

const CardLayoutStyle = {
  margin: 10,
  padding: 10,
  position: 'relative'
}

export default function CardLayout(props) {
  return (
    <div className="card-layout" style={CardLayoutStyle}>
      <Header />
      {props.children}
    </div>
  )
}
