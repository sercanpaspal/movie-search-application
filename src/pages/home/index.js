import React, { useEffect, useState } from 'react'
import { useMovieList } from '../../hooks'
import SearchForm from '../../components/search-form'
import MovieList from '../../components/movie-list'
import Pagination from '../../components/pagination'
import ErrorMessage from '../../components/error-message'
import LoadingContent from '../../components/loading-content'

const HomePage = () => {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [result, loading] = useMovieList(query, page)

  useEffect(() => setPage(1), [query])

  useEffect(() => window.scrollTo(0, 0), [page])

  return (
    <>
      <SearchForm query={query} onChangeQuery={setQuery} />

      {loading && <LoadingContent />}

      {result?.Response === 'False' && <ErrorMessage message={result?.Error} />}

      {result?.Response === 'True' && (
        <>
          <MovieList movies={result.Search} />

          <Pagination
            currentPage={page}
            totalPage={Math.ceil(result?.totalResults / 10)}
            onChangePage={setPage}
          />
        </>
      )}
    </>
  )
}

export default HomePage
