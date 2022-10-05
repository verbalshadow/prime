<script>
    /** @type {import('./$types').PageData} */
    import { brand } from '../stores/Settings.js';
</script>

<div >
  <nav class="container-fluid">
    <ul>
      <li>
        <a href="/" class="secondary"><strong>{brand}</strong></a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="/blog">Blog</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
  </nav>
</div>