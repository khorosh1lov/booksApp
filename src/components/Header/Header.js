import './Header.scss';

import { Link, useNavigate } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar';
import { SearchContext } from '../../context';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import { useContext } from 'react';

function Header() {
    const { search, setSearch, setFilters } = useContext(SearchContext);
    const navigate = useNavigate();

    const handleSearch = (newSearch) => {
        setSearch(newSearch);
        setFilters({});
        navigate('/');
    };

    return (
		<>
			<header className="header">
				<div className="container">
					<nav className="navigation">
						<Link to="/">BooksApp</Link>

						<SearchBar setSearch={handleSearch} />

						<Link to="/about">About</Link>

						<ThemeToggler />
					</nav>
				</div>
			</header>

			<div className="breadcrumbs">2131243214</div>
		</>
	);
}

export default Header;