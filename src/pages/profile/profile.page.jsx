import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"; // Import the useToast hook

function ProfilePage() {
  const { toast } = useToast(); // Destructure the toast function

  return (
    <main className="p-4">
      <Progress value={70} />
      
      <Button
      variant="outline"
      onClick={() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }}
    >
      Show Toast
    </Button>
    </main>
  );
}

export default ProfilePage;
