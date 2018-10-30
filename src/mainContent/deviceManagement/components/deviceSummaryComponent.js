import React from 'react';
import { Table, Col, Row } from 'react-bootstrap';
import NoDataAvailableComponent from '../../../hoc/noDataAvailable.Component';
const TabList = (props) => Object.entries(props.tabData).map(([key, value]) => {
    return (
        <tr>
            <td>{key}</td>
            <td>{value}</td>
        </tr>
    )
});
let content;
const deviceSummaryComponent = (props) => {
    if(props.summaryData && Object.keys(props.summaryData[0].details).length !=0){
        content = props.summaryData.map((summary) =>
        <Col className="summary-widget" key={summary.type} xs={6} md={6}>
            <div className="text-center summary-title ">Device summary by {summary.type}</div>
            <Table className="tableBodyScroll" striped bordered condensed hover >
                <thead>
                    <tr>
                        <th className="text-bold">{summary.type}</th>
                        <th className="text-bold">Device Count</th>
                    </tr>
                </thead>
                <tbody>
                    <TabList tabData={summary.details} />
                </tbody>
            </Table>
        </Col>
    );
    } else {
        content =  <NoDataAvailableComponent />
    }
     
    return (
        <Row className="show-grid summary-table">
            <Col xs={12} md={12}>
                {content}
            </Col>
        </Row>
    )
}

export default deviceSummaryComponent;