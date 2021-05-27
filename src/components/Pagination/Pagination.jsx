import { Link } from "react-router-dom";
import "./Pagination.css";
export default function Pagination({ totalPages, location, currentPage }) {
  return (
    <div className="pages-pag">
      <nav>
        <ul className="pagination justify-content-center">
          {currentPage > 1 && (
            <li className="page-item">
              <Link
                to={location.pathname}
                className="page-link"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">First</span>
              </Link>
            </li>
          )}
          {pageItems(currentPage, totalPages, location)}
          {currentPage < totalPages && (
            <li className="page-item">
              <Link
                to={`${location.pathname}?page=${totalPages}`}
                className="page-link"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

function pageItems(currentPage, totalPages, location) {
  let itemPages = [];
  const active = "active";
  let difference = totalPages - currentPage;
  if (currentPage == 1) {
    for (let index = 0; index < 3 && index < difference + 1; index++) {
      itemPages.push(
        <li
          key={currentPage + index}
          className={`page-item ${
            currentPage === currentPage + index && active
          }`} // sets active if current page
        >
          <Link
            to={pathUrl(location, currentPage, index)}
            className="page-link"
          >
            {currentPage + index}
          </Link>
        </li>
      );
    }
  } else {
    for (let index = 0; index < 5 && index < difference + 1; index++) {
      if (index == 0) {
        itemPages.push(
          <li key={currentPage - 1} className="page-item">
            <Link
              to={
                currentPage - 1 === 1
                  ? location.pathname
                  : location.pathname + "?page=" + (currentPage - 1)
              }
              className="page-link"
            >
              previous
            </Link>
          </li>
        );
      } else {
        itemPages.push(
          <li
            key={currentPage + index - 1}
            className={`page-item ${
              currentPage === currentPage + index - 1 && active
            }`} // sets active if current page
          >
            <Link
              to={pathUrl(location, currentPage, index - 1)}
              className="page-link"
            >
              {currentPage + index - 1}
            </Link>
          </li>
        );
      }
      itemPages.push();
    }
  }
  return itemPages;
}

function pathUrl(location, currentPage, index) {
  if (currentPage + index === 1) {
    return location.pathname;
  } else {
    return location.pathname + "?page=" + (currentPage + index);
  }
}
