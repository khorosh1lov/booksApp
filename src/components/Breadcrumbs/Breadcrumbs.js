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
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return isLast ? (
					<span key={to}> | {value} </span>
				) : (
					<>
						<span> | </span>
						<Link key={to} to={to}>
							{value}
						</Link>
					</>
				);
            })}
        </div>
    )
}

export default Breadcrumbs;