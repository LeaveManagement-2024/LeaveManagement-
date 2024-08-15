import React from 'react';
import {
  Card,
  CardHeader,
  Container,
  Row
} from "reactstrap";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Header from "components/Headers/Header.js";
import '../style.css';

const Parametre = () => {
  // Array of card details with navigation paths
  const cardDetails = [
    { title: "الرتب", body: "Here are the details of the card", link: "/admin/grades" },
    { title: "المهام", body: "Here are the details of the card", link: "/admin/posts" },
    { title: "الاقسام", body: "Here are the details of the card", link: "/admin/departments" },
    { title: "الشعب", body: "Here are the details of the card", link: "/admin/filieres" },
    { title: "المصالح", body: "Here are the details of the card", link: "/admin/services" },
    { title: "العطل السنوية", body: "Here are the details of the card", link: "/public-holiday" },
    { title: "الصفات", body: "Profile", link: "/admin/profiles" }
  ];

  return (
    <>
      <Header />
      <Container className="mt--7" fluid style={{ direction: 'rtl' }}>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                {/* Optional header content */}
              </CardHeader>
              <div className="row side-row divstu">
                {cardDetails.map((card, index) => (
                  <div className="cardParametre" key={index}>
                    <div className="card-details text-center">
                      <p className="text-title">{card.title}</p>
                      <p className="text-body">{card.body}</p>
                    </div>
                    {/* Use Link for navigation */}
                    <Link to={card.link}>
                      <button className="card-button">للمزيد من المعلومات</button>
                    </Link>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Parametre;
