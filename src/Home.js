//import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;
  // const handledel = (id) => {
  //   const newblog = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newblog);
  // };

  

  // let flag = 0;
  //const [name, change] = useState('Raja');
  //const [age, setage] =useState(20);
  // let message = ["Bhuvika: Raja I love you", "Raja: Bhuvika I love you"];
  // const setname = (message) => {
  //   alert(message);
  //   flag = (flag + 1) % 2;
  // const changes = () => {
  //   change('Bhuvika');
  //   setage(19);
  // }

  //var name2;
  // const handleClick = (name2) => {
  //      alert("konnichiwa raja fans" +name2)
  // }

  // return (
  //   <div className="Home">
  //     {ispending && <div>Loading...</div>}
  //     {/* <h2>Home Page</h2> */}
  //     {{ error } && <div>{error}</div>}
  //     {blogs && (
  //       <BlogList blogs={blogs} title="All Blogs! " />
  //     )}
      // {/* <BlogList blogs={blogs.filter( (blog) => blog.author === 'Raja' )} title="Raja's Blogs!" handledel={handledel} />
      // <BlogList blogs={blogs.filter( (blog) => blog.author === 'Satya' )} title="Satya's Blogs!" handledel={handledel}/>     
      // <BlogList blogs={blogs.filter( (blog) => blog.author === 'Govind' )} title="Govind's Blogs! " handledel={handledel}/> */}

      // {/* <h4>I am {name} my age is {age}</h4>
      // <button onClick={ () => {changes()}}>click me</button> */}
      // {/* <button onClick={ () => {handleClick('raja')}}>close your eyes</button> */}
      // {/* <button onClick={() => {setname(message[flag])}}>fuck me</button> */}
//     </div>
//   );
// };

// export default Home;
