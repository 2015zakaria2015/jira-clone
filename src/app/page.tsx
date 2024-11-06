import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

export default function Home() {
  return (
 <div>
            <FcGoogle  size={40} className="mr-2" />

  <Button >
    Primary
  </Button>
  <Button variant="destructive">
  destructive
  </Button>
  <Button variant="secondary">
    Primary
  </Button>
  <Button variant="outline">
    Primary
  </Button> <Button variant="ghost">
    Primary
  </Button> <Button variant="muted">
    Primary
  </Button> <Button variant="teritrary">
  teritrary   </Button>


  
 </div>
  );
}
