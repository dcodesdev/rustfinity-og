import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const key = (await params).slug;
  const siteUrl = process.env.NODE_ENV == "development" ? "http://localhost:3000/" : 'https://rustfinity-og.vercel.app/';
  const imageUrl = siteUrl + 'og-images/advent-of-rust?key=' + key;

  // Return dynamic metadata for the page
  return {
    title: key, // Dynamically set the page title
    description: key, // Dynamically set the description
    openGraph: {
      title: key, // Dynamic OG title
      description: key, // Dynamic OG description
      url: imageUrl, // Dynamic OG URL
      images: [
        {
          url: imageUrl, // Dynamic OG image
          width: 1200,
          height: 630,
          alt: key,
        },
      ],
    },
    twitter: {
      card: imageUrl,
      title: key, // Dynamic Twitter title
      description: key, // Dynamic Twitter description
      images: [imageUrl], // Dynamic Twitter image
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const key = (await params).slug;
  const siteUrl = process.env.NODE_ENV == "development" ? "http://localhost:3000/" : 'https://rustfinity-og.vercel.app/';
  const imageUrl = siteUrl + 'og-images/advent-of-rust?key=' + key;
  //const imageUrl = '/og-images/advent-of-rust?key=' + key;

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src={imageUrl}
            alt="Next.js logo"
            width={1200}
            height={630}
          />
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2"> the slug is {key}.  </li>
            <li> the full url is {imageUrl} .</li>
          </ol>

        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}
