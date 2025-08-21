import './LoadingPhrase.css';


const LoadingPhrase = () =>{
        return (
        <>  
            <div className="phrase-container">
                <div className="card">
                <div className="card__skeleton card__title"></div>
                    <div className="card__skeleton card__description">         
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoadingPhrase;