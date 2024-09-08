import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Briefcase, MapPin } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function JobPage() {
  const job = {
    title: "Intern - Software Engineer",
    description:
      "We are seeking a motivated and enthusiastic Software Engineering Intern to join our dynamic team. As a Software Engineering Intern, you will have the opportunity to work on innovative projects, gain hands-on experience, and collaborate with experienced professionals in a full-time, remote position.",
    type: "Full-time",
    location: "Remote",
    questions: [
      "Share your academic background and highlight key programming concepts you've mastered. How has your education shaped your understanding of software engineering?",
      "Describe your professional development, emphasizing any certifications obtained. How have these certifications enriched your skill set and contributed to your programming expertise?",
      "Discuss notable projects in your programming experience. What challenges did you face, and how did you apply your skills to overcome them? What were the outcomes?",
    ],
  };

  const [formData, setFormData] = useState({
    fullName: "",
    a1: "",
    a2: "",
    a3: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div>
        <h2>{job.title}</h2>
        <div className="flex items-center gap-x-4 mt-4">
          <div className="flex items-center gap-x-2">
            <Briefcase />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <MapPin />
            <span>{job.location}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 py-4">
        <p>{job.description}</p>
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
          <Label>
            Talk about the experience you have gained in Architecting Software?
          </Label>
          <Textarea
            required
            onChange={(event) =>
              setFormData({ ...formData, a1: event.target.value })
            }
            value={formData.a1}
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <Label>What are the technologies you are familiar with?</Label>
          <Textarea
            required
            onChange={(event) =>
              setFormData({ ...formData, a2: event.target.value })
            }
            value={formData.a2}
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <Label>
            Talk about the experience you got in Software Development
          </Label>
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
            onClick={() => setFormData({ ///setting form data to clear when i click clear button
              fullName: "",
              a1: "",
              a2: "",
              a3: "",
            })}
          >
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
}
export default JobPage;
