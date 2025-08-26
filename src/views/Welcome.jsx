import { Link } from 'react-router-dom'

export default function Welcome(){
  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',justifyContent:'flex-end'}}>
      <div>
        <h1 className="h1">Welcome to PopX</h1>
        <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <Link to="/signup" className="btn btn-primary" style={{textDecoration:'none', textAlign:'center'}}>Create Account</Link>
        <div className="spacer"></div>
        <Link to="/login" className="btn btn-secondary" style={{textDecoration:'none', textAlign:'center'}}>Already Registered? Login</Link>
      </div>
    </div>
  )
}