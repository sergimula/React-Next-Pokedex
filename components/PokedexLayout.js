const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '5px solid #000000',
  position: 'relative'
}

export default function Layout(props) {
  return (
    <div className="layout" style={layoutStyle}>
      {props.children}
      <style jsx>{`
        .layout:before {
            content: " ";
            position: absolute;
            z-index: -1;
            top: 5px;
            left: 5px;
            right: 5px;
            bottom: 5px;
            border: 5px solid #000000;
        }
      `}</style>
    </div>
  )
}
