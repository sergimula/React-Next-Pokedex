const CardStyle = {
  margin: 5,
  padding: 5,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}

export default function Card(props) {
  return (
    <div className="card" style={CardStyle}>
      {props.children}
    </div>
  )
}
