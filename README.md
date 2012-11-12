# jQuery Table of Contents

## About

This plugin renders a table of contents for a given section of the document.

## Example

See `example.html`.

## Usage

```html
<script>
  
  $(document).ready(function() {

    $("#articles").toc({
      element: "#table-of-contents",
      divider: "article"
    });

  });

</script>

<aside id="table-of-contents">

</aside>

<section id="articles">
  <article data-title="Why we build">
    <h1>Why we build</h1>

    <p>
      ...
    </p>
  </article>

  <article data-title="When we build">
    <h1>When we build</h1>

    <p>
      ...
    </p>
  </article>

  <article data-title="How we build">
    <h1>How we build</h1>

    <p>
      ...
    </p>
  </article>
</section>
```

## Requirements

* jQuery 1.8
* jQuery Selection plugin
