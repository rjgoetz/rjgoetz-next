import Link from 'next/link';

export default function fourOhFour() {
  return (
    <div>
      <main>
        <div className="container h-screen">
          <div className="flex justify-center items-center h-full">
            <h1 className="text-2xl font-bold inline-block">
              <Link href="/">
                <a>
                  404{' '}
                  <span className="font-normal">| Whoops... nobody home.</span>
                </a>
              </Link>
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
