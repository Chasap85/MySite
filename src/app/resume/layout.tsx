import NavBar from "../components/global/NavBar/page";

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-12">
      {children}
    </section>
  );
}
