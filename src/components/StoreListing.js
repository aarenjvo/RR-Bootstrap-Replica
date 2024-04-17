import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import '../App.css'


function StoreListing() {
    return (
        <Container style={{ marginTop: "40px", textAlign: "center" }}>
            <div id='browseStoresDiv'>
                <h2 id='browseStoresH2'>Browse stores in
                    <span role='button' id='yourCity'> San Diego</span>
                </h2>
                <div id='browseStoresGrid'>
                    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }} >
                        <ul id='grid'>
                            <li id='ralphs'>
                                <Row>
                                    <Col>
                                        <Image src="https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/38/bef2eb95-7375-4547-ab37-21502de090e0.png" id="ralphsImg" roundedCircle />
                                    </Col>
                                    <Col>
                                        <h5 style={{ fontWeight: "bold" }}>Ralphs</h5>
                                        <p>Delivery * Pickup</p>
                                    </Col>
                                </Row>
                            </li>
                            {/* <Col sm="1"></Col> */}
                            <li id='costco'>
                                <Row >
                                    <Col>
                                        <Image src="https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png" id="costcoImg" roundedCircle />
                                    </Col>
                                    <Col>
                                        <h5 style={{ fontWeight: "bold" }}>Costco</h5>
                                        <p>Delivery * Pickup</p>
                                    </Col>
                                </Row>
                            </li>
                            {/* <Col sm="1"></Col> */}
                            <li id='vons'>
                                <Row >
                                    <Col>
                                        <Image src="https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/290/627b03bd-1ef8-4d74-8f3d-346f7f6d18a5.png" id="vonsImg" roundedCircle />
                                    </Col>
                                    <Col>
                                        <h5 style={{ fontWeight: "bold" }}>Vons</h5>
                                        <p>Delivery</p>
                                    </Col>
                                </Row>
                            </li>
                        </ul>
                    </Row>
                </div>
            </div>
        </Container>

    )
}

export default StoreListing

