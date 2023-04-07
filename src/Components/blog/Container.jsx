import React from 'react';
import './Blogconatiner.css'



const Blogcontainer = (props) => {
    // console.log(props.data)
    const{banner,name,time,img,description,date,icon}=props.data;
    const handleaddCart=props.handleaddCart;
    const bookmarkHandeler=props.bookmarkHandeler;


    return (
        <div> 
          {/* blog-conatiner-left part */}
            <div className='card'>
                  <div className='banner'>
                  <img src={banner} alt="" />
                  </div>
                  <div className='name-date-conatiner'>
                  <div className='title-img'>
                    <img src={img} alt="" />
                    <div style={{marginLeft:5}}>
                    <h2 style={{margin:0}}>{name}</h2>
                    <p style={{margin:0,color:'gray',fontSize:12}}>{date}</p>
                    </div>
                  </div>
                    <div className='icon'>
                    <p style={{color:'gray',fontSize:14}}>{time} min read</p>
                    <img onClick={()=>bookmarkHandeler(description)} src={icon} alt="" />
                    </div>
                  </div>
                  <div style={{paddingBottom:10,marginLeft:5}}>
                  <h2>{description}</h2>
                  {/* marks-read-button */}
                  <button className='button' onClick={()=>handleaddCart(time)}>Mark as read times</button>

                  </div>
               </div>
        </div>
    );
};

export default Blogcontainer;