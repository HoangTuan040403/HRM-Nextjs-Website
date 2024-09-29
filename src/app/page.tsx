'use client';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from '../styles/home.module.css';
import { FaHome, FaTasks, FaRegCalendarCheck, FaUsers, FaMoneyCheckAlt } from 'react-icons/fa';
import { BarChart, PieChart } from '@mui/x-charts';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AppMenu from '@/components/app.menu';


interface Product {
  name: string,
  description: string
}

export default function Home() {
  const [data, setData] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your API endpoint
        const response = await axios.get('http://localhost:8080/product');
        setData(response.data.products);
      } catch (err) {
        setError(error);
        console.log(err)
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  
//   <div>
//   <h1>Product List</h1>
//   <ul>
//     {Array.isArray(data) && data.map((product) => (
//       <li key={product._id}>
//         <h2>{product.name}</h2>
//         <p>{product.description}</p>
//         {/* <p>Price: ${product.price.$numberDecimal}</p>
//         <img src={product.image} alt={product.name} width="100" /> */}
//       </li>
//     ))}
//   </ul>
// </div>

  return (
    <Container fluid style={{ marginTop: '10px' }}>
      <Row>

        <Col xs={2} md={2} className={styles.sidebar}>
          <AppMenu />
        </Col>

        <Col xs={10} md={10}>
          <Row>
            <Col md={6}>
              <Card className={styles.card} style={{ backgroundColor: '#FF7F24', color: 'white' }}>
                <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
                  {/* <FaUsers style={{ fontSize: '25px', marginRight: '8px' }} /> */}
                  <Link href="/employee" style={{textDecoration:'none', color:'white'}}>
                  <Card.Title className={styles.cardTitle}>Danh sách nhân viên</Card.Title>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className={styles.card} style={{ backgroundColor: '#FFC125', color: 'white' }}>
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>Danh sách công việc đã giao</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>


            <Col md={6}>
              <Card className={styles.card} style={{ backgroundColor: '#EE6363', color: 'white' }}>
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>Bảng lương</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className={styles.card} style={{ backgroundColor: '#4876FF', color: 'white' }}>
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>Lịch nghỉ phép</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>



            <Card className={styles.card}>
              <Card.Body>
                <Card.Title className={styles.cardTitle}>Danh sách cuộc họp</Card.Title>
                <ul>
                  <li>23 Mon - Redesign Landing Page</li>
                  <li>24 Sun - Project apps food delivery</li>
                  <li>25 Mon - Redesign Landing Page</li>
                </ul>
              </Card.Body>
            </Card>

          </Row>

          <Row>
            <Col md={6}>
              <Card className={styles.card}>
                <Card.Body>
                  <h3 style={{ textAlign: 'center' }}>Tổng số lượng nhân viên</h3>
                  <PieChart
                    series={[
                      {
                        data: [
                          { id: 0, value: 5, label: 'Teamleader' },
                          { id: 1, value: 15, label: 'Developer' },
                          { id: 2, value: 20, label: 'Tester' },
                        ],
                      },
                    ]}
                    width={500}
                    height={300}
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className={styles.card}>
                <Card.Body>
                  <h3 style={{ textAlign: 'center' }}>Tổng doanh thu</h3>
                  <BarChart
                    xAxis={[
                      {
                        id: 'barCategories',
                        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        scaleType: 'band',
                      },
                    ]}
                    series={[
                      {
                        data: [2, 5, 3, 4, 1, 2],
                      },
                    ]}
                    width={500}
                    height={300}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

  );
}
