<template>
  <div>
    <h3>Recipient list</h3>

    <ul v-for="item in random_recipient">
      <li>
        <p>
          {{item.name}}
          <br />
          {{item.paypal_email}}
          <br />
          {{item.venmo_name}}
          <br />
          {{item.impact_statement}}
        </p>
        <br><br>
      </li>
    </ul>
  </div>
</template>

<script>
import random_recipient from "~/apollo/queries/fetchRecipient";

export default {
  apollo: {
    random_recipient: {
      prefetch: false,
      query: random_recipient
    }
  },
  head: {
    title: "Creative Stimulus"
  }
};
</script>

<style>
body{
  margin: 2.25rem;
}
h3{
  margin-bottom: 1em;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}
a {
  text-decoration: none;
  color: #3498db;
}
a:hover {
  border-bottom: 1px solid;
}
</style>
