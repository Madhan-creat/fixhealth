import axios from 'axios';
import { useState, useEffect } from "react";
const Testimonial = () => {
    const [doctorData,setDoctorData]=useState([])
   useEffect(
    ()=>{ axios.get('https://mocki.io/v1/e53ad8f1-bf83-4ca0-9c4d-17d98e22bef1')
    .then((response:any)=> {
      // handle success
      console.log(response);
      setDoctorData(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })}
   ,[])
  
   return(
    <div>
          <div 
               style={{
                display:"flex",
                flexDirection:"row",
                flexWrap:"wrap"
                
               }}>
        {doctorData.map((ele:any,index:any)=>{
            return(
               <div
                style={{
                  width: "25em",
                  padding: 2,
                  border:'1px solid',
                  borderRadius: 10,
                  marginBlock: 10,
                  margin:"5px",
                }}
              >
                 <div
                style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between"
                }}
                >   
                <p style={{ fontSize: 20, color: '#18216d' ,fontWeight:'bold'}}>{ele.name}</p>
                <p style={{ fontSize: 15, color: '#ff825c' ,fontWeight:'bold'}}>{ele.city}</p>
                </div>
                <p style={{ fontSize: 13, color: '#5660b3' }}>{ele.description}</p>
              </div>
               
               )
            })}
            </div>
</div>

   )
    };
export default Testimonial;












