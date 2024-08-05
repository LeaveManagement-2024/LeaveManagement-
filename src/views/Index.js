import { Calendar, momentLocalizer } from 'react-big-calendar';
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Header from "components/Headers/Header.js";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

const localizer = momentLocalizer(moment);

const Index = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await axios.get("http://localhost:8093/leave/getAll");
        const leaveData = response.data.map(leave => ({
          title: `Leave for ${leave.employee.firstNameAr} ${leave.employee.lastNameAr}`,
          start: new Date(leave.startDate),
          end: new Date(leave.endDate)
        }));
        setEvents(leaveData);
      } catch (error) {
        console.error("Error fetching leave data:", error);
      }
    };

    fetchLeaves();
  }, []);

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
            
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '80vh', padding: '20px' }}
              />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Index;
