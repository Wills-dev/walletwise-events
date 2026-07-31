import type { Metadata } from "next";

import LegalPage from "@/components/templates/LegalPage/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const sections = [
  {
    title: "1. Information Collected",
    bullets: [
      "Personal details (name, phone number, email)",
      "Payment and transaction data",
      "Event attendance records",
    ],
  },
  {
    title: "2. Purpose of Collection",
    paragraphs: [
      "To process ticket purchases, verify payments, and communicate event updates.",
    ],
  },
  {
    title: "3. Data Sharing",
    paragraphs: [
      "WalletWise may share limited data with event organizers solely for ticket validation and access control. Data is never sold to third parties.",
    ],
  },
  {
    title: "4. Security",
    paragraphs: [
      "All payment and personal data are encrypted and stored securely in compliance with NDPR (Nigeria Data Protection Regulation).",
    ],
  },
  {
    title: "5. User Rights",
    paragraphs: [
      "Users may request correction or deletion of their data by contacting privacy@walletwise.ng.",
    ],
  },
  {
    title: "6. Cookies and Analytics",
    paragraphs: [
      "WalletWise may use cookies to improve event browsing and ticketing performance.",
    ],
  },
  {
    title: "7. Update",
    paragraphs: [
      "This policy may be updated periodically. Users will be notified of significant changes via the App or email.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy for WalletWise Events"
      sections={sections}
    />
  );
}
