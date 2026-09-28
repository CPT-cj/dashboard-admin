const sectionTitle = ({ title, buttons }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold font-IRANSansX">{title}</h2>
      </div>
      <div className="flex items-center justify-center gap-3 ">{buttons}</div>
    </div>
  );
};
export default sectionTitle;
