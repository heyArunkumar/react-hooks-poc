import axios from "axios";
import React, { useEffect, useState } from "react";

function UseEffectCom() {
  const [state, setState] = useState<number>(0);
  const [post, setPost] = useState<any>([]);
  useEffect(() => {
    const countValue: any = setInterval(() => {
      setState(state + 1);
    }, 1000);
    return () => {
      clearInterval(countValue);
    };
  }, [state]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        console.log("res", res);
        setPost([res?.data]);
      })
      .catch((err) => {
        console.log("err",err)
      });
  }, []);

  return (
    <>
      <h2>useEffect Example: </h2>
      <p>{`Count : ${state}`}</p>
      <div>
      <h2  style={{marginTop:'16px'}}>API Response</h2>
        {post.map((value:any)=>{
            return(
                <>
                 <p>{value?.title}</p>
                </>
               
            )
        })}
      </div>
    </>
  );
}

export default UseEffectCom;
