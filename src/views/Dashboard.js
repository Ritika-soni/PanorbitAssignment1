import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                       <img alt='persons'  src={'https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg'}
                   style={{ width: 60, height: 60, borderRadius: 400/ 2 }}
                />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <CardTitle tag="p">Leanne Graham</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                 <p tag="h5">Basic Details</p>
                  <p className="card-category">Username : Bret</p>
                  <p className="card-category">Email: Sincere@april.biz</p>
                  <p className="card-category">Phone: 1-770-736-8031 x56442</p>
                  <p className="card-category">Website: hildegard.org</p>
                </CardHeader>
                <CardBody>
                <hr />
                  <p tag="h5">Company</p>
                  <p className="card-category">Name: Romaguera-Crona</p>
                  <p className="card-category">catchPhrase: Multi-layered client-server neural-net</p>
                  <p className="card-category">bs: harness real-time e-markets</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <p tag="h5">Address</p>
                  <p className="card-category">Street: Kulas Light</p>
                  <p className="card-category">Suite: Apt. 556</p>
                  <p className="card-category">City: Gwenborough</p>
                  <p className="card-category">Zipcode: 92998-3874</p>
                </CardHeader>
              </Card>
            </Col>
        
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
