
const Exponent = ({number, exponent}) => {

  
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{number}<sup>{exponent}</sup></p>
      <p className="exponent-result">{`${number} `+` * ${number}`.repeat(exponent-1)} <span className="total">= {Math.pow(number,exponent)}</span></p>
    </div>
  );
};

export default Exponent;