export default function Loading() {
    return (
      <main>
        <div className="w-screen h-screen flex items-center justify-center">
          <span className="loading loading-ring loading-lg"></span>
          <div className="animate-pulse">LOADING...</div>
        </div>
      </main>
    )
  }
