import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const LegalPage = ({
  title,
  sections,
}: {
  title: string;
  sections: LegalSection[];
}) => {
  return (
    <div className="min-h-screen bg-white text-[#262626]">
      <header className="h-18 border-b border-[#F2F2F2]">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 sm:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="WalletWise"
              width={18}
              height={18}
            />
            <span className="font-semibold text-[#5A27CC]">
              WalletWise Events
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-[#262626] transition-colors hover:text-[#5A27CC]"
          >
            <ArrowLeft aria-hidden="true" size={15} strokeWidth={1.5} />
            <span className="hidden sm:inline">Back home</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 pb-16 pt-7 sm:px-8 sm:pb-24 sm:pt-10">
        <div className="space-y-2">
          <h1 className="max-w-150 text-2xl font-bold leading-tight sm:text-[40px]">
            {title}
          </h1>
          <p className="text-xs text-[#737373]">Updated: July 2026</p>
        </div>

        <div className="mt-9 space-y-6 text-sm leading-5 sm:mt-10">
          {sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="font-semibold">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul className="list-disc pl-4">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>

      <footer className="px-4 pb-10 text-center text-xs sm:pb-16">
        © 2026 WalletWise. All rights Reserved
      </footer>
    </div>
  );
};

export default LegalPage;
