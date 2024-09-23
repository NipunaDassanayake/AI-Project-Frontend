import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Briefcase, MapPin } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const getJob = async (id) => {
  const res = await fetch(`http://localhost:8000/jobs/${id}`, {
    method: "GET",
  });
  const job = await res.json();
  return job;
};

const createJob = async (jobApplication) => {
  const res = await fetch("http://localhost:8000/jobApplications", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jobApplication),
  });
};

function JobPage() {
  const [job, setJob] = useState(null);
  const params = useParams();

  useEffect(() => {
    getJob(params.id).then((data) => {
      setJob(data);
      console.log(data);
    });

    // calling the method
  }, [params]);

  const [formData, setFormData] = useState({
    fullName: "",
    a1: "",
    a2: "",
    a3: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    createJob({
      fullName: formData.fullName,
      answer: [formData.a1, formData.a2, formData.a3],
      job: params.id,
      userID: "123",
    });
  };

  return (
    <div>
      <div>
        <h2>{job?.title}</h2>
        <div className="flex items-center gap-x-4 mt-4">
          <div className="flex items-center gap-x-2">
            <Briefcase />
            <span>{job?.type}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <MapPin />
            <span>{job?.location}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 py-4">
        <p>{job?.description}</p>
      </div>
      <Separator />

      <form className="py-8 flex flex-col gap-y-8" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-4">
          <Label>Full Name</Label>
          <Input
            required
            onChange={(event) =>
              setFormData({ ...formData, fullName: event.target.value })
            }
            value={formData.fullName}
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <Label>{job?.questions[0]}</Label>
          <Textarea
            required
            onChange={(event) =>
              setFormData({ ...formData, a1: event.target.value })
            }
            value={formData.a1}
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <Label>{job?.questions[1]}</Label>
          <Textarea
            required
            onChange={(event) =>
              setFormData({ ...formData, a2: event.target.value })
            }
            value={formData.a2}
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <Label>{job?.questions[2]}</Label>
          <Textarea
            required
            onChange={(event) =>
              setFormData({ ...formData, a3: event.target.value })
            }
            value={formData.a3}
          />
        </div>

        <div className="flex  gap-x-4 items-center">
          <Button type="submit" className="text-black">
            Submit
          </Button>

          <Button
            type="button"
            className="text-black"
            onClick={() =>
              setFormData({
                ///setting form data to clear when i click clear button
                fullName: "",
                a1: "",
                a2: "",
                a3: "",
              })
            }
          >
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
}
export default JobPage;
