import PastEventInfoWrapper from "@/components/organisms/PastEventInfoWrapper/PastEventInfoWrapper";

const PastEventInfoPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return <PastEventInfoWrapper eventId={id} />;
};

export default PastEventInfoPage;
