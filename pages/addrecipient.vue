
<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <div class="p-5">
    <form
      id="recipient-submissions"
      data-form-type="recipient-form"
      data-fail-msg="Sorry it seems that our server is not responding, sorry for the inconvenience! (Someone has been notified of this issue.)"
      @submit.prevent="handleSubmit(onSubmit)"
      action="/something"
      method="post"
    >
      <fieldset>
        <div class="form-group">
          <label>
            <strong>Name</strong>
          </label>
           <ValidationProvider rules="required" v-slot="{ errors }">
          <input
            id="name"
            class="form-control"
            v-model="name"
          />
          <span class="red">{{ errors[0] }}</span>
           </ValidationProvider>
        </div>
        <div class="form-group">
          <label>
            <strong>Email</strong>
          </label>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <input id="email" class="form-control" type="email" v-model="email" />
            <span class="red">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label>
            <strong>Field // Medium</strong>
            <br />
          </label>
           <ValidationProvider rules="required" v-slot="{ errors }">
          <select
            class="form-control"
            id="select_field_medium"
            v-model="field_medium"
          >
            <option value="visual_art">Visual Art</option>
            <option value="film_tv">Film/TV</option>
            <option value="music">Music</option>
            <option value="photography">Photography</option>
            <option value="dance">Dance</option>
            <option value="design">Design</option>
            <option value="literature_writing">Literature/Writing</option>
            <option value="marketing_advertising">Marketing/Advertising</option>
            <option value="theater">Theater</option>
          </select>
          <span class="red">{{ errors[0] }}</span>
           </ValidationProvider>
        </div>
        <div class="form-group">
          <label>
            <strong>Cash App Username</strong>
          </label>
          <ValidationProvider  rules=""  v-slot="{ errors }">
          <input
            class="form-control"
            placeholder="Without the $ sign, please"
            id="cashapp_input"
            v-model="cashapp_name"
          />
          <span class="red">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label>
            <strong>PayPal Email</strong>
          </label>
           <ValidationProvider  rules="email"  v-slot="{ errors }">
          <input
            class="form-control"
            placeholder="cashmachine@dram.fm"
            id="paypal_input"
            v-model="paypal_email"
          />
          <span class="red">{{ errors[0] }}</span>
           </ValidationProvider>
        </div>
        <div class="form-group">
          <label>
            <strong>Venmo Username</strong>
          </label>
           <ValidationProvider  rules=""  v-slot="{ errors }">
          <input
            class="form-control"
            placeholder="Just the username, without the @ please."
            id="venmo_input"
            v-model="venmo_name"
          />
          <span class="red">{{ errors[0] }}</span>
           </ValidationProvider>
        </div>
        <div class="form-group">
          <label>
            <strong>How has COVID-19 impacted you? What would any donation cover?</strong>
          </label>
           <ValidationProvider  rules="required"  v-slot="{ errors }">
          <textarea
            class="form-control"
            rows="4"
            cols="50"
            id="impact_text"
            v-model="impact_statement"
          ></textarea>
          <span class="red">{{ errors[0] }}</span>
           </ValidationProvider>
        </div>
        <div class="form-check">
           <ValidationProvider  :rules="{ required: { allowFalse: false } }"  v-slot="{ errors }">
          <input
            class="form-check-input"
            type="checkbox"
            id="optin"
            
            name="optin"
          />
          
          <label class="form-check-label">I agree to the terms and privacy policy.</label>  <span class="red">{{ errors[0] }}</span>
           </ValidationProvider>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            name="optin"
            id="email_accept"
            v-model="email_permission"
          />
          <label
            class="form-check-label"
          >Sign me up for email updates from us or partners about funding opportunities! (You will recieve email attached to this service regardless of checking this box.)</label>
        </div>
        <!-- <button class="btn btn-d btn-lg btn-block" type="submit">
						Submit
        </button>-->
      </fieldset>
      <button type="submit">Submit</button>
    </form>
    </div>
  </ValidationObserver>
</template>

<style scoped>
.red{
  color: red !important;
}
</style>

<script>
import { ValidationProvider, ValidationObserver, setInteractionMode, extend } from "vee-validate";
import * as rules from 'vee-validate/dist/rules';
setInteractionMode('eager');

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

extend('email', {
  message: 'This field must have a properly formatted email address.'
});
extend('required', {
  message: 'This field is required!'
});
export default {
  name: "addRecipient",
  components: {
    ValidationProvider, 
    ValidationObserver
  },
  data() {
    return {
      name: "",
      email: "",
      field_medium: "",
      venmo_name: "",
      cashapp_name: "",
      paypal_email: "",
      impact_statement: "",
      accepts_terms: "",
      email_permission: ""
    };
  },
  methods: {
    onSubmit() {
      createRecipient(
      
      );
      alert(
        "Got it! We have your submission. It takes about 30-45 minutes max for people to see you on the site."
      );
    }
  }
};
</script>