import { useForm } from 'react-hook-form';

import './App.css';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email</label>
          <input type="text" name="email" {...register("email", {
            required: true
          })} />
        </div>
        {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required.</p>
          )}
        <div className="form-control">
          <label>Password</label>
          <input type="password" name="password" {...register("password", {
            required: true,
            minLength: 6
          })} />
          {errors.password && errors.password.type === "required" && (
            <p className="errorMsg">Password is required.</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="errorMsg">
              Password should be at-least 6 characters.
            </p>
          )}
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;
