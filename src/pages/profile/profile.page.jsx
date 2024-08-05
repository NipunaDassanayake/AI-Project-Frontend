import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

function ProfilePage() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <main className="p-4">
      <Progress value={70} />
      <br />
      <div className="flex justify-center  ">
        <Button className="text-black">Edit Profile</Button>
      </div>

      <h3 className="title">My Counter</h3>
      <p>The Count is {count}</p>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </main>
  );
}

export default ProfilePage;
