import React from 'react'

const Wish = ({user1}) => {
  return (
    <div className='container-fluid w-100 wish d-flex 
    justify-content-center align-items-center'
    id="home">
    
     
  
 {user1.map((data)=>(
                
 <div>
  <p>Level up day wishes <span>{data.name2}</span> </p>
  <p>Have a great year ahead </p>
  <p>May all your dreams comes true </p>
  <p>Lots of <span>greetings </span>from us to you</p>
  <p>Keep <span>smiling</span> ever and ever</p>
</div>


            ))}
  

  
  </div>
  )
}

export default Wish