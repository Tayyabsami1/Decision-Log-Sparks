import { Link } from 'react-router'

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-background p-8 text-foreground">
      <h1 className="text-2xl font-semibold">Decision Log</h1>
      <p className="mt-2 text-muted-foreground">Product page placeholder.</p>
      <Link className="mt-4 inline-block underline underline-offset-4" to="/demo">
        Try Demo
      </Link>
    </main>
  )
}
