import logo from "../../images/logo.png"




const Auth = () => {
    return (
        <div>
            <div>
                <img src={logo} alt="logo_bird" />
                <div>
                    <h1></h1>
                </div>
            </div>
        </div>
    )
}


export const SignUp = () => {

    return (
        <div className="flex justify-center">

            <form action="" className="w-1/3 h-96 bg-gray-300 rounded-lg flex flex-col justify-evenly">
                <div className="flex justify-center">
                    <h2 className="font-bold text-xl">Sign up</h2>
                </div>

                <div className="flex flex-row justify-center gap-x-4">
                    <div>
                        <input type="text" className="rounded-lg h-10 text-center w-48 focus:border-red-500 outline-offset-2" placeholder="First Name" />
                    </div>
                    <div>
                        <input type="text" className="rounded-lg h-10 text-center w-48" placeholder="Last Name" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <input type="text" className="rounded-lg h-10 text-center w-48" placeholder="Username" />
                </div>
                <div className="flex flex-row justify-center gap-x-4">
                    <div>
                        <input type="password" className="rounded-lg h-10 text-center w-48" placeholder="Password" />
                    </div>
                    <div>
                        <input type="password" className="rounded-lg h-10 text-center w-48" placeholder="Confirm Password" />
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-x-4 items-center">
                    <div>
                        <h3 className="hover:underline cursor-pointer">Already have an account? Log in!</h3>
                    </div>
                    <div>
                        <button className="w-36 bg-orange-500 hover:bg-orange-600 text-white rounded-lg h-10">Sign Up</button>
                    </div>
                </div>
            </form>

        </div>
    )
}



export const LogIn = () => {

    return (
        <>
            <div className="flex justify-center">

                <form action="" className="w-96 h-72 rounded-lg bg-gray-300 flex flex-col items-center justify-evenly ">

                    <div className="flex justify-center items-center">
                        <h3 className="font-bold">Log in</h3>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-y-4">
                        <div>
                            <input type="text" className="text-center w-80 h-12 bg-white rounded-lg" placeholder="Username" />
                        </div>
                        <div>
                            <input type="password" className="text-center password w-80 h-12 bg-white rounded-lg" placeholder="Password" />
                        </div>
                    </div>

                    <div className="flex flex-row justify-center w-96 items-center gap-x-2">
                        <div>
                            <h3 className="hover:underline cursor-pointer">Don't have an account? Signup!</h3>
                        </div>
                        <div>
                            <button className="w-24 bg-orange-500 hover:bg-orange-600 text-white rounded-lg h-10" >Login</button>
                        </div>
                    </div>


                </form>

            </div>
        </>
    )
}


export default Auth
