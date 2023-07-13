import React, {useState}from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission here
    // You can access the entered email via the 'email' state
    console.log(email);
    setEmail('');
  };

  return (
    <div className='news-letter'>
    <div style={{height:'10vh'}}></div>
    <div style={{textAlign: 'center', fontSize: '40px', fontWeight:'bold'}}>Subscribe To Our News Letter</div>
    <div style={{textAlign: 'center', fontSize: '15px'}}>Subscribe For Our News Letter today and stay updated
    <div style={{height:'30px'}}></div>
    <form onSubmit={handleSubmit}>
  <input
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={handleInputChange}
    style={{width:'30vw',height:'60px',minWidth: '400px',backgroundColor: 'white',borderRadius:'8px', borderColor:'whitesmoke'}}
  />
  <button type="submit" style={{backgroundColor: 'orange', height:'60px',borderColor:'orange', width:'100px',borderRadius:'4px'}}>Submit</button>
</form> 
    </div>
  <div style={{height:'180px'}}></div>
</div>
  )
}

export default Newsletter