export default function Dice(props) {
  let styles = {
    backgroundColor: props.isSelected ? "#34A853" : "white",
  };
  return (
    <>
      <button style={styles} onClick={() => props.stick(props.id)}>
        {props.value}
      </button>
    </>
  );
}
