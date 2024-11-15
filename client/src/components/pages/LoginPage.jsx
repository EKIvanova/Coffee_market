import React from 'react';

export default function LoginPage({handleLogin}) {
   return (
    <form onSubmit={handleLogin}>
    <div className="mb-3">
<label htmlFor="em1" className="form-label">Email</label>
  <input type='email' name="email" className="form-control" id="em1"/>
</div>
<div className="mb-3">
<label htmlFor="pass1" className="form-label">Password</label>
  <input type="password" name='password' className="form-control" id="pass1"/>
</div>
<button type='submit' className="btn btn-primary">
    Войти
</button>
</form>
);
}