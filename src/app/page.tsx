import Container from "@/components/atoms/Container copy/Container";
import Header from "@/components/atoms/Header/Header";
import Footer from "@/components/organisms/Footer copy/Footer";
import HeroSection from "@/components/organisms/HeroSection copy/HeroSection";
import TicketForm from "@/components/organisms/TicketForm/TicketForm";
import TicketReservationWrap from "@/components/organisms/TicketReservationWrap/TicketReservationWrap";
import MainLayout from "@/components/templates/MainLayout copy/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Header />
      <main>
        <Container>
          <HeroSection />
        </Container>
        <TicketReservationWrap />
        <TicketForm />
      </main>
      <Footer />
    </MainLayout>
  );
}
