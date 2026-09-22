export default function Dashboard({ tasks }) {
  const total = tasks.length;
  const pending = tasks.filter((t) => t.status === "Pending").length;
  const inProgress = tasks.filter((t) => t.status === "In Progress").length;
  const completed = tasks.filter((t) => t.status === "Completed").length;

  const stats = [
    { label: "Total", value: total },
    { label: "Pending", value: pending },
    { label: "In progress", value: inProgress },
    { label: "Completed", value: completed },
  ];

  return (
    <section className="dashboard" aria-label="Task statistics">
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <span className="stat-value">{stat.value}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </section>
  );
}
