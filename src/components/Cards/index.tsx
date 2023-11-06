import React, { useEffect, useState } from 'react';
import CharacterCard from '../Card';
import { Character, CharacterResponse } from '../../Types/api';
import { api } from '../../API';
import { useSearchParams } from 'react-router-dom';
import { keyPrevQuery, defPage } from '../../Types/constants';
import { getPageLimit } from '../../Utils';
import Pagination from '../Pagination';
import styles from './Cards.module.css';

export default function Cards(): JSX.Element {
  const [searchParams] = useSearchParams();
  const [charactersResponse, setCharactersResponse] =
    useState<CharacterResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(defPage);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>(
    localStorage.getItem(keyPrevQuery) ?? ''
  );

  useEffect(() => {
    const limitParam = +(searchParams.get('limit') ?? defPage);
    limit === limitParam || setLimit(limitParam);
    const pageParam = +(searchParams.get('page') ?? 1);
    page === pageParam || setPage(pageParam);
    const queryParam = searchParams.get('query') ?? '';
    query === queryParam || setQuery(queryParam);
  }, [limit, page, query, searchParams]);

  useEffect(() => {
    async function update(): Promise<void> {
      setIsLoading(true);
      const response = await api.getCharacters({
        name: query,
        limit: getPageLimit(limit),
        page: page,
      });
      setCharactersResponse(response);
      setIsLoading(false);
    }

    update();
  }, [limit, page, query]);

  return (
    <div className={styles.list}>
      {isLoading ? (
        <div>
          <h3>Loading...</h3>
        </div>
      ) : charactersResponse?.results ? (
        <>
          <Pagination
            limit={limit}
            count={charactersResponse.info.count}
            currentPage={page}
          />
          <div className={styles.cards}>
            {charactersResponse.results.map((char: Character) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>
        </>
      ) : (
        <h3>No Results</h3>
      )}
    </div>
  );
}
