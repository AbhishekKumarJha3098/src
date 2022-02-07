export const TableItem = ({gamename,gameauthor,gameprice,gametags,forkids,gamerating }) => {
    return (
      <>
        <tr>
          <td>{gamename}</td>
          <td>{gameauthor}</td>
          <td>{gameprice}</td>
          <td>{gametags}</td>
          <td>{forkids}</td>
          <td>{gamerating}</td> 
        </tr>
      </>
    );
  }