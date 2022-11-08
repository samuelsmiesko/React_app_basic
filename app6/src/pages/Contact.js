import styles from '../my-style.module.css';
import AnimalInfo from './Datas';
import CheckboxExample from "../components/FilterItems";
import CheckA from "../components/Checkbox";



function DisplayAnimal(props){
  
    return[
      <li className={styles.ShowAnimal}>
        <h2>{props.species}</h2>
          <div style={{Width: '90%',margin: '10px', textAlign: 'left', paddingBottom:'20px'}}>
              <img style={{maxHeight: '250px',maxWidth: '50%', margin:'15px', float: 'left'}} src={props.picture} alt={props.species}/>{props.article}
              <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', textAlign: 'left'}}>
                    <div className={styles.liAnimal}>Animal has weight of: {props.weight}kg</div>
                    <div className={styles.liAnimal}>Animal has height of: {props.height} m</div>
                    <CheckA/>
                  </div>
              </div>
          </div>
      </li>
    ]
  
}

const Contact = () => {
    
    const selected = AnimalInfo.filter(animal =>
      
     animal.isFiltered === true)
     return [
      <div className={styles.DisplayContent} >
      
        <article>
          <CheckboxExample/>
          <div className={styles.ContactBlog} >

              <ul >{selected.map((animal) => <DisplayAnimal key={animal.id} 
              species={animal.species} 
              weight={animal.weight} 
              height={animal.height}
              picture={animal.picture}
              article={animal.article}
              />)}
              </ul>
            
          </div>
        </article>
      </div>
      ]

  };
  
  export default Contact;