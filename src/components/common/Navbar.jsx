import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section>
      <div className="container">
        <nav class="navbar navbar-expand-lg pt-2">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img
                src="../../../assets/colored-logo3.png"
                alt="..."
                className="img-fluid me-4"
                style={{ width: "6rem", height: "3rem" }}
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse mt-4"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-6 fw-medium ">
                <li class="nav-item me-4 ">
                  <Link
                    href="/services"
                    class="nav-link text-color active font-weight-600"
                  >
                    {" "}
                    Services
                  </Link>
                </li>
                <li class="nav-item me-4 ">
                  <Link href="/about" class="nav-link text-color active">
                    {" "}
                    About
                  </Link>
                </li>
                <li class="nav-item me-4">
                  <Link href="/join" class="nav-link text-color active">
                    Join Our Team
                  </Link>
                </li>
                {/* <li class="nav-item me-4 ">
          <a class="nav-link text-color " href="/reviews">Reviews</a>
        </li> */}
              </ul>

              <h6></h6>
              <button
                class="btn text-white bg-color fw-medium py-2 px-4 shadow-lg"
                type="submit"
              >
                <a href="/getStarted">Get Started</a>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
