import React from "react";
import Table from "react-bootstrap/Table";

const Skills = () => {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        {/* <thead>
          <tr>
            <th>Tech stack</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <td>Vanilla Javascript/React.js/Vuejs</td>
          </tr>
          <tr>
            <td>Ruby/ Ruby on Rails</td>
          </tr>{" "}
          <tr>
            <td>-Solidity/hardhat</td>
          </tr>{" "}
          <tr>
            <td>Bootstrap/React-Bootstrap/Chakra UI</td>
          </tr>{" "}
          <tr>
            <td>Jest/React Testing Library</td>
          </tr>{" "}
          <tr>
            <td>MongoDB/Google Firebase/Cloud Firestore</td>
          </tr>{" "}
          <tr>
            <td>Chartjs/Apexcharts</td>
          </tr>{" "}
          <tr>
            <td>HTML/CSS</td>
          </tr>{" "}
          <tr>
            <td>Webpack</td>
          </tr>{" "}
          <tr>
            <td>Git</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Skills;
