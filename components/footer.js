export default function Footer() {
  return (
    <footer className="bg-green-700">
      <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <li>
          Created by{" "}
          <a
            href="http://47.103.74.217/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal"
          >
            付祖贤-fuzuxian
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
