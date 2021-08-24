import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  List
} from "reactstrap";

// core components

function RulesTabs() {
  const [iconPills, setIconPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs py-3">
        <Container>
          <Row>
            <Col className="mx-auto">
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                  <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#terra"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="text-danger fas fa-times-circle pr-1"></i>
                        <span className='text-danger'>Prohibido</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#terra"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        <i className="text-success fas fa-check-circle pr-1"></i>
                        <span className='text-success'>Permitido</span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <List className='text-danger'>
                        <li>Proteger terrenos donde no deseas construir</li><hr color='red' />
                        <li>Grifear/Robar en zonas protegidas</li><hr color='red' />
                        <li>Proteger y/o Destruir los portales hacia el end</li><hr color='red' />
                        <li>Utilizar hacks/mods y cualquier software de terceros que te den ventajas en el juego</li><hr color='red' />
                        <li>Usar bugs/exploits del servidor o del cliente</li><hr color='red' />
                        <li>Hacer Spam o Flood via CHAT</li><hr color='red' />
                        <li>Ataques personales como insultos, desprecio, racismo, xenofobia, acoso, etc</li><hr color='red' />
                        <li>Mecanismos para la carga permanente de chunks, 0-ticks y masivos que generen lag</li><hr color='red' />
                        <li>Cualquier sistema que evite el kickeo por AFK</li><hr color='red' />
                        <li>Pedir cosas al staff</li><hr color='red' />
                        <li>Compartir alguna URL o IP de servidores externos</li><hr color='red' />
                        <li>Vender rangos, objetos, o cualquier cosa del servidor por dinero real u otro medio externo a TerraKraft</li><hr color='red' />
                        <li>Uso de multicuentas para beneficio propio y/o de otro jugador</li><hr color='red' />
                        <li>Transpaso de cuentas VIP a otros usuarios</li><hr color='red' />
                      </List>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                    <List className='text-success'>
                        <li>tpakill</li><hr color='green' />
                        <li>Estafas dentro del juego (<a href='https://tienda.terrakraft.tk/' className='text-danger'>excluyendo tienda.terrakraft.tk</a>)</li><hr color='green' />
                        <li>Vender cosas de <a href='https://tienda.terrakraft.tk/'>tienda.terrakraft.tk</a> a cambio de objetos dentro del juego (<span className='text-danger'>sin estafas</span>)</li><hr color='green' />
                        <li>Software de terceros: Optifine, Badlion y Lunar Client. Si crees que algún otro mod/software de tercero debería estar permitido, sugiérelo a un staff</li>
                      </List>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
              <p>El incumplimiento de cualquiera de estas reglas podrá ser causa de sanciones sin previo aviso, así como el NO leerlas tampoco te exime del cumplimiento de ellas.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default RulesTabs;
