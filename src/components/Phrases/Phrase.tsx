import { FaRotate } from "react-icons/fa6";
import { ImFire } from "react-icons/im";
import LoadingPhrase from "../LoandingPhrase/LoadingPhrase";
import './Phrase.css';


type PhraseProps = {
    phrase: string;
    onNextPhrase: () => void;
    loading: boolean;
};


const Phrase: React.FC<PhraseProps> = ({ phrase, onNextPhrase, loading}: { phrase: string, onNextPhrase: () => void, loading: boolean }) => {
    
    
    return (
        <>
            <div className="phrase-container" data-aos="zoom-in-left">
                    <div>
                        <h2 className="phrase-title">Fragmentos del libro que pueden interesarte</h2>
                        <ImFire className="icon-fire" />
                    </div>
                    <div className="phrase-content">
                        {loading ? (
                            <LoadingPhrase />
                            ) : (
                            <>
                                <p className="phrase">{phrase}</p>
                            </>
                            )}
                            <button onClick={onNextPhrase} className="change-button"><FaRotate /> Siguiente</button>
                    </div>
            </div>
        </>
    );
}

export default Phrase;