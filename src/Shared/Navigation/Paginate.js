import React from "react";
import { NavLink } from "react-router-dom";

import "./Paginate.css"

const Paginate = ({ pages, activeClass, pageNum, isAdmin = false, keyword = "" }) => {
  return (
      <div className="paginateContainer">
    {pages > 1 && (
        [...Array(pages).keys()].map((x) => {
          return (
              <NavLink
                activeClassName={activeClass}
                key={x + 1}
                className="paginate"
                to={!isAdmin ? keyword
                    ? `/search/${keyword}/page/${x + 1}`
                    : `/page/${x + 1}`: `/admin/productslist/${x + 1}`
                }
              >
                {x + 1}
              </NavLink>
          );
        })
    )}
    </div>
  );
};

export default Paginate;
