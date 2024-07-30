export const Modal = ({country, closeModal}) => {
  const formatLanguages = languages =>   languages.map((lang, index) => (index + 1 === languages.length) ? `${lang[1]}` : `${lang[1]}, `);

  return (
    <div
      onClick={closeModal}
      className={"fixed z-10 top-0 left-0 w-full h-full bg-zinc-800/90 flex justify-center items-center"}>
      <div
        onClick={e => e.stopPropagation()}
        className="min-w-[400px] max-w-[700px] relative rounded p-7 bg-gray-50">
        <button
          onClick={closeModal}
          className={"absolute top-1 right-1 w-6 h-6 flex items-center text-center justify-center text-sm bg-red-700 text-white hover:bg-red-800 transition duration-300 rounded-full"}>&times;
        </button>
        <h2 className="text text-[1.1em] mb-3">
          Here is {country.name.common}'s Informations
        </h2>
        <p className="text-[1em] mb-2">
          <span className={"font-semibold"}>Language(s): </span>
          {formatLanguages(Object.entries(country.languages))}
        </p>
        <p className="text-[1em] mb-2">
          <span className={"font-semibold"}>Capital(s): </span>
          {formatLanguages(Object.entries(country.capital))}
        </p>
        <p className="text-[1em] mb-2">
          <span className={"font-semibold"}>population: </span>
          {country.population.toLocaleString() ?? 'N/A'}
        </p>
      </div>

    </div>
  )
}