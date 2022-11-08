import styles from '../my-style.module.css'

const Blogs = () => {

    
    return [
    
    <article>
      
      <form className={styles.Form}>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="fname"></input>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lname"></input>
        <label for="lname">Email</label>
        <input type="email" id="lname" name="lname"></input>
      </form>
      <div className={styles.ButtomDiv}>
        <button className={styles.ButtomSubmit}>Summit</button>
      </div>
    </article>
    ]
  };
  
  export default Blogs;