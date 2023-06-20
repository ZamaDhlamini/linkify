import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { handleImageLoad } from '../ImageLoad';
import styles from './KnowlegdeBaseHome.module.css';
import React from 'react';
import Card from '../KnowledgeCard';

type Section = {
  fields: {
    kb_section_name: string;
    kb_section_description: string;
  };
  slug: string;
};

type PageData = {
  fields: {
    kb_home_image: string;
    kb_home_hero_title: string;
    kb_home_hero_subtitle: string;
    kb_home_hero_text: string;
    kb_home_sections: Section[];
  };
};

type SearchResultProps = {
  result: unknown; // Replace with the appropriate type for search result
};


const SearchResult = ({ result }: SearchResultProps) => {
  // Implement the component for displaying search results
  return <div>Search Result Component</div>;
};

const Home = ({ pageData }: { pageData: PageData }) => {
  const [searchText, setSearchText] = React.useState('');
  const [searchResult, setSearchResult] = React.useState<unknown | null>(null);

  const router = useRouter();

  const handleSearch = async () => {
    // Implement the search functionality
  };

  return (
    <div>
      <Head>
        <title>ButterCMS Knowledge Base</title>
      </Head>

      <main>
        <div className={styles.container}>
          <div>
            <Image
                          layout="fixed"
                          width={200}
                          loader={handleImageLoad}
                          height={150}
                          className="rounded-3xl"
                          src={pageData.fields.kb_home_image} alt={''}            />
            <h1 className="mb-3 text-4xl font-bold">{pageData.fields.kb_home_hero_title}</h1>
            <h1 className="mb-3 text-2xl font-bold">{pageData.fields.kb_home_hero_subtitle}</h1>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
              className="flex my-8"
            >
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="knowledge-base-query"
                type="text"
                placeholder="Search through our knowledge base"
              />

              <button
                disabled={searchText.length < 2}
                onClick={() => handleSearch()}
                className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Search
              </button>

              {searchResult && (
                <button
                  onClick={() => {
                    setSearchResult(null);
                    setSearchText('');
                  }}
                  className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Cancel
                </button>
              )}
            </form>
          </div>
        </div>

        <div className="bg-gray-100 h-full">
          <br />
          <br />

          {searchResult ? (
            <SearchResult result={searchResult} />
          ) : (
            <div>
              <div className="flex justify-center mb-10">
                <p className="max-w-3xl text-xl text-center hover:text-underline">
                  {pageData.fields.kb_home_hero_text}
                </p>
              </div>
              <ul className="mt-6 flex flex-wrap items-center justify-around sm:w-full">
                {pageData.fields.kb_home_sections.map(({ fields, slug }, index) => (
                  <li key={index}>
                    <Card
                      name={fields.kb_section_name}
                      slug={slug}
                      description={fields.kb_section_description}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
