export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-right pr-[10%]">
      <p>
        Alan Khalili © {currentYear}
      </p>
    </div>
  );
}
