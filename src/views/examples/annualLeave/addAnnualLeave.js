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

const AddAnnualLeaveModal = (props) => {
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
              <h4 className='text-center text-xl'> الرخصة السنوية</h4>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-right mb-4 " style={{ fontSize: '1.5em' }}>
                                   </h6>
                  <div className="pl-lg-4">
                  <Row>
                      
                      <Col lg="6">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-leave-date"
                          >
                               اسم الرخصة 
                          </label>
                          <Input 
                            className="form-control-alternative text-right"
                            id="input-leave-date"
                            placeholder="   اسم الرخصة "
                            type="date"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-employee-name"
                          >
                               بداية الرخصة السنوية 
                          </label>
                          <Input
                            className="form-control-alternative text-right"                           
                            id="input-employee-name"
                            placeholder="   بداية الرخصة السنوية" 
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">    
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-leave-type"
                          >
                             نهاية الرخصة السنوية
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                            id="input-leave-type"
                            placeholder="نهاية الرخصة السنوية"
                            type="select"
                          >
                           
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                   
                    <Row>
                      
                      
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button onClick={props.onHide}>خروج</Button>
          <Button variant="primary">
           حفظ
          </Button>
        </Modal.Footer>
      </Modal>
    );
};

export default AddAnnualLeaveModal;
