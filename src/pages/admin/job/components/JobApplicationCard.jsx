import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

function JobApplicationCard({ _id, jobId, fullName }) {
  return (
    <Link to={`/admin/job/${jobId}/application/${_id}`} className="block">
      <Card>
        <CardHeader className="flex-row justify-between items-center">
          <CardTitle>{fullName}</CardTitle>
          <Button>View</Button>
        </CardHeader>
      </Card>
    </Link>
  );
}

JobApplicationCard.propTypes = {
  _id: PropTypes.string.isRequired,
  jobId: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
};

export default JobApplicationCard;
