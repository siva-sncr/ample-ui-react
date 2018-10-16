import React from 'react';
import { Table, Col, Row } from 'react-bootstrap';


const TabList = (props) => Object.entries(props.tabData).map(([key, value]) => {
    return (
            <tbody>
                <tr>
                    <td>{key}</td>
                    <td>{value}</td>
                </tr>
            </tbody>
    )
});

const deviceSummaryComponent = (props) => {

    const content = props.summaryData.map((summary) =>
        <Col key={summary.type} xs={6} md={6}>
            <div className="text-center">Device summary by {summary.type}</div>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>{summary.type}</th>
                        <th>Device Count</th>
                    </tr>
                </thead>
                
                <TabList tabData={summary.details} />
            </Table>
        </Col>
    );

    return (
        <Row className="show-grid">
            <Col xs={12} md={12}>
                {content}
            </Col>
        </Row>
    )
}

export default deviceSummaryComponent;