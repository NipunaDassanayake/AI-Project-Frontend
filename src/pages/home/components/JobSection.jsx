import JobCard from "@/components/shared/JobCard";
function JobSection() {
  const jobs = [
    {
      _id: "xyz",
      title: "Intern - Software Engineer",
      type: "Fulltime",
      location: "Remote",
    },
    {
      _id: "abc",
      title: "Software Engineer",
      type: "Full-time",
      location: "Remote",
    },
    {
      _id: "def",
      title: "Product Manager",
      type: "Part-time",
      location: "New York, NY",
    },

    {
      _id: "ghi",
      title: "Data Scientist",
      type: "Contract",
      location: "San Francisco, CA",
    },
  ];

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
