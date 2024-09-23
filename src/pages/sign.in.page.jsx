import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignIn() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the form from refreshing the page
    console.log("Form submitted");
    console.log(loginData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="p-8 max-w-md w-full bg-gray-900">
        <h4 className="mb-6 text-xl font-bold">Sign In</h4>

        <Form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(event) =>
                setLoginData({ ...loginData, email: event.target.value })
              }
              required
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={(event) =>
                setLoginData({ ...loginData, password: event.target.value })
              }
              required
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <Checkbox id="remember-me" label="Remember Me" />
            <Link to={"/sign-up"}>Forgot Password?</Link>
          </div>

          <Button className="w-full" type="submit">
            Sign In
          </Button>

          <Separator className="my-6" />

          <Button className="w-full bg-slate-600">Sign in with Google</Button>
        </Form>

        <p className="mt-6 text-center text-sm">
          Don't have an account? <Link to={"/sign-up"}>Sign Up</Link>
        </p>
      </Card>
    </div>
  );
}

export default SignIn;
