<script>
    /** @type {import('./$types').PageData} */
    import { brand } from '../stores/Settings.js';
</script>

<div class="hero" data-theme="dark">
    <nav class="container-fluid">
      <ul>
        <li>
            <a href="/" class="contrast"><strong>{brand}</strong></a>
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
  </div><!-- ./ Hero -->