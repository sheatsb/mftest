<template>
  <div>
    <h3>Recipient list</h3>

    <ul v-for="item in recipients">
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
import recipients from "~/apollo/queries/fetchRecipient";

export default {
  apollo: {
    recipients: {
      prefetch: false,
      query: recipients
    }
  },
  head: {
    title: "Creative Stimulus"
  }
};
</script>

<style>
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
