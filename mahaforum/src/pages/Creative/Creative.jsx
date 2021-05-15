import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Search from '../../components/shared/Search';
import Card from '@material-ui/core/Card';
import { Row, Col, Button } from 'react-bootstrap';

const items = [
  {
      id: 1,
      name: "Alfiansyah",
      university: "Universitas Sebelas Maret",
      lookingfor: ["Skill A", "Skill B", "Skill C"],
      type: "Lomba"
  },
  {
    id: 2,
    name: "Alfiansyah",
    university: "Universitas Sebelas Maret",
    lookingfor: ["Skill A", "Skill B", "Skill C"],
    type: "Competition"
  },
  {
    id: 3,
    name: "Alfiansyah",
    university: "Universitas Sebelas Maret",
    lookingfor: ["Skill A", "Skill B", "Skill C"],
    type: "Magang"
  }
];

const Creative = () => {
    return (
      <div>
          <Search></Search>
          {items.map( item => {
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
                      <p>{item.university}</p>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <p>Looking for people with:</p>
                    <ul style={{
                      listStyleType: "decimal",
                      marginLeft: "3em",
                    }}>
                      {item.lookingfor.map( lookingfors => {
                        return(
                          <li>{lookingfors}</li>
                        )
                      })}
                    </ul>
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
