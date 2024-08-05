import JobCard from "@/components/shared/JobCard";
function JobSection() {
  return (
    <section className="py-8">
      <h2>Available Jobs</h2>
      <div className="mt-4 flex flex-col gap-y-8">
        <JobCard title={"Cloud Solution Engineer"} location={"Colombo, Sri Lanka"} type={"Full-time"}/>
        <JobCard title={"Software Engineering Intern"} location={"Gampaha,Sri Lanka"} type={"Remote"}/>
      </div>
    </section>
  );
}
export default JobSection;
