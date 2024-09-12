// src/components/Header.js
import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import {
  getNewLeaveRequests,
  getTotalEmployees,
  getUnconfirmedLeaves,
  getNumberOfEmployeesOnLeaveToday,
  getNumberOfEmployeesOnLeaveTomorrow,
  getCountNewEmployees,
  getCountOldEmployees,
  numberLeaveEndYesterday,
} from "../../services/statisticsApi";
import "../../views/examples/style.css"

const Header = () => {
  const [newLeaveRequests, setNewLeaveRequests] = useState(0);
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [unconfirmedLeaves, setUnconfirmedLeaves] = useState(0);
  const [employeesOnLeaveToday, setEmployeesOnLeaveToday] = useState(0);
  const [employeesOnLeaveTomorrow, setEmployeesOnLeaveTomorrow] = useState(0);
  const [countNewEmployees, setCountNewEmployees] = useState(0);
  const [countOldEmployees, setCountOldEmployees] = useState(0);
  const [LeaveEndYesterday, setLeaveEndYesterday] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const newLeave = await getNewLeaveRequests();
        const totalEmp = await getTotalEmployees();
        const unconfirmed = await getUnconfirmedLeaves();
        const leaveToday = await getNumberOfEmployeesOnLeaveToday();
        const leaveTomorrow = await getNumberOfEmployeesOnLeaveTomorrow();
        const newEmp = await getCountNewEmployees();
        const oldEmp = await getCountOldEmployees();
        const EndYesterday = await numberLeaveEndYesterday();
        setNewLeaveRequests(newLeave);
        setTotalEmployees(totalEmp);
        setUnconfirmedLeaves(unconfirmed);
        setEmployeesOnLeaveToday(leaveToday);
        setCountNewEmployees(newEmp);
        setCountOldEmployees(oldEmp);
        setEmployeesOnLeaveTomorrow(leaveTomorrow);
        setLeaveEndYesterday(EndYesterday);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="header bg-gradient-success pb-8 pt-5 pt-md-8">
      <Container fluid style={{ direction: 'rtl' }}>
        <div className="header-body">
          <Row>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0 card-blurHeader">
                <CardBody className="text-right">
                  <Row>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <i className="ni ni-calendar-grid-58" />
                      </div>
                    </Col>
                    <div className="col">
                      <CardTitle tag="h5" className="text-uppercase  mb-0 text-lg">
                       الموظفون في رخصة :  {employeesOnLeaveToday}
                      </CardTitle><br></br>
                      <span className="h2  text-muted  text-sm   mb-7">
                      اظغط لرؤية المزيد
                      </span>
                    </div>
                  </Row>
                  
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0 card-blurHeader">
                <CardBody className="text-right">
                  <Row>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                        <i className="fas fa-chart-pie" />
                      </div>
                    </Col>
                    <div className="col">
                      <CardTitle tag="h5" className="text-uppercase  mb-0 text-lg">
                         رخص في الانتظار :   {unconfirmedLeaves}
                      </CardTitle>
                      <br></br>
                      <span className="h2  text-muted  text-sm   mb-7">
                      اظغط لرؤية المزيد
                      </span>
                    </div>
                  </Row>
                  
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0 card-blurHeader">
                <CardBody className="text-right">
                  <Row>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                        <i className="fas fa-users" />
                      </div>
                    </Col>
                    <div className="col">
                      <CardTitle tag="h5" className="text-uppercase  mb-0 text-lg">
                       رخص  يوم الغد : {employeesOnLeaveTomorrow}
                      </CardTitle>
                      <br></br>
                      <span className="h2  text-muted  text-sm   mb-7">
                      اظغط لرؤية المزيد
                      </span>
                     
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0 card-blurHeader">
                <CardBody className="text-right">
                  <Row>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                        <i className="fas fa-percent" />
                      </div>
                    </Col>
                    <div className="col">
                      <CardTitle tag="h5" className="text-uppercase mb-0 text-lg">
                         الملتحقون لهذا اليوم : {LeaveEndYesterday}
                      </CardTitle>
                      <br></br>
                      <span className="h2  text-muted  text-sm   mb-7">
                      اظغط لرؤية المزيد
                      </span>
                    </div>
                  </Row>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Header;
