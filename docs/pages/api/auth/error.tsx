// path: docs/pages/api/auth/error.tsx
import { useRouter } from 'next/router'
import type { NextPage } from 'next'

const ErrorPage: NextPage = () => {
  const router = useRouter()
  const { error } = router.query

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Authentication Error</h1>
      <p className="text-red-500">{error}</p>
    </div>
  )
}

export default ErrorPage