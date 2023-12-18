import Elem from "./Elem.js";

function JatekTer(props) {
  return (
    <div className="jatekter">
      {props.elemek.map((elem, index) => (
        <Elem key={index} elem={elem} elemreKatt={props.elemreKatt} />
      ))}
    </div>
  );
}
