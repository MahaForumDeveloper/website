import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Search from '../../components/shared/Search';
import Card from '@material-ui/core/Card';
import {  Row, Col, Button } from 'react-bootstrap';
import app from '../../base';
import 'firebase/database'
import { useList } from 'react-firebase-hooks/database';

const Professional = () => {
    const [data, setData] = useState([])
    const [snapshots, loading, error] = useList(app.database().ref('projectPost'));
    const [initial, setInitial] = useState(data)
    useEffect(() => {
      setData(snapshots.map(x=>x.val()).filter(x=>x.postType==="Professional"))
      setInitial(snapshots.map(x=>x.val()).filter(x=>x.postType==="Professional"))
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
                    Looking for people with:
                    <br></br>
                    {item.criterias}
                  </Col>
                  <Col xs={2}>
                      <p>Project type</p>
                      <p>{item.type}</p>
                  </Col>
                  <Col xs={2}>
                    <Button variant="contained" style={{
                      backgroundColor: "#fed700",
                      width: "8em",
                      marginTop: "2.5em",
                      marginBottom: "0.25em",
                      marginLeft: "0.25em",
                      borderRadius: "5px",
                    }}>
                      Prototype
                    </Button>
                    <Button variant="contained" style={{
                      backgroundColor: "#38ed1b",
                      width: "8em",
                      margin: "0.25em",
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

export default Professional
