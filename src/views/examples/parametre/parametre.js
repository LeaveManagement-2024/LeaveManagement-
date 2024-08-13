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
                <div className="d-flex justify-content-between align-items-center">
                  <Button color="primary" >
                    إضافة موظف
                  </Button>
                 
                  <h3 className="mb-0">جدول الموظفين</h3>
                </div>
              </CardHeader>
            
<div class="carddr">
  Click me
</div>
            
            </Card>
          </div>
        </Row>
        {/* مثال لنموذج لإضافة/تحديث الموظفين */}
        
      </Container>
    </>
  );
};

export default Parametre;
