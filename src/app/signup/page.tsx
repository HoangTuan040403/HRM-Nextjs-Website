'use client'
import { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button, Checkbox, Form, Input } from 'antd';
import type { FormProps } from 'antd';
import { headers } from 'next/headers';

export default function SignUp() {
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();

    const handleSignUp = async (e: SyntheticEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await fetch('http://localhost:8080/user/signup', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullname,
                    email,
                    password,
                    phone
                }),
            });
            // Kiểm tra phản hồi từ server
            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || "Đăng ký thất bại!");
                return;
            }

            // Đăng nhập thành công, chuyển hướng về trang chủ
            setSuccess("Đăng ký công!");
            await router.push('/signin');
        } catch (err) {
            console.log(err);
            setError("Có lỗi xảy ra trong quá trình đăng ký.");
        }
    };


    return (
        <div className="signup-container">
            <h1>Regist</h1>
            {error && <p className="error">{error}</p>}

            <form onSubmit={handleSignUp}>
            <div>
                    <label>Fullname:</label>
                    <input
                        type="fullname"
                        value={fullname}
                        onChange={e => setFullName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Mật khẩu:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required
                    />
                </div>
                
                <button type="submit">SignUp</button>
            </form>
        </div>
    );
}
