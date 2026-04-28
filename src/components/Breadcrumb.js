import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";
import "../styles/breadcrumb.css";

export default function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(x => x);

    // Don't show breadcrumb on home page
    if (location.pathname === "/") {
        return null;
    }

    return (
        <nav aria-label="breadcrumb" className="breadcrumb-wrapper">
            <div className="container-fluid">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">
                            <Home size={14} style={{ marginBottom: '2px' }} />
                            <span>Home</span>
                        </Link>
                    </li>

                    {pathnames.map((value, index) => {
                        const to = "/" + pathnames.slice(0, index + 1).join("/");
                        const isLast = index === pathnames.length - 1;

                        // Skip if value is empty (shouldn't happen with filter)
                        if (!value) return null;

                        const name = value
                            .replace(/-/g, " ")
                            .replace(/\b\w/g, l => l.toUpperCase());

                        return (
                            <li key={to} className={`breadcrumb-item ${isLast ? "active" : ""}`}>
                                {isLast ? (
                                    name
                                ) : (
                                    <Link to={to}>{name}</Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
}
