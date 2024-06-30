<template>
  <div class="body_wrapper">
    <div class="nav-bar">
      <div class="logo">
        <svg
          width="80"
          viewBox="0 0 200 115"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="1" width="24" height="24" fill="#393632" />
          <rect x="51" y="1" width="24" height="24" fill="#393632" />
          <rect x="51" y="45" width="24" height="24" fill="#393632" />
          <rect x="102" y="1" width="24" height="24" fill="#393632" />
          <rect x="102" y="45" width="24" height="24" fill="#393632" />
          <rect x="102" y="89" width="24" height="24" fill="#393632" />
          <path
            d="M168.5 32C165.7 24.4 155 22.8333 150 23V0.499993C185.6 -1.90001 195.167 22.5 195.5 35C195.9 60.6 179.333 71.3333 171 73.5L199.5 114.5H168.5L145 79V56H156C173.2 51.6 171.5 38.1667 168.5 32Z"
            fill="#393632"
          />
        </svg>
      </div>
      <div class="nav">
        <ul>
          <li class="menu_items">
            <a class="link link--leda" to="/what-i-do" data-text="What I Do">
              <span> What I Do </span>
            </a>
          </li>
          <li class="menu_items">
            <a class="link link--leda" to="/about" data-text="About">
              <span> About </span>
            </a>
          </li>
          <li class="menu_items">
            <a class="link link--leda" to="/projects" data-text="Works">
              <span> Works </span>
            </a>
          </li>
          <li class="menu_items">
            <a class="link link--leda" to="/contact" data-text="Connect">
              <span> Connect </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body_wrapper {
  width: 100%;
  position: absolute;
  z-index: 1;
}
.nav-bar {
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  .logo {
    font-size: 1.5rem;
    font-weight: 300;
    position: relative;
    z-index: 2;
  }
  .nav {
    ul {
      display: flex;
      li {
        list-style: none;
        margin-right: 3rem;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
