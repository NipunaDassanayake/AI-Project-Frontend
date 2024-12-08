import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/clerk-react";
import { Briefcase, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

const getJob = async (id) => {
  try {
    const token = await window.Clerk.session.getToken();
    const res = await fetch(
      `https://ai-project-backend-production.up.railway.app/jobs/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch job: ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching job:", error);
    throw error;
  }
};

const createJob = async (jobApplication) => {
  const token = await window.Clerk.session.getToken();

  await fetch(
    `https://ai-project-backend-production.up.railway.app/jobs/${id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(jobApplication),
    }
  );
};

function JobPage() {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    a1: "",
    a2: "",
    a3: "",
  });

  const { isLoaded, isSignedIn, user } = useUser();
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    getJob(params.id)
      .then((data) => {
        setJob(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createJob({
        fullName: formData.fullName,
        answers: [formData.a1, formData.a2, formData.a3],
        job: params.id,
        userId: user.id,
      });
      setFormData({
        fullName: "",
        a1: "",
        a2: "",
        a3: "",
      });
    } catch (error) {
      console.error("Error submitting job application:", error);
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  if (loading) {
    return <div>Loading job...</div>;
  }

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
            value={formData.fullName}
            onChange={(event) =>
              setFormData({ ...formData, fullName: event.target.value })
            }
          />
        </div>

        {job?.questions?.map((question, index) => (
          <div key={index}>
            <div className="flex flex-col gap-y-4">
              <Label>{question ?? `Question ${index + 1}`}</Label>
              <Textarea
                required
                value={formData[`a${index + 1}`]}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    [`a${index + 1}`]: event.target.value,
                  })
                }
              />
            </div>
          </div>
        ))}

        <div className="flex gap-x-4 items-center">
          <Button type="submit" className="bg-card text-card-foreground w-fit">
            Submit
          </Button>
          <Button
            type="button"
            onClick={() =>
              setFormData({
                fullName: "",
                a1: "",
                a2: "",
                a3: "",
              })
            }
            className="w-fit"
            variant="outline"
          >
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
}

export default JobPage;
