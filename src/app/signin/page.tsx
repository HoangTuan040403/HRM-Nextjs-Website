'use client'
import { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button, Checkbox, Form, Input } from 'antd';
import type { FormProps } from 'antd';
import { headers } from 'next/headers';
import imageLogo from '../../assets/logostore.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:8080/user/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email,
          password,
        }),
      });

      // Kiểm tra phản hồi từ server
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Đăng nhập thất bại!");
        return;
      }

      // Đăng nhập thành công, chuyển hướng về trang chủ
      setSuccess("Đăng nhập thành công!");
      await router.push('/');
    } catch (err) {
      console.log(err);
      setError("Có lỗi xảy ra trong quá trình đăng nhập.");
    }
  };


  return (
    // <div className="signup-container">
    //   <h1>login</h1>
    //   {error && <p className="error">{error}</p>}

    //   <form onSubmit={handleLogin}>

    //     <div>
    //       <label>Email:</label>
    //       <input
    //         type="email"
    //         value={email}
    //         onChange={e => setEmail(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label>Mật khẩu:</label>
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={e => setPassword(e.target.value)}
    //         required
    //       />
    //     </div>

    //     <button type="submit">Login</button>
    //   </form>
    // </div>

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.53)', height: '100vh' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
        <div style={{ flex: 1, padding: "40px 45px 24px" }}>
          <h1>Xin chào</h1>
          <p>Đăng nhập hoặc Tạo tài khoản</p>
          {error && <p className="error" style={{color:'red'}}>{error}</p>}
          <form onSubmit={handleLogin}>
            <Input style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" 
            type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required>
            </Input>
            <Input.Password style={{ marginBottom: '10px' }} placeholder="password" 
            type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required  >
            </Input.Password>
            <button type="submit" style={{
              background: 'rgb(255, 57, 69)',
              borderRadius: '4px',
              height: '48px',
              width: '100%',
              margin: '26px 0 10px',
              border: 'none'
            }}>Login</button>
            <div style={{ width: "300px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", gap: "4px"}}>
            <img src="/assets/logostore.png" alt="My Image" />
            </div>
          </form>
        </div>




      </div>
    </div >
  );
}
