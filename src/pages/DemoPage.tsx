import { Link } from 'react-router'

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-background p-8 text-foreground">
      <h1 className="text-2xl font-semibold">Decision Log Demo</h1>
      <p className="mt-2 text-muted-foreground">Demo page placeholder.</p>
      <Link className="mt-4 inline-block underline underline-offset-4" to="/">
        Back to product
      </Link>
    </main>
  )
}
