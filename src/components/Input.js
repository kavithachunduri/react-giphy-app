function Input(props){
  console.log('props ',props)
  
  const {fun} = props
  console.log('fun',fun)
  
  return(
          <div className="div" >
              <input className= "input"  type= "text" onChange={fun}></input>
              {/* <button className="button">Click for GIF's</button> */}
          </div>
      )
  }
  export default Input;