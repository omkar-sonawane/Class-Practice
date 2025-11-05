import './usercard.css'

const Usercard = (props) => {
    console.log(props)
  return (
    <div className="usercard">
        <div className='card'>
            <h1>Card</h1>
                <h2> Name : {props.data.name}</h2>
                <h2> Surname : {props.data.surname}</h2>
                <h2> Age : {props.data.age}</h2>
                <h2> Address : {props.data.address}</h2>
        </div>
    </div>
    
  )
}

export default Usercard
