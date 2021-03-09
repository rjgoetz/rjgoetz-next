import Image from 'next/image';
import Highlight from '../components/Highlight';

export default function Home() {
  return (
    <div>
      <main>
        <div className="container">
          <div className="sm:grid sm:grid-cols-6 sm:gap-6">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="my-12">
                <Image
                  src="/gtz-logo.png"
                  alt="RJ logo"
                  width={100}
                  height={100}
                ></Image>
              </div>
            </div>

            <div className="sm:col-span-4 lg:col-span-5">
              <header className="my-12">
                <h1 className="font-bold text-lg">
                  <span className="block">R.J. Goetz</span>web developer
                  <span className="block">minneapolis, mn</span>
                </h1>
                <p>
                  <a href="https://github.com/rjgoetz" target="_blank">
                    github
                  </a>
                  {' | '}
                  <a
                    href="https://linkedin.com/in/robertjamesgoetz"
                    target="_blank"
                  >
                    linkedin
                  </a>
                  {' | '}
                  <a href="mailto:rj@rjgoetz.com" target="_blank">
                    email
                  </a>
                </p>
              </header>

              <Highlight headline="technologies" width="36"></Highlight>
              <ul className="mb-12">
                <li>html / css</li>
                <li>javascript</li>
                <li>react</li>
                <li>gatsby</li>
                <li>next</li>
                <li>express</li>
                <li>mongo db</li>
              </ul>

              <Highlight headline="projects" width="24"></Highlight>
              <ul className="mb-12">
                <li>
                  <a href="https://cetaceasound.com" target="_blank">
                    cetaceasound.com
                  </a>
                </li>
                <li>
                  <a href="https://ahlbergforcouncil.org" target="_blank">
                    ahlbergforcouncil.com
                  </a>
                </li>
                <li>
                  <a href="https://marionzoological.com" target="blank">
                    marionzoological.com
                  </a>
                </li>
                <li>
                  <a href="https://adasiocorp.com" target="blank">
                    adasiocorp.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
