import type { Metadata } from "next";

import LegalPage from "@/components/templates/LegalPage/LegalPage";

export const metadata: Metadata = {
  title: "Terms and Conditions",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      "By purchasing a ticket or registering for any event through the WalletWise Mobile App or website, you agree to these Terms and Conditions. If you do not agree, please discontinue use immediately.",
    ],
  },
  {
    title: "2. Event Ownership and Management",
    paragraphs: [
      "Events listed on WalletWise are organized by WalletWise Ltd or its verified partners (e.g., Clint Entertainment, Sensei Musik Lab etc and or as stated on the app/tickets). WalletWise acts as a digital ticketing and payment facilitator.",
    ],
  },
  {
    title: "3. Ticket Purchase",
    bullets: [
      "All tickets must be purchased through events.walletwise.ng or the WalletWise App.",
      "Payment confirms your reservation; tickets are non-transferable unless stated otherwise.",
      "Prices are displayed in Nigerian Naira (₦) and include applicable taxes or service fees.",
    ],
  },
  {
    title: "4. Refund and Cancellation",
    bullets: [
      "Tickets are non-refundable except if the event is cancelled or rescheduled by the organizer.",
      "In such cases, WalletWise will process refunds within 7 working days to the original payment method.",
      "WalletWise is not responsible for travel or accommodation costs incurred by attendees.",
    ],
  },
  {
    title: "5. Event Access",
    bullets: [
      "Attendees must present valid digital or printed tickets at the venue.",
      "Entry may be denied for fraudulent, duplicated, or tampered tickets.",
      "WalletWise is not responsible for lost or stolen tickets.",
    ],
  },
  {
    title: "6. Conduct and Safety",
    paragraphs: [
      "Attendees must comply with venue rules and maintain orderly conduct. WalletWise and event organizers reserve the right to remove any attendee for disruptive or unsafe behavior.",
    ],
  },
  {
    title: "7. Liability",
    paragraphs: [
      "WalletWise shall not be liable for injury, loss, or damage arising from attendance at events, except as required by law.",
    ],
  },
  {
    title: "8. Modification of Terms",
    paragraphs: [
      "WalletWise may update these Terms periodically. Continued use of the App or event services constitutes acceptance of the revised Terms.",
    ],
  },
  {
    title: "9. Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of the Federal Republic of Nigeria.",
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms and Conditions for WalletWise Events"
      sections={sections}
    />
  );
}
