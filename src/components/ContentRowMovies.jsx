// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react';

function ContentRowMovies() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/videogames');

        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }

        const data = await response.json();

        if (isMounted) {
          setTotal(data.products.length);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Games
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {total}
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-award fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Users
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {total}
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-user fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentRowMovies;
