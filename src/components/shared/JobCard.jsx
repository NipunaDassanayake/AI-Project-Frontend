import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function JobCard(props) {
  return (
    <Link to={"/job/123"} className="block">
      <Card className="text-black bg-yellow-400 border-black border-2">
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="gap-x-4">
          <div className="flex item-center gap-x-2">
            <Briefcase />
            <span>{props.type}</span>
          </div>
          <div className="flex item-center gap-x-2">
            <MapPin />
            <span>{props.location}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
export default JobCard;
