import React, { useState } from 'react';
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import '../style.css'
import { Link } from 'react-router-dom';


const Parametre= () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculer les indices de la page actuelle
 

  return (
    <>
      <Header />
      <Container className="mt--7" fluid style={{ direction: 'rtl' }}>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                
              </CardHeader>
              <div className="row side-row divstu" >
                
              <div class="carddr">
                <h1>الرتب</h1>
              
              </div>
              <div class="carddr">
              <h1>المهام</h1>
              </div>
              <div class="carddr">
              <h1>الاقسام</h1>
              </div>
              <div class="carddr">
              <h1>الشعب</h1>
              </div>
              <div class="carddr">
              <h1>المصالح</h1>
              </div>
              <div class="carddr">
              <h1>ايام العطل</h1>
              </div>
              <div class="carddr">
              <h1>الصفات</h1>
              </div>
              
            </div>

            </Card>
          </div>
        </Row>
       
        
      </Container>
    </>
  );
};

export default Parametre;
