import { Suspense } from "react";

import MyPlanContent from "@/components/my-plan/MyPlanContent";

export default function MyPlanPage() {
  return (
    <Suspense>
      <MyPlanContent />
    </Suspense>
  );
}
