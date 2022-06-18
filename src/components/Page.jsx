import React from 'react'
import classNames from "classnames";
function Page({ items }) {
    const [activePage, setActivePage] = React.useState(1);
    const onSelectPage = (page) => {
        setActivePage(page)
    }

    console.log(items)
    return (
        <div className="page-block">
            <div className="page-block__selector">
            <ul>
                {
                    items && items.map((page, index) => (

                        <li  key={page + index}
                            onClick={() => onSelectPage(page)}
                            className={classNames({
                                active: activePage === page,
                                disabled: !items.includes(page)
                            })}>
                            {page}
                        </li>
                    )
                    )
                }
            </ul>
            </div>
        </div>
    )
}

export default Page