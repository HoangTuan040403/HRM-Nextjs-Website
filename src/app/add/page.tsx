'use client';
import AppMenu from '@/components/app.menu';
import { Row } from 'antd';
import { useState, SyntheticEvent } from 'react';
import { Alert, Button, Col, Container, Form, Card } from 'react-bootstrap';
import styles from '../../styles/home.module.css';


export default function CreateUser() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/user/admin/create-user', {
                method: "POST", // Chuyển thành phương thức POST
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullname,
                    email,
                    password

                }),
            });

            // Kiểm tra nếu request không thành công
            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || "Thêm thất bại!");
                setSuccess('');
                return;
            }

            // Nếu thành công
            const data = await response.json();
            setSuccess("Tạo user thành công!");
            setError('');
        } catch (err) {
            setError("Có lỗi xảy ra!");
            setSuccess('');
        }
    }


    return (
        <Container fluid style={{ marginTop: '30px' }}>
        <Row>
          <Col xs={12} md={2} className={styles.sidebar}>
            <AppMenu />
          </Col>
  
          <Col xs={12} md={10}>
            <div className="d-flex justify-content-center">
              <Card className="p-4" style={{ width: '50%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                <h1 className="text-center mb-4">Create User</h1>
  
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
  
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="fullname">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter full name"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      required
                    />
                  </Form.Group>
  
                  <Form.Group controlId="email" className="mt-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
  
                  <Form.Group controlId="password" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
  
                  <Button variant="primary" type="submit" className="mt-4 w-100" style={{ padding: '10px', fontSize: '18px' }}>
                    Create User
                  </Button>
                </Form>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
}
