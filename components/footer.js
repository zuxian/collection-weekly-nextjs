export default function Footer() {
  return (
    <footer className="bg-green-500 dark:bg-purple-800">
      <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white dark:text-black md:px-6">
        <li>
          Created by{" "}
          <a
            href="http://47.103.74.217/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            ZU XIAN
          </a>
        </li>

        <li>
          <a
            href="https://github.com/zuxian/collection-weekly-nextjs"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
