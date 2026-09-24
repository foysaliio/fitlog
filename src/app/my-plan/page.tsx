import MyPlanContent from "@/components/my-plan/MyPlanContent";

interface MyPlanPageProps {
  searchParams: Promise<{
    tab?: string;
  }>;
}

export default async function MyPlanPage({ searchParams }: MyPlanPageProps) {
  const { tab } = await searchParams;

  const initialTab = tab === "saved" ? "saved" : "plan";

  return <MyPlanContent initialTab={initialTab} />;
}
