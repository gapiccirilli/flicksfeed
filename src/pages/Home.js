import { NavLink } from "react-router-dom";


export default function Home() {
  return (
    <div>
        <h1>This is the homepage</h1>
        <NavLink to="flicksfeed">GO TO SITE</NavLink>
    </div>
  );
}