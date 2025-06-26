import  './card.css'

function Card(props) {
  return (
  
            <div className="card2">
                <div className="j">
                    <img src="1.png" alt="wedf  " />
                </div>
                <div className="ka">
                <h1>{props.ism}</h1>
                <p>{props.kasb}</p>

                </div>
            </div>
    
  )
}

export default Card
