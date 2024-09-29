
'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaSearch, FaUserCircle, FaBell, FaAlignLeft, FaRegBell } from 'react-icons/fa';
// import { Badge, InputGroup } from 'react-bootstrap';
import { Badge } from 'antd';
import Search from 'antd/es/transfer/search';

function AppHeader() {

    return (
        <Navbar expand="lg" className="bg-light shadow-sm" sticky="top">
            <Container>
                <Navbar.Brand href="/" className="fw-bold fs-3 text-primary">
                    HRM
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#home" className="mx-2 text-secondary">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#link" className="mx-2 text-secondary">
                            Link
                        </Nav.Link> */}
                    </Nav>
                    <FaAlignLeft className='me-auto' />
                    {/* <Form className="me-auto">
                        <div className="position-relative w-100">
                            <Form.Control style={{ borderRadius: '15px' }}
                                type="search"
                                placeholder="Tìm kiếm"
                                className="me-2 ps-4"
                                aria-label="Search"
                            />
                            <FaSearch
                                className="position-absolute"
                                style={{
                                    top: '50%',
                                    left: '10px',
                                    transform: 'translateY(-50%)',
                                    color: 'gray',

                                }}
                            />
                        </div>
                    </Form> */}
                    <Search placeholder="input search text" />

                    <div>
                        <Badge count={4} size='small'>
                            < FaRegBell className="ms-auto" />
                        </Badge>

                    </div>

                    <Nav className="ms-7">
                        <NavDropdown
                            title={
                                <span>
                                    <FaUserCircle className="me-1" /> Tài khoản
                                </span>
                            }
                            id="basic-nav-dropdown"
                            className="ms-3"
                        >
                            <NavDropdown.Item href="/signin">
                                Đăng nhập
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Đăng xuất
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppHeader;
