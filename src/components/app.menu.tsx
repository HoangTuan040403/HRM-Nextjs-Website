'use client'
import { Col, ListGroup } from "react-bootstrap";
import { FaHome, FaMoneyCheckAlt, FaRegCalendarCheck, FaTasks, FaUsers } from "react-icons/fa";
import styles from '../styles/home.module.css';
import Link from "next/link";


function AppMenu () {
    return(
        <ListGroup variant="flush" >
          <ListGroup.Item className={styles.listGroupItem}>
            <FaHome className={styles.icon}/><Link  href="/">Dashboard</Link>
          </ListGroup.Item>
          <ListGroup.Item className={styles.listGroupItem}>
            <FaUsers className={styles.icon} /><Link href="/employee">Nhân viên</Link>
          </ListGroup.Item>
          <ListGroup.Item className={styles.listGroupItem}>
            <FaRegCalendarCheck className={styles.icon} /><Link href="/time-management">Quản lý ngày nghỉ</Link>
          </ListGroup.Item>
          <ListGroup.Item className={styles.listGroupItem}>
            <FaTasks className={styles.icon} /><Link href="/task-project">Nhiệm vụ</Link>
          </ListGroup.Item>
          <ListGroup.Item className={styles.listGroupItem}>
            <FaMoneyCheckAlt className={styles.icon} /> <Link href="/self-request">Bảng lương</Link>
          </ListGroup.Item>
        </ListGroup>
   
  
  )
}

export default AppMenu;