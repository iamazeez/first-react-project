import react,{useState, useEffect} from 'react';
import axios from 'axios';

const Login = () => {

    const [usernameReg,setUsernameReg] = useState('');
    const [passwordReg,setPasswordReg] = useState('');
    const [registerError,setRegisterError] = useState('');

    const [usernameLog,setUsernameLog] = useState('');
    const [passwordLog,setPasswordLog] = useState('');
    const [loginError,setLoginError] = useState('');
    const [loginStatus,setLoginStatus] = useState('');
    const [isLogin,setIsLogin] = useState(false);

    axios.defaults.withCredentials = true;


    useEffect(() => {
        axios.get("http://localhost:9000/login")
        .then(res => {
            console.log(res);
            if(res.data.auth){
                setIsLogin(res.data.auth);
                setLoginStatus(res.data.user.username)
            }else{
                setIsLogin(res.data.login);
                setLoginError(res.data.message);
            }
        }).catch(err => loginError(err.data.message));
    },[]);

    const login = (e) => {
        e.preventDefault();
        if(usernameLog == "" || passwordLog == ''){
           setLoginError("Please fill properly");
           return;
        }

        axios.post("http://localhost:9000/login",{
             username:usernameLog,
             password:passwordLog
        }).then(res => {
            if(!res.data.auth){
                setLoginError(res.data.message);
                setLoginError(res.data.auth);
            }else{
               
                localStorage.setItem('token',res.data.token);
                setLoginError('Login success');
                setIsLogin(res.data.auth);
                setLoginStatus(res.data.user.username)
            }
        }).catch(err => {
            console.log(err);
            setLoginError('Error while login');
        })
    }

    const userAuthenticated = () => {
        axios.get("http://localhost:9000/isUserAuth" , {
            headers:{
                "x-access-token":localStorage.getItem("token")
            }
        }).then(res => console.log(res))
        .catch(err => console.log(err));
    }

    const logout = (e) => {
        e.preventDefault();
        axios.get("http://localhost:9000/logout")
        .then(res => {
            console.log(res);
            setLoginStatus('');
        })
        .catch(err => console.log(err));
 }

/*
    useEffect(() => {
        axios.get("http://localhost:9000/login")
        .then(res => {
            console.log(res);
            if(res.data.loggedIn){
                setLoginStatus(res.data.user.username)
            }
        });
    },[loginStatus]);

    const register = (e) => {
        e.preventDefault();
        if(usernameReg == '' || passwordReg == ''){
            setRegisterError('Please fill form properly');
            return;
        }
        axios.post("http://localhost:9000/register",{
            username:usernameReg,
            password:passwordReg
        }).then(res => {
            setRegisterError('Register Successfully')
            console.log(res)
        })
        .catch(err => {
            console.log(err);
            setRegisterError("Error while registering");
        });
    }

    const login = (e) => {
        e.preventDefault();
        if(usernameLog == "" || passwordLog == ''){
           setLoginError("Please fill properly");
           return;
        }

        axios.post("http://localhost:9000/login",{
             username:usernameLog,
             password:passwordLog
        }).then(res => {
            if(res.data.message){
                setLoginError(res.data.message);
                console.log(res);
            }else{
                console.log(res);
                setLoginError('Login success');
                setLoginStatus(res.data.user.username)
            }
        }).catch(err => {
            console.log(err);
            setLoginError('Error while login');
        })
    }

    const logout = (e) => {
           e.preventDefault();
           axios.get("http://localhost:9000/logout")
           .then(res => {
               console.log(res);
               setLoginStatus('');
           })
           .catch(err => console.log(err));
    }
*/
    return (
        <>
         <div style={{display:'flex',alignItems:'center',flex:1,flexDirection:'column',alignContent:'center'}}>
         <h1>Register</h1>
        <form>
            username : <input value={usernameReg} type='text' onChange={(e) => setUsernameReg(e.target.value)} /><br />
            password : <input value={passwordReg} type='password' onChange={(e) => setPasswordReg(e.target.value)} /><br />
            <button onClick={login}>Register</button>
            { registerError != '' ? registerError : null}
        </form>

        <h1>Login</h1>
        <form>
            username : <input value={usernameLog} type='text' onChange={(e) => setUsernameLog(e.target.value)} /><br />
            password : <input value={passwordLog} type='password' onChange={(e) => setPasswordLog(e.target.value)} /><br />
            <button onClick={login}>Login</button>
            { loginError != '' ? loginError : null }
            { loginStatus != '' ? "Welcome " + loginStatus : null }
            <br/>
            <button onClick={logout}>Logout</button>
        </form>
         { isLogin && <button onClick={userAuthenticated}>Check authenticated user</button> }
        </div>
        </>
    )

}

export default Login;