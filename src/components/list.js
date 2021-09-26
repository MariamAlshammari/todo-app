import { useContext, useState, useEffect } from "react";
import { SettingsContext } from "../context/settingsContext";
import { Card,Button, Elevation } from "@blueprintjs/core";

export default function List(props) {
 
    const site = useContext(SettingsContext);

    const [firstPage, setPage] = useState(1);
    const [activeList, setList] = useState(
      (site.show ? props.list : props.incomplete).slice(
        0,
        site.items
      )
    );
    const [pagesNumber, setNumber] = useState(
        Math.ceil(props.list.length / site.items)
      );
      useEffect(() => {
        setList(
          (site.show ? props.list : props.incomplete).slice(
            0,
            site.items
          )
        );
        setNumber(
          Math.ceil(
            (site.show ? props.list : props.incomplete).length /
              site.items
          )
        );
      }, [props.list, props.incomplete]);



      useEffect(() => {
        let first = (firstPage - 1) * site.items;
        let end = first + site.items;
        setList(
          (site.show ? props.list : props.incomplete).slice(first, end)
        );
      }, [firstPage, site.items]);
    
      const pageChangeHandler = (pageNumber) => {
        if (pageNumber !== firstPage) setPage(pageNumber);
      };


      const Pages = () => {
        let pageArr = [];
        if (firstPage > 1) {
            pageArr.push(
            <Button
            //   class="@ns-button"
            //   type="button"
              onClick={() => {
                pageChangeHandler(firstPage - 1);
              }}
            >
              Previous
            </Button>
          );
        }
        for (let i = 1; i <= pagesNumber; i++) {
            pageArr.push(
              <Button
                // class="@ns-button"
                // type="button"
                onClick={() => {
                pageChangeHandler(i);
                }}
                key={i}
              >
                {i}
              </Button>
            );
          }
      
          if (firstPage <= pagesNumber) {
            pageArr.push(
              <Button
                // class="@ns-button"
                // type="button"
                onClick={() => {
                    pageChangeHandler(firstPage + 1);
                }}
              >
                Next
              </Button>
            );
          }
      
          return <div className="butns"> {pageArr} </div>;
        };

    return (
        // <footer>
        <>
            <Card elevation={Elevation.THREE}>
                <div>Items</div>

                {activeList.map(item => (
                    
                    <Card className="listCard"
                    interactive={true}
                    elevation={Elevation.THREE}
                    key={item.id}>
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <Button onClick={() => props.toggleComplete(item.id)}>
              Complete: {item.complete.toString()}
              </Button>
          <hr />
        </div>
</Card>
      ))}
            </Card>
            <Pages />
            </>
        
    );
}