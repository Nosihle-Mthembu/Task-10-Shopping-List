import { Link } from "react-router-dom";

const  Navigate = () => {

  return (
    <>
      <nav style={{margin: 0,padding: 0}}>
        <ul style={{listStyleType:"none", margin:0, padding:0, overflow:"hidden", backgroundColor:"#333"}}>
          <li style={{float:"right", display:"block", textAlign:"center", padding:"14px 16px", textDecoration:"none"}}>
            <Link to="/SignIn" style={{textDecoration:"none",  fontSize:"120%", color:"white"}}>Sign In</Link>
          </li>
          <li style={{float:"right", display:"block", textAlign:"center", padding:"14px 16px", textDecoration:"none"}}>
            <Link to="/SignUp" style={{textDecoration:"none",  fontSize:"120%", color:"white"}}>Sign Up</Link>
          </li>
          <li style={{float:"right", display:"block", textAlign:"center", padding:"14px 16px", textDecoration:"none"}}>
            <Link to="/ShoppingList" style={{textDecoration:"none",  fontSize:"120%", color:"white"}}>Shopping List</Link>
          </li>
          <li style={{float:"right", display:"block", textAlign:"center", padding:"14px 16px", textDecoration:"none"}}>
            <Link to="/" style={{textDecoration:"none",  fontSize:"120%", color:"white"}}>Home</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Navigate;

