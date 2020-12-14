import Pagination from "@material-ui/lab/Pagination";

const SearchPagination = (props) => {
  return (
    <Pagination
      count={props.count}
      color="primary"
      siblingCount={0}
      boundaryCount={1}
      onChange={props.onChange}
      style={{ gridColumn: "1/3", justifySelf: "center" }}
    />
  );
};

export default SearchPagination;
