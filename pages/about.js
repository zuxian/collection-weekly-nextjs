import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
      <div>
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-bold">What is Tailwind?</h2>

          <p>
            Tailwind CSS is a highly customizable, low-level CSS framework that
            gives you all of the building blocks you need to build bespoke
            designs without any annoying opinionated styles you have to fight to
            override.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">What is Next.js?</h2>
          <p>
            Next.js is a minimalistic framework for creating server-rendered
            React applications.
          </p>
        </section>
      </div>

      <div className="flex flex-col items-center justify-center space-y-12">
        <Image
          src="/team-of-critters.svg"
          alt="Four one-eyed aliens playing"
          width={576}
          height={429.734}
          priority
        />
        <h2 className="p-3 font-bold bg-yellow-300 md:text-2xl">
          Hi! Welcome to your first Next.js site.
        </h2>
      </div>

      <Image
        alt="A one-eyed alien holding a broken cable connected between a server and a desktop computer"
        src="/critter.svg"
        width={476}
        height={297.17}
      />
    </div>
  );
}
