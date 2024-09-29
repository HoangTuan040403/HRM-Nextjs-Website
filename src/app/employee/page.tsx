'use client';
import axios from "axios";
import { useEffect, useState, SyntheticEvent } from "react";
import { Row, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import style from "../../styles/table.module.css";
import { Col, Container } from "react-bootstrap";
import styles from '../../styles/home.module.css';
import AppMenu from "@/components/app.menu";
import {  FaPlusCircle, } from 'react-icons/fa';
import { FaDeleteLeft, } from 'react-icons/fa6';
import Link from "next/link";


interface User {
    fullname: string,
    email: string,
    phone: string
}


export default function PageEmployee() {
    const [data, setData] = useState<User>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userId, setUserId] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace with your API endpoint
                const response = await axios.get('http://localhost:8080/user/admin/users');
                setData(response.data.user);
            } catch (err) {
                setError(error);
                console.log(err)
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

   
  const handleDelete = async (userId: string) => {
    try {
        const response = await fetch(`http://localhost:8080/user/admin/user/${userId}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            const errorData = await response.json();
            setError(errorData.message || "Xóa thất bại!");
           
            return;
        }

        // If successful, remove the user from the state
        // setData(prevData => prevData.filter(user => user._id !== userId)); // Xóa user khỏi danh sách mà không mất toàn bộ danh sách
       
        setError(null);
    } catch (err) {
        console.error(err);
    }
};
   
    
    return (   
        <Container fluid style={{ marginTop: '10px' }}>
        <Row>
          <Col xs={2} md={2} className={styles.sidebar}>
            <AppMenu />
          </Col>
          <Col xs={10} md={10}>
          <Link href="/add"> <FaPlusCircle style={{fontSize:'20px'}}/></Link>
         
        <table className={style['styled-table']}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
          

        </tr>
      </thead>
      <tbody>
        {Array.isArray(data) && data.map((user) => (
          <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.fullname}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
               
                {/* <button>Edit</button> */}
                <FaDeleteLeft onClick={() => handleDelete(user._id)} />
          </tr>
        ))}
      </tbody>
    </table>
    </Col>
    </Row>
    </Container>
          
    );
}

