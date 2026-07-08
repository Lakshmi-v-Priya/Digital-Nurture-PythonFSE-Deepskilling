import { Link, Outlet } from "react-router-dom";

function Dashboard() {

    return (

        <div style={{ padding: "20px" }}>

            <h2>Student Dashboard</h2>

            <nav>

                <Link to="">Home</Link> |{" "}
                <Link to="courses">Courses</Link>

            </nav>

            <hr />

            <Outlet />

        </div>

    );

}

export default Dashboard;