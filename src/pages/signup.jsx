import {Link, useNavigate, useLocation} from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import {useEffect, useState} from 'react';
import {loginUser, signupUser} from "../js/api";

export default function SignUp(props) {
    const {user, setUser, cameFrom} = props.all;
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const signupData = await signupUser(user.name, user.email, user.password, user.confirm_password);

            if (signupData.success) {
                setUser({
                    ...signupData.data,
                    isLoggedIn: true,
                });
                navigate(cameFrom);
            } else {
                alert(signupData.message);
            }
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user?.isLoggedIn) navigate(cameFrom);
    }, [user, location, navigate, cameFrom]);
    return (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{maxWidth: '600px'}}>
                <MDBCardBody className='px-5'>
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                    <MDBInput value={user.name} disabled={loading}
                              onKeyDown={(e) => {
                                  e.key === "Enter" && handleSignup(e);
                              }}
                              onChange={(e) => setUser({...user, name: e.target.value})}
                              wrapperClass='mb-4' label='Your Name' size='lg' id='name' type='text'/>
                    <MDBInput value={user.email} disabled={loading}
                              onKeyDown={(e) => {
                                  e.key === "Enter" && handleSignup(e);
                              }}
                              onChange={(e) => setUser({...user, email: e.target.value})}
                              wrapperClass='mb-4' label='Your Email' size='lg' id='email' type='email'/>
                    <MDBInput value={user.password} disabled={loading}
                              onKeyDown={(e) => {
                                  e.key === "Enter" && handleSignup(e);
                              }}
                              onChange={(e) => setUser({...user, password: e.target.value})}
                              wrapperClass='mb-4' label='Password' size='lg' id='password' type='password'/>
                    <MDBInput value={user?.confirm_password} disabled={loading}
                              onKeyDown={(e) => {
                                  e.key === "Enter" && handleSignup(e);
                              }}
                              onChange={(e) => setUser({...user, confirm_password: e.target.value})}
                              wrapperClass='mb-4' label='Repeat your password' size='lg' id='confirm_password' type='password'/>
                    <div className='d-flex flex-row justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' id='flexCheckDefault'
                                     label='I agree all statements in Terms of service'/>
                    </div>
                    <MDBBtn
                        outline
                        color="dark"
                        className="d-flex justify-content-center w-100"
                        style={{overflow: "visible"}}
                        size="lg"
                        onClick={handleSignup}
                        disabled={loading}
                    >
                        {(!loading && "Register") || "Loading..."}
                    </MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}