import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { text } from 'stream/consumers'

function Task() {
    const [text, settext] = useState([])
    // const data = {
    //     "gstin":[
    //       {
    //         "id":1,
    //         "stuname":"sufiyan",
    //         "email":"shaikhsufiyan174@gmail.com"
    //       },
    //       {
    //         "id":2,
    //         "stuname":"sahil",
    //         "email":"shaikhsahil74@gmail.com"
    //       }
    //     ]}

        // const getdata = async () =>{
        //     try {
        //          await axios.post("https://test1.taxadda.com/api/gstin/add");
        //         // console.log(res.data)
        //     }
        //     catch (error) {
        //         console.log(error)
        //     }
        // }
        // getdata()

        // useEffect(() =>{
        //      const alldata = async () =>{
        //         try {
        //         const ans = await axios.get("https://test1.taxadda.com/api/gstin/add");
        //             settext(ans.data)
        //         }
        //         catch(error) {
        //             console.log(error)
        //         }
        //      } 
        //      alldata()
        // }, [])
  return (
    <div>
      {
        text.map((user,i) =>{
            return(<>
             <h1>{user.stuname}</h1>
            </>)
        })
      }
      <h1>Hello</h1>
    </div>
  )
}

export default Task
