import JobCard from "@/components/shared/JobCard";
import { useEffect, useState } from "react";

const getJobs = async () => {
  const res = await fetch("http://localhost:8000/jobs", {
    method: "GET",
  });
  const jobs = await res.json();
  return jobs;
};

function JobSection() {
  const [jobs, setJobs] = useState([]);
  const [isJobLoading, setIsJobLoading] = useState(false);
  const [isJobError, setIsJobError] = useState(false);

  useEffect(() => {
    setIsJobLoading(true);
    getJobs()
      .then((jobs) => {
        setJobs(jobs);
        //setIsJobLoading(false);
      })
      .catch((err) => {
        setIsJobError(true);
        //setIsJobLoading(false);
      })
      .finally(() => {
        setIsJobLoading(false);
      });

    // calling the method
  }, []);

  if (isJobLoading) {
    return (
      <section className="py-8">
        <h2>Available Jobs</h2>

        <div className="mt-4 flex flex-col gap-y-8">
          <h1>Loading....</h1>
        </div>
      </section>
    );
  }

  if (isJobError) {
    return (
      <section className="py-8">
        <h2>Available Jobs</h2>

        <div className="mt-4 flex flex-col gap-y-8">
          <h2>Error While Fetching Data..</h2>
        </div>
      </section>
    );
  }
  return (
    <section className="py-8">
      <h2>Available Jobs</h2>

      <div className="mt-4 flex flex-col gap-y-8">
        {jobs.map((job) => {
          return (
            <JobCard
              key={job._id}
              title={job.title}
              _id={job._id}
              type={job.type}
              location={job.location}
            />
          );
        })}
      </div>
    </section>
  );
}
export default JobSection;
