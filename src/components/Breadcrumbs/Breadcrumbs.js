import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(u => u);

    return (
        <div className="container">
            <Link to="/">Home</Link>

            {pathnames.map((value, index) => {
                const isLast = index === pathnames.length - 1;

                return isLast ? (
					<span key={location.pathname}> | {value} </span>
				) : (
					<>
						<span> | </span>
						<Link key={location.pathname} to={location.pathname}>
							{value}
						</Link>
					</>
				);
            })}
        </div>
    )
}

export default Breadcrumbs;