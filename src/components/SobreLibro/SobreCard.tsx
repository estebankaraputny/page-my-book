const SobreCard = ({title, info}: {title: string, info: string}) => {
  return (
    <div className="sobre-card">
        <h2>{title}</h2>
        <p>
            {info}
        </p>
    </div>
  );
}

export default SobreCard;