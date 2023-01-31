import React from "react";

function Footer() {
  return (
    <footer class="text-zinc-50 body-font">
      <div class="bg-red-600">
        <div class="container px-5 py-1 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span class="ml-3 text-xl text-zinc-50 bg-red-900 px-5 py-1 rounded-lg">Info Mortys</span>
          </a>
          <p class="text-sm text-zinc-50 sm:ml-6 sm:mt-0 mt-4">
            © 2023 Info Mortys —
            <a
              href="https://www.instagram.com/becci.ale/"
              rel="noopener noreferrer"
              class="text-zinc-50 ml-1"
              target="_blank"
            >
              @Becci.ale
            </a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="https://www.instagram.com/becci.ale/" class="ml-3 text-zinc-50">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/alex-becci-gatica-82551a22b/" class="ml-3 text-zinc-50">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
