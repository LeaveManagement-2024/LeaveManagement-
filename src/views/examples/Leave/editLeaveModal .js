import Modal from 'react-bootstrap/Modal';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

const EditLeaveModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >  
        <Modal.Body>
            <Card className="bg-secondary shadow ">
              <CardHeader className="bg-white border-0">
              <h4 className='text-center text-xl'>  تعديل الرخصة الادارية</h4>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-right mb-4 "style={{ fontSize: '1.5em' }}>
                                   </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                              اسم النائب 
                          </label>
                          <Input
                            className="form-control-alternative text-right"                           
                            id="input-first-name"
                            placeholder=" اسم النائب"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">    
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                             نوع الرخصة
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                        
                            id="input-last-name"
                            placeholder="...رخصة مرضية،رخصة ولادة"
                            type="select"
                          >
                            <option>
                              
                            </option>
                            <option>
                              2
                            </option>
                            <option>
                              3
                            </option>
                            <option>
                              4
                            </option>
                            <option>
                              5
                            </option>
                            </Input>
                        </FormGroup>
                      </Col>
                     
                     
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                              تاريخ استئناف العمل
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                           
                            id="input-username"
                            placeholder="  تاريخ استئناف العمل  "
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label text-left"
                            htmlFor="input-email"
                          >
                              تاريخ مغادرة العمل
                          </label>
                          <Input 
                            className="form-control-alternative text-right"
                            id="input-text"
                            placeholder="تاريخ مغادرة العمل "
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            المسؤول عن النائب 
                          </label>
                          <Input 
                            className="form-control-alternative text-right"
                         
                            id="input-first-name"
                            placeholder=" المسؤول عن النائب   "
                            type="text"
                           

                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            رئيس المصلحة
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                           
                            id="input-last-name"
                            placeholder="رئيس المصلحة "
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                  </div>
                  
                  
                  
                </Form>
              </CardBody>
            </Card>
          
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center" >
       
          <Button onClick={props.onHide}>خروج</Button>
          <Button variant="primary" >
          تعديل
          </Button>
          
        </Modal.Footer>
      </Modal>
      
    );
  };
  export default EditLeaveModal;