import { useRouter } from 'next/router'

export default function ErrorPage() {
  const router = useRouter()
  const { error } = router.query

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Authentication Error</h1>
      <p className="text-red-500">{error}</p>
    </div>
  )
} 