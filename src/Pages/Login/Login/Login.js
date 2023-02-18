import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../../Assests/loginImg.png'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const [loginError, setLoginError] = useState("");
      const location = useLocation();
      const navigate = useNavigate();
      const googleProvider = new GoogleAuthProvider();
      const {login,providerLogin}=useContext(AuthContext);
      const [loginUserEmail,setLoginUserEmail] = useState('');

      const from = location.state?.from?.path || "/";

      const handleLogin = (data) => {
        console.log(data);
        setLoginError("");
        login(data.email, data.password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            navigate(from,{replace:true});
            setLoginUserEmail(data.email);
           })
          .catch((error) => {
            console.error(error);
            setLoginError(error.message);
          });
      };

      const handleGoogleSignIn = ()=>{
        providerLogin(googleProvider)
        .then(result => {
          const user = result.user;
          navigate(from,{replace:true});
          setLoginUserEmail(user.email);
          console.log(user)
        })
        .catch(error => {
          console.error(error)
        })
      }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
          <div>
            <figure>
              <img src={loginImg} alt="" />
            </figure>
          </div>
          <div className="h-[800px] flex justify-center items-center">
            <div
              className="w-96 p-7"
              style={{
                "box-shadow": " 3px 4px 10px 2px rgba(0, 0, 0, 0.05)",
                "border-radius": "18px",
              }}
            >
              <h2 className="text-4xl text-center mb-6">Login</h2>
            
              <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>
                  <input
                    type="text"
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.email && (
                    <p className="text-error">{errors.email?.message}</p>
                  )}
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be 6 characters or longer",
                      },
                    })}
                    className="input input-bordered w-full max-w-xs"
                  />
                  {errors.password && (
                    <p className="text-error">{errors.password?.message}</p>
                  )}
                </div>
    
                <input
                  type="submit"
                  className="btn btn-primary w-full mt-5"
                  value="LOGIN"
                />
                <div>
                  {loginError && (
                    <p className="text-error mt-2 font-bold">{loginError}</p>
                  )}
                </div>
              </form>
              <p className="text-sm font-bold mt-3 text-purple-500">
                New to this website ?
                <Link className="" to="/signup">
                  Please Create new account
                </Link>
              </p>
              <div className="divider">OR</div>
              {/* onClick={handleGoogleSignIn} */}
              <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary w-full text-white">
                CONTINUE WITH GOOGLE
              </button>
            </div>
          </div>
        </div>
      );
    };

export default Login