import React, { useContext } from "react";

import { SearchContext } from "../../context";

const languages = [
	{ code: 'en', label: 'English' },
	{ code: 'ru', label: 'Russian' },
	{ code: 'fr', label: 'French' },
	{ code: 'de', label: 'German' },
];

function FilterBar() {
    const { filters, setFilters } = useContext(SearchContext);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;

        if (!value) {
            alert('Please select a value');
            return;
        }

        if (name === 'langRestrict' && !languages.some((lang) => lang.code === value)) {
			alert('Selected language is not supported.');
			return;
		}

        setFilters({
            ...filters,
            [name]: value,
        });
    }

    return (
        <div className="filter-bar">
            <label>
                <select name="langRestrict" value={filters.langRestrict || ''} onChange={handleFilterChange}>
                    <option value="">Select a language</option>
                    {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                            {lang.label}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    )
}

export default FilterBar;
