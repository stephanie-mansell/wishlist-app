import { SignIn } from "@clerk/clerk-react";

function Login() {
  return <SignIn routing="path" path="/sign-in" />;
}

export default Login;
