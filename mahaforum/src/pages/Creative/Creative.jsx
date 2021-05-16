import Card from '@material-ui/core/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useList } from 'react-firebase-hooks/database';
import app from '../../base';
import Search from '../../components/shared/Search';


const Creative = () => {
    const [data, setData] = useState([])
    const [snapshots, loading, error] = useList(app.database().ref('projectPost'));
    const [initial, setInitial] = useState(data)
    useEffect(() => {
      setData(snapshots.map(x=>x.val()).filter(x=>x.postType==="Creative"))
      setInitial(snapshots.map(x=>x.val()).filter(x=>x.postType==="Creative"))
   }, [loading, snapshots])
    return (
      <div>
          <Search initial={initial} setData={setData}/>
          {data.map( item => {
            return (
              <Card style={{
                margin: "1rem",
                boxShadow: "1px 1px 5px gray",
                padding: "1rem",
                border: "1px solid transparent",
              }}>
                <Row>
                  <Col xs={4}>
                    <div className="m-2">
                      <h3>{item.name}</h3>
                      <p>{item.institution}</p>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <p>Looking for people with:</p>
                    <br></br>
                    <br></br>
                    {item.criterias}
                  </Col>
                  <Col xs={2}>
                      <p>Project type</p>
                      <p>{item.type}</p>
                  </Col>
                  <Col xs={2}>
                    <Button variant="contained" style={{
                      backgroundColor: "#38ed1b",
                      width: "8em",
                      margin: "0.25em",
                      marginTop: "5.4em",
                      borderRadius: "5px",
                    }}>
                      Contact
                    </Button>
                  </Col>
                </Row>
              </Card>
            )
          })}
      </div>
  )
}

export default Creative;
