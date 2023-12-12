// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react';
import Mandalorian from '../assets/images/mandalorian.jpg';
import ContentRowMovies from './ContentRowMovies';

const metrics = [
  {
    title: 'Hello World',
    borderColor: 'border-left-primary',
    value: 21,
    icon: 'fa-film',
  },
  {
    title: 'Un elixir',
    borderColor: 'border-left-success',
    value: 79,
    icon: 'fa-award',
  },
  {
    title: 'Actors quantity',
    borderColor: 'border-left-warning',
    value: 49,
    icon: 'fa-user',
  },
];

function ContentRowTop() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const genresRes = await fetch(
        'http://localhost:3000/api/videogames/genres/list',
      );

      const genresData = await genresRes.json();

      if (Array.isArray(genresData.data)) {
        setGenres(genresData.data);
      } else {
        console.error('Error al obtener los géneros', genresData);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {/* Content Row Top */}
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Alpaca-Games Dashboard</h1>
        </div>

        {/* Content Row Movies*/}
        <div className="row">
          {metrics.map((metric, index) => (
            <ContentRowMovies
              title={metric.title}
              borderColor={metric.borderColor}
              value={metric.value}
              icon={metric.icon}
              key={index}
            />
          ))}
        </div>
        {/* End movies in Data Base */}

        {/* Content Row Last Movie in Data Base */}
        <div className="row">
          {/* Last Movie in DB */}
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                  Last movie in Data Base
                </h5>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    src={Mandalorian}
                    alt="Star Wars - Mandalorian"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, consequatur explicabo officia inventore libero
                  veritatis iure voluptate reiciendis a magnam, vitae, aperiam
                  voluptatum non corporis quae dolorem culpa citationem ratione
                  aperiam voluptatum non corporis ratione aperiam voluptatum
                  quae dolorem culpa ratione aperiam voluptatum?
                </p>
                <a
                  className="btn btn-danger"
                  target="_blank"
                  rel="nofollow"
                  href="/"
                >
                  View movie detail
                </a>
              </div>
            </div>
          </div>
          {/* End content row last movie in Data Base */}

          {/* Genres in DB */}
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                  Genres in Data Base
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  {genres.map((genre) => (
                    <div className="col-lg-6 mb-4" key={genre.id}>
                      <div className="card bg-dark text-white shadow">
                        <div className="card-body">{genre.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Content Row Top*/}
    </>
  );
}

export default ContentRowTop;
