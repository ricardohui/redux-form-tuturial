import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form, Input } from "semantic-ui-react";
const renderTextInput = field => {
  return (
    <div className="form-group">
      <label>{field.label}</label>
      <Input type="text" {...field.input} placeholder={field.label} />
    </div>
  );
};
const Component = props => (
  <div>
    {" "}
    <Form>
      <Field name="lastName" label="Last Name" component={renderTextInput} />
      <Button primary>Submit</Button><Button>Cancel</Button>
    </Form>
  </div>
);

export default reduxForm({
  form: "appform" //unique string for state
})(Component);
