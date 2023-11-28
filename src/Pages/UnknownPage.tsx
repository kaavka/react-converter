import { Link } from "react-router-dom";

export function UnknownPage() {
  return (
    <>
      <h1>Unknown page</h1>
      <Link to={'/'} replace>Come back</Link>
    </>
  )
}
