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

// Set moment locale to Arabic but keep numbers in French
moment.updateLocale('ar', {
  months: [
    "يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو",
    "يوليوز", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
  ],
  monthsShort: [
    "يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو",
    "يوليوز", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
  ],
  weekdays: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  weekdaysShort: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  weekdaysMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',  // Keep the numbers in DD/MM/YYYY format
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY LT',
    LLLL: 'dddd D MMMM YYYY LT'
  },
  meridiemParse: /ص|م/,
  isPM: function (input) {
    return input === 'م';
  },
  meridiem: function (hour, minute, isLower) {
    return hour < 12 ? 'ص' : 'م';
  },
});

const localizer = momentLocalizer(moment);

const Index = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await axios.get("http://localhost:8093/leave/getAll");
        const leaveData = response.data.map(leave => ({
          title: `إجازة لـ ${leave.employee.firstNameAr} ${leave.employee.lastNameAr}`,
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
                style={{ 
                  height: '80vh', 
                  padding: '20px', 
                  backgroundColor: '#f8f9fe', 
                  borderRadius: '8px', 
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' ,
                  direction: 'rtl' // RTL layout for Arabic
                }}
                messages={{
                  next: "التالي",
                  previous: "السابق",
                  today: "اليوم",
                  month: "شهر",
                  week: "أسبوع",
                  day: "يوم",
                  agenda: "جدول الأعمال",
                }}
            />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Index;
