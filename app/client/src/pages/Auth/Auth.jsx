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

                <div className="flex flex-row justify-around">
                    <div>
                        <input type="text" className="rounded-lg h-10 text-center w-48 focus:border-red-500 outline-offset-2" placeholder="First Name" />
                    </div>
                    <div>
                        <input type="text" className="rounded-lg h-10 text-center w-48" placeholder="Last Name" />
                    </div>
                </div>
                <div className="flex justify-start pl-8">
                    <input type="text" className="rounded-lg h-10 text-center w-96" placeholder="Username" />
                </div>
                <div className="flex flex-row justify-around">
                    <div>
                        <input type="text" className="rounded-lg h-10 text-center w-48" placeholder="Password" />
                    </div>
                    <div>
                        <input type="text" className="rounded-lg h-10 text-center w-48" placeholder="Confirm Password" />
                    </div>
                </div>
                <div classname="flex flex-row justify-between w-1/3">
                    <div>
                        <h3 className="hover:underline cursor-pointer">Already have an account? Log in!</h3>
                    </div>
                    <div>
                        <button className="w-36 bg-orange-500 text-white rounded-lg h-8">Sign Up</button>
                    </div>
                </div>
            </form>

        </div>
    )
}



export default Auth
