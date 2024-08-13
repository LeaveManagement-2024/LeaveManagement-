// src/components/Header.js
import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import {
  getNewLeaveRequests,
  getTotalEmployees,
  getUnconfirmedLeaves,
  getNumberOfEmployeesOnLeaveToday,
  getCountNewEmployees,
  getCountOldEmployees
} from "../../services/statisticsApi";

const Header = () => {
  const [newLeaveRequests, setNewLeaveRequests] = useState(0);
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [unconfirmedLeaves, setUnconfirmedLeaves] = useState(0);
  const [employeesOnLeaveToday, setEmployeesOnLeaveToday] = useState(0);
  const [countNewEmployees, setCountNewEmployees] = useState(0);
  const [countOldEmployees, setCountOldEmployees] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newLeave = await getNewLeaveRequests();
        const totalEmp = await getTotalEmployees();
        const unconfirmed = await getUnconfirmedLeaves();
        const leaveToday = await getNumberOfEmployeesOnLeaveToday();
        const newEmp = await getCountNewEmployees();
        const oldEmp = await getCountOldEmployees();

        setNewLeaveRequests(newLeave);
        setTotalEmployees(totalEmp);
        setUnconfirmedLeaves(unconfirmed);
        setEmployeesOnLeaveToday(leaveToday);
        setCountNewEmployees(newEmp);
        setCountOldEmployees(oldEmp);
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
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody className="text-right">
                  <Row>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <i className="ni ni-calendar-grid-58" />
                      </div>
                    </Col>
                    <div className="col">
                      <CardTitle tag="h5" className="text-uppercase text-muted mb-0 text-lg">
                        الموظفون في رخصة اليوم
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">
                        {employeesOnLeaveToday}
                      </span>
                    </div>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2">
                      <i className="fa fa-arrow-up" /> 3.48%
                    </span>{" "}
                    <span className="text-nowrap">منذ الشهر الماضي</span>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody className="text-right">
                  <Row>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                        <i className="fas fa-chart-pie" />
                      </div>
                    </Col>
                    <div className="col">
                      <CardTitle tag="h5" className="text-uppercase text-muted mb-0 text-lg">
                        الرخص التي لم يتم الموافقة عليها
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">
                        {unconfirmedLeaves}
                      </span>
                    </div>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-danger mr-2">
                      <i className="fas fa-arrow-down" /> 3.48%
                    </span>{" "}
                    <span className="text-nowrap">منذ الأسبوع الماضي</span>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody className="text-right">
                  <Row>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                        <i className="fas fa-users" />
                      </div>
                    </Col>
                    <div className="col">
                      <CardTitle tag="h5" className="text-uppercase text-muted mb-0 text-lg">
                        عدد الموظفين
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">
                        الجدد: {countNewEmployees}
                      </span><br />
                      <span className="h2 font-weight-bold mb-0">
                        القدامى: {countOldEmployees}
                      </span>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody className="text-right">
                  <Row>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                        <i className="fas fa-percent" />
                      </div>
                    </Col>
                    <div className="col">
                      <CardTitle tag="h5" className="text-uppercase text-muted mb-0 text-lg">
                        عدد طلبات الرخص الجديدة
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">
                        {newLeaveRequests} %
                      </span>
                    </div>
                  </Row>
                  <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2">
                      <i className="fas fa-arrow-up" /> 12%
                    </span>{" "}
                    <span className="text-nowrap">منذ الشهر الماضي</span>
                  </p>
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
