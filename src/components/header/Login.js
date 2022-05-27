import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);
  return (
    <div className="row" style = {{margin: "200px" }}>
      <div className="col-lo-5 col-md-7 mx-auto">
        <div className="card border-success shadow-lg my-2">
          <div className="card-header border-bottom border-success">
            <h4
              style={{ fontSize: "40px" }}
              className="text-success text-center"
            >
              ثبت نام
            </h4>
          </div>
          <div className="card-body border-bottom border-success">
            <div className="form-group mt-3">
              <label className="mb-2" htmlFor="email">
               ایمیل
              </label>
              <input
                type="text"
                name="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ایمیل خود را وارد کنید"
              />
            </div>
            <div className="form-group mt-3">
              <label className="mb-2" htmlFor="password">
               رمز عبور
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="رمز عبور خود را وارد کنید"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
