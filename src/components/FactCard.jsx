
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './FactCard.css';

const FactCard = () => {
//     const [funFact, setFunFact] = useState([]);
//     const params = useParams();

// useEffect(()=> {
//   const id = params.id;
// axios
// .get(`http://localhost:8000/api/games/${id}`)
// .then((res) => {
//     setFunFact(res.data)
// })
// }, [params.id])

  return (
    <div>
        <div className="FactCard">
        <div className='the-end'>Temps écoulé !</div>
                <span className='anecdote'>
                  Chutes de hauteur: <br/>
                  En France, après le risque routier professionnel et les manutentions manuelles, les chutes de hauteur sont la troisième cause de mortalité au travail ainsi que d’incapacité permanente identifiées. La chute de hauteur peut avoir des conséquences plus ou moins graves sur le salarié: <br />
                Plaies, écrasements, lésions internes, fractures des membres supérieurs et inférieurs, fractures rachis lombaires et rachis cervical causant paraplégies ou quadriplégies, traumatisme crânien et décès.
                  </span>
        </div>
    </div>
  )
}
export default FactCard;


