
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './FactCard.css';

const FactCard = () => {
    const [funFact, setFunFact] = useState([]);
    const params = useParams();

useEffect(()=> {
  const id = params.id;
axios
.get(`http://localhost:8000/api/games/${id}`)
.then((res) => {
    setFunFact(res.data)
})
}, [params.id])

  return (
    <div>
        <div className="FactCard">
                  <span className='anecdote'>
                    Anecdote loose
                    {funFact.anecdote_loose}
                  </span>
        </div>
    </div>
  )

}

