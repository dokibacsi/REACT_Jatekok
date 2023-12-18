function Elem(props) {
  return (
    <div
      className={props.class}
      onClick={() => {
        props.elemreKatt(props.index);
      }}
    ></div>
  );
}


export default Elem;