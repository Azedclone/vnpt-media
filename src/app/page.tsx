"use client";
import Image from "next/image";
import "./home.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import { use, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Place, Chef } from "@/models";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {
  const settings = {
    slidesPerRow: 10,
    autoplay: true,
    arrow: false,
  };
  const slider = useRef<Slider>(null);

  // State chứa các places fetch từ API
  const [places, setPlaces] = useState<Place[]>();
  const [chefs, setChefs] = useState<Chef[]>();

  useEffect(() => {
    axios
      .get("https://test.culinarywonderland.com/api/portal/public/chef/filter")
      .then((res) => setChefs(res.data.responseData));
  }, []);

  useEffect(() => {
    const params = {
      pageSize: 4,
      pageIndex: 0,
      random: true,
      pageName: "HOME_CORE",
    };
    axios
      .post(
        "https://test.culinarywonderland.com/api/portal/public/category/ACC_HOME_CORE_PLACE/fetch",
        params
      )
      .then((res) => setPlaces(res.data.responseData));
  }, []);

  return (
    <main>
      <header>
        <div className="flex justify-between items-center mb-5">
          <Link href="/" className="header-title basis-1 leading-8">
            culinary wonderland
          </Link>

          <form className="header-search relative">
            <input type="text" placeholder="Search Chefs, Recipes and More" />
            <button type="submit">
              <i className="bi bi-search absolute search-icon"></i>
            </button>
          </form>

          <div className="header-links flex justify-between items-center">
            <Link href="/" className="flex justify-between items-center me-8">
              <p className="link-text">Login</p>
              <i className="bi bi-person link-icon"></i>
            </Link>
            <Link href="/" className="link-text">
              Sign up for free
            </Link>
          </div>
        </div>
        <nav className="nav-links">
          <ul className="flex justify-between w-1/3">
            <Link href="/">
              <li className="nav-items">chefs</li>
            </Link>
            <Link href="/">
              <li className="nav-items">recipes</li>
            </Link>
            <Link href="/">
              <li className="nav-items">stories</li>
            </Link>
            <Link href="/">
              <li className="nav-items">places</li>
            </Link>
            <Link href="/">
              <li className="nav-items">videos</li>
            </Link>
          </ul>
        </nav>
      </header>

      <section id="chefs">
        {chefs && (
          <>
            <Slider
              ref={slider}
              className="grid grid-cols-10 gap-5 container"
              {...settings}
            >
              {chefs.map((chef) => (
                <Link key={chef.userId} href="/" className="chef">
                  <Image
                    className="chef-avt rounded-full"
                    src={chef.avatar?.cdnOrigin!}
                    alt="Avatar_Chef"
                    width={150}
                    height={75}
                  ></Image>
                  <p className="chef-name">{chef.displayName}</p>
                </Link>
              ))}
            </Slider>
            <button
              className="btn-prev"
              onClick={() => slider?.current?.slickPrev()}
            >
              {"<"}
            </button>
            <button
              className="btn-next"
              onClick={() => slider?.current?.slickNext()}
            >
              {">"}
            </button>
          </>
        )}
      </section>
      <div className="container">
        <div className="places">
          <p className="section-title">Great places to eat</p>
          {places && (
            <div className="grid grid-cols-4 gap-5">
              {places.map((place) => (
                <Link key={place.id} href="/">
                  {/* <p>{place?.thumbnail?.cdnOrigin!}</p> */}
                  <Image
                    className="place-img"
                    src={place?.thumbnail?.cdnOrigin!}
                    alt={"thumbnail"}
                    width={place?.thumbnail?.width}
                    height={200}
                  ></Image>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
