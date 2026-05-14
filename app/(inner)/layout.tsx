import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* TopBar sits above the fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Navbar />
      </div>

      {/*
        Spacer: TopBar ~72px (2 rows × ~36px each) + Navbar 64px = ~136px
        Using CSS custom property for easier tweaking
      */}
      <div style={{ height: "136px" }} aria-hidden="true" />

      <main>{children}</main>

      <Footer />
    </>
  );
}
