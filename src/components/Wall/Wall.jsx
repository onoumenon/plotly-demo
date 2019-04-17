import React, { Component } from "react";
import { Table, Container, Button } from "reactstrap";
import {
  getBrickElement,
  getCategoriesByOffice
} from "../../services/serveIntrospections";
import IntroDataContext from "../../IntroDataContext";
export default class Wall extends Component {
  render() {
    return (
      <IntroDataContext.Consumer>
        {value => (
          <Container className="mx-auto mt-5 mb6">
            <h1 className="text-info text-center font-weight-bolder mb-5">
              {`${value.office}'s Action Plan`}
            </h1>
            <div className="text-center mb-5">
              <Button
                style={{ marginRight: "1em" }}
                outline
                color="success"
                size="lg"
                active
              >
                2018
              </Button>
              <Button
                style={{ marginLeft: "1em" }}
                outline
                color="success"
                size="lg"
              >
                2019
              </Button>
            </div>
            <Table striped>
              <thead>
                <tr>
                  <th />
                  {value.actions.map((action, index) => (
                    <th key={index}>{action}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {console.log(value.office)}
                {getCategoriesByOffice(value.data, value.office).map(
                  (item, index) => (
                    <tr key={index}>
                      <th scope="row">
                        <i className="fas fa-user-circle" /> {item}
                      </th>
                      {value.actions.map((action, index) => (
                        <td data-testid={`${item}-${action}`} key={index}>
                          {
                            getBrickElement(
                              value.data,
                              value.office,
                              item,
                              action
                            ).length
                          }
                        </td>
                      ))}
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </Container>
        )}
      </IntroDataContext.Consumer>
    );
  }
}
