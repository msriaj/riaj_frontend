<template>
  <div class="body_wrapper">
    <div class="nav-bar">
      <div class="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="44"
          viewBox="0 0 55 44"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.80799 34.3752C7.76794 40.1852 14.4385 44 22 44H23.5925L23.2905 42.8341C22.4849 39.6692 20.9025 37.4825 18.5432 36.2741C16.1839 35.0082 12.6737 34.3752 8.01272 34.3752H3.80799ZM33.217 43.999C45.2673 43.8825 55 34.0778 55 22C55 9.84974 45.1503 0 33 0L27.8765 6.96375e-10C28.5278 0.429241 29.1283 0.896829 29.6778 1.40276C33.3031 4.68274 35.1157 9.22868 35.1157 15.0406C35.1157 19.0111 33.6483 22.4349 30.7136 25.3121C27.8365 28.1317 24.0674 29.858 19.4063 30.491C18.8309 30.6061 18.5432 30.865 18.5432 31.2678C18.5432 31.7857 18.8597 32.0447 19.4926 32.0447C23.3481 32.2173 26.1101 32.9366 27.7789 34.2025C29.5052 35.4685 30.7424 37.1085 31.4905 39.1225L33.217 43.999ZM0.520611 26.7794C0.17974 25.2407 0 23.6413 0 22C0 14.5545 3.69861 7.9729 9.35874 3.99222H13.4506C17.5937 3.99222 20.7298 4.97046 22.8589 6.92694C25.0456 8.82587 26.1389 11.588 26.1389 15.2132C26.1389 17.3423 25.4772 19.2988 24.1537 21.0826C22.8877 22.8089 21.1326 24.19 18.8884 25.2258C16.6442 26.2615 14.1411 26.7794 11.379 26.7794H0.520611Z"
            fill="black"
          />
        </svg>
      </div>
      <div class="nav">
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  .nav {
    ul {
      display: flex;
      li {
        list-style: none;
        margin-right: 1rem;
        a {
          text-decoration: none;
          color: black;
          &::after {
            content: "";
            display: block;
            width: 0;
            height: 2px;
            background-color: black;
            transition: 0.3s;
          }
          &:hover {
            &::after {
              content: "";
              display: block;
              width: 100%;
              height: 2px;
              background-color: black;
              transition: 0.3s;
            }
          }
        }
      }
    }
  }
}
</style>
