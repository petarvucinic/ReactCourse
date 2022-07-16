import Badge1 from "../functional/Badge1/index";

const List = () => {
  const arr = [1, 2, 3, 4, 5];
  const arrMapped = arr.map((value, index) => {
    return (
      <div key={index}>
        <div>
          <p>{value}</p>
        </div>
        <p></p>
      </div>
    );
  });

  return <div>{arrMapped}</div>;
};
export default List;