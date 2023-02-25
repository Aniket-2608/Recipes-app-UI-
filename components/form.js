import "./form.css"
import {Link} from "react-router-dom"
import { useState } from "react"

const  Inputform =()=>{
        const [post, setPost] = useState({reipe_title:"", Author:"", Instructions:"",Ingredients:"", description:""});

        const{reipe_title,Author,Instructions,Ingredients,description} = post
        const onSubmit = async (e) => {
            e.preventDefault();
            fetch("http://localhost:5000/recipes-post", {
                method: "POST",
                body: JSON.stringify({
                    reipe_title:reipe_title,
                    Author:Author,
                    Ingredients:Ingredients,
                    Instructions:Instructions,
                    description:description
                }),
                headers: {
                  "Content-Type": "application/json",
                   Accept:"application/json"
                },
              }).then((res) => res.json())
                .then((data)=>{
                    setPost((data)=>[post, ...data]);
                })
                .catch((err)=>{
                    console.error(err + "There is error")
                })
                console.log(post)
}
       

    return(
        <>
        <form className="form-container">
            <h3>Add New Receipes</h3>
   
            <label htmlFor="name" >Recipe - title :</label><br/>
            <input type="text"  onChange={(e)=>{setPost({...post, reipe_title:e.target.files})}} /><br/>
            <label htmlFor="name" >Ingredients :</label><br/>
            <input type="text" onChange={(e)=>{setPost({...post, Ingredients:e.target.value})}}/><br/>
            <label htmlFor="name">Author :</label><br/>
            <input type="text"  onChange={(e)=>{setPost({...post, Author:e.target.value})}}/><br/>
            <label htmlFor="name">Instructions :</label><br/>
            <input type="text"  onChange={(e)=>{setPost({...post, Instructions:e.target.value})}}/><br/>
            <label htmlFor="name">Description :</label><br/>
            <input type="text"  onChange={(e)=>{setPost({...post, description:e.target.value})}}/><br/>
            <input type="file"  onChange={(e)=>{setPost({...post, image:e.target.files})}} /><br/>
            <Link to="/postview"><button className="button" onClick={onSubmit} type= "submit">Post</button></Link>
        </form>
        </>
    )
}

export default Inputform