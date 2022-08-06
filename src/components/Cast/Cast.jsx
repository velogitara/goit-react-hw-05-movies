import MovieAPI from 'services/API';
import { useEffect, useState, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { CastLink, Thumb, Btn } from './Cast.styled';

export default function Cast() {
  const location = useLocation();
  const { pathname } = location;
  const { movieId } = useParams();

  const [dataCut, setDataCut] = useState([]);

  const dataEl = useRef([]);
  // console.log(dataEl);

  useEffect(() => {
    if (dataEl.current.length) {
      return;
    }
    MovieAPI.api(pathname, movieId).then(res => {
      dataEl.current = res.data.cast;

      setDataCut(
        dataEl.current.length > 20
          ? dataEl.current.slice(0, 20)
          : dataEl.current
      );
      // console.log('сработал fetch');
    });
  }, [movieId, pathname]);

  const handleClick = () => {
    setDataCut(dataEl.current);
  };

  return (
    <>
      <CastLink>
        {dataEl.current.length !== 0 ? (
          dataCut.map(i => (
            <li key={i.id}>
              <Thumb>
                <img
                  src={
                    i.profile_path
                      ? 'https://www.themoviedb.org/t/p/w200/' + i.profile_path
                      : 'https://placehold.jp/aaaaac/ffffff/200x300.png?text=No%20Image'
                  }
                  alt=""
                />
                <h3>{i.name}</h3>
                <p>Character: {i.character}</p>
              </Thumb>
            </li>
          ))
        ) : (
          <li>
            <p> no cast here</p>
          </li>
        )}
      </CastLink>
      {dataEl.current.length > dataCut.length && (
        <Btn type="button" onClick={handleClick}>
          Load All
        </Btn>
      )}
    </>
  );
}
