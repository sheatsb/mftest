const Query = {
  greeting: () => "Hello",
  getRandom: () => 
  
};


const Mutation = {
  signUp: (root, args, context, info) => {
    const { email, firstName, password } = args.input;

    const emailExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isValidEmail = emailExpression.test(String(email).toLowerCase());
    if (!isValidEmail) throw new Error("That doesn't look like an email. Are you sure?");

    return "success";
  },
};
module.exports = { Query, Mutation };
