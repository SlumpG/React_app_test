export const UserCard= (props) => {
    const cardColor = props.age>28?'blue':'green'
    return(
        <div style={{border:`2px solid ${cardColor} `, padding:'10px' }}>
            <h2>{props.fName}</h2>
            <h2>{props.lName}</h2>
            <h2>{props.age}</h2>
        </div>
    )
}
export const Home = ()=>{
 
}
export const Header = (props) =>{
   return( <h1 style={headerStyle}>{props.headerTitle}</h1>)
}
const headerStyle = {
    margin:'0',
     position: 'fixed',
     top: '0',
     width:"100vw",
     background:'grey', 
}

export const Footer = (props) =>{
    return(<h1 style={footerStyle}>{props.footerTitle}</h1>)
}
const footerStyle ={
    margin:'0',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100vw',
    textAlign: 'center',
    background:'grey',
}
