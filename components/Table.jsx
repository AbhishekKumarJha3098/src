import { TableItem } from "./TableItem";
export const Table = ({ list }) => {
  return (
    <div>
      <table>
        <tr>
          <th><span style={{ marginLeft: "10px" }}>Name</span></th>
          <th><span style={{ marginLeft: "20px" }}>Author</span> </th>
          <th><span style={{ marginLeft: "20px" }}>Price</span> </th>
          <th><span style={{ marginLeft: "20px" }}>Tag</span> </th>
          <th><span style={{ marginLeft: "20px" }}>ForKids</span> </th>
          <th><span style={{ marginLeft: "20px" }}>Rating</span> </th>
        </tr>
        {list.map((e, i) => (
          <TableItem {...e} key={i} />
        ))}
      </table>

    </div>
  );
};