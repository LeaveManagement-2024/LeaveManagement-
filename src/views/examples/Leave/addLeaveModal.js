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

const AddEmployeeModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >  
        <Modal.Body>
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
              <h4 className='text-center text-xl'> الرخصة الادارية</h4>
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
                            placeholder="    "
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
                              
                          </label>
                          <Input 
                            className="form-control-alternative text-right"
                            id="input-email"
                            placeholder=" "
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
                            رقم الهاتف
                          </label>
                          <Input 
                            className="form-control-alternative text-right"
                         
                            id="input-first-name"
                            placeholder=" 06 56 30 98 03"
                            type="tel"
                            maxLength={10}

                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            العنوان
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                           
                            id="input-last-name"
                            placeholder="المدينة،الحي،رقم المنزل"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                  </div>
                  <hr className="my-4" />
                  <h6 className=" text-left mb-4  "style={{ fontSize: '1.3em' }}>
                   Les informations personnels
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup className="text-left">
                          <label
                            className="form-control-label"ك
                            htmlFor="input-first-name"
                          >
                            Nom
                          </label>
                          <Input
                            className="form-control-alternative text-left"                           
                            id="input-first-name"
                            placeholder="Votre nom"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">    
                        <FormGroup className="text-left">
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Prénom 
                          </label>
                          <Input
                            className="form-control-alternative text-left"
                        
                            id="input-last-name"
                            placeholder="Votre prénom "
                            type="text"
                          /> 
                        </FormGroup>
                      </Col>
                     
                     
                    </Row>
                    <Row>
                      
                    </Row>
                    <Row>
                     
                      <Col md="12">
                        <FormGroup className="text-left">
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Adresse
                          </label>
                          <Input
                            className="form-control-alternative text-left"
                           
                            id="input-last-name"
                            placeholder="Ville,Quartier,Num "
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                  </div>
                  <hr className="my-4" />
                  
                  {/* Address */}
                  <h6 className="heading-small text-right mb-4 "style={{ fontSize: '1.5em' }}>
                    معلومات العمل
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup className="text-right" >
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            الرتبة 
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                           
                            id="input-address"
                            placeholder="الرتبة"
                            type="text"
                        
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            رقم التاجر
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                           
                            id="input-city"
                            placeholder="رقم التاجير"
                            type="text"
                        
                            
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            تاريخ التوظيف
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                            
                            id="input-country"
                            
                            type="date"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-postal-code"
                          >
                              مقر العمل
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                            id="input-postal-code"
                            placeholder="مقر العمل"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            الصفة
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                           
                            id="input-city"
                            placeholder="الصفة"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup className="text-right">
                          <label 
                            className="form-control-label "
                            htmlFor="input-country"
                          >
                            الشعبة
                          </label>
                          <Input 
                            className="form-control-alternative text-right"
                            
                            id="input-country"
                            placeholder="الشعبة"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup className="text-right">
                          <label
                            className="form-control-label"
                            htmlFor="input-postal-code"
                          >
                            المصلحة
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                            id="input-postal-code"
                            placeholder="المصلحة"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  <h6 className=" text-left mb-4  "style={{ fontSize: '1.3em' }}>
                    Les informations de travail
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup className="text-left" >
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Grade 
                          </label>
                          <Input
                            className="form-control-alternative text-left"
                           
                            id="input-address"
                            placeholder="Votre grade"
                            type="text"
                        
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                     
                      
                      <Col  md="12">
                        <FormGroup className="text-left">
                          <label
                            className="form-control-label"
                            htmlFor="input-postal-code"
                          >
                              Lieu de travail
                          </label>
                          <Input
                            className="form-control-alternative text-left"
                            id="input-postal-code"
                            placeholder=" Votre lieu de travail "
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup className="text-left">
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Fonction
                          </label>
                          <Input
                            className="form-control-alternative text-left"
                           
                            id="input-city"
                            placeholder="Votre fonction"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup className="text-left">
                          <label 
                            className="form-control-label "
                            htmlFor="input-country"
                          >
                            Filiere
                          </label>
                          <Input 
                            className="form-control-alternative text-left"
                            
                            id="input-country"
                            placeholder="Votre filiere"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup className="text-left">
                          <label
                            className="form-control-label"
                            htmlFor="input-postal-code"
                          >
                            Service
                          </label>
                          <Input
                            className="form-control-alternative text-left"
                            id="input-postal-code"
                            placeholder="Votre service"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  <h6 className="heading-small text-right mb-4 "style={{ fontSize: '1.5em' }}>
                  إدخال كلمة المرور 
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup className="text-right" >
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            كلمة المرور  
                          </label>
                          <Input
                            className="form-control-alternative text-right"
                           
                            id="input-address"
                            placeholder="كلمة المرور "
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                 
                    
                    </Row>
                     
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-right mb-4 "style={{ fontSize: '1.5em' }}> الصورة الشخصية </h6>
                  <div className="pl-lg-4">
                    <FormGroup className="text-right">
                      
                      <div className="d-flex justify-content-center " style={{marginTop : '7px',marginBottom : '0px'}} >
                            <Input                                                       
                              size="sm" 
                              type="file"
                              
                            >
                              
                            </Input>
                            
                        </div>
                      
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>خروج</Button>
          <Button variant="primary" >
           حفظ
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  export default AddEmployeeModal;