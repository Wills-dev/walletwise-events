import Container from "@/components/atoms/Container/Container";
import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import MainLayout from "@/components/templates/MainLayout/MainLayout";
import TicketReservationWrap from "@/components/organisms/TicketReservationWrap/TicketReservationWrap";
import TicketForm from "@/components/organisms/TicketForm/TicketForm";

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
