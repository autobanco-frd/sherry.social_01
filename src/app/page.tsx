import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800 lg:dark:text-white">
          Haz click en el botón para enviarme un café ☕
        </p>
      </div>

      {/* Hero Section */}
      <div className="relative flex place-items-center mt-20">
        <div className="text-7xl">☕</div>
      </div>

      {/* Description */}
      <div className="mt-8 mb-32 flex flex-col gap-6 text-center lg:max-w-3xl lg:text-left">
        <h1 className="text-4xl font-bold tracking-tight">
          Send Me Coffee ☕
        </h1>
        <p className="text-lg opacity-80">
          Haz click en el botón de abajo para enviarme 0.01 AVAX como propina.
          Funciona directamente desde redes sociales gracias a{" "}
          <a
            href="https://sherrylinks.dev "
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-500"
          >
            Sherry Protocol
          </a>.
        </p>

        {/* Action Button */}
        <div className="mt-8">
          <a
            href="/api/example?amount=0.01"
            className="group rounded-lg border border-transparent px-6 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-2 text-2xl font-semibold">
              Enviar Café (0.01 AVAX){" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                🢂
              </span>
            </h2>
            <p className="m-0 text-sm opacity-60">
              Haz click aquí para enviar 0.01 AVAX a mi contrato Solidity.
            </p>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex w-full border-t border-gray-200 dark:border-gray-800 justify-center items-center h-16">
        <p className="text-sm opacity-60">
          Built with ❤️ using Foundry & Sherry Protocol by FrD-autobanco
        </p>
      </footer>
    </main>
  );
}