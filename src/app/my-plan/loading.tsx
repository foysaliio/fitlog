const MyPlanRouteLoading = () => {
  return (
    <main className="min-h-screen bg-fit-bg">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-12">
        <div>
          <div className="h-9 w-32 animate-pulse rounded-md bg-fit-surface-alt" />

          <div className="mt-3 h-4 w-72 max-w-full animate-pulse rounded bg-fit-surface-alt" />
        </div>

        <div className="mt-6 flex min-h-80 animate-pulse items-center justify-center rounded-2xl border border-fit-border bg-[#13161d]">
          <span className="loading loading-spinner loading-lg text-fit-accent-alt" />
        </div>
      </div>
    </main>
  );
};

export default MyPlanRouteLoading;
