import Link from "next/link";

// CSS Layout = Define the Background of the entire parent Nav element. > Within that the container is defined >
const Header = () => {
  return (
    <>
      <nav class="bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-center h-32">
            <ul className="">
              <li className="text-4xl font-black bg-blue-500 rounded-md p-2">
                <Link href="/">Final Fantasy XIV Profile Search</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
