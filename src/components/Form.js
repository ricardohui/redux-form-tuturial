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
      <h1>
        Properties<Button>Add Property</Button>
      </h1>
      <h2>
        Property #1<Button>Remove This Property</Button>
      </h2>
      <Field
        name="propertyAddress"
        label="Property Address"
        component={renderTextInput}
      />
      <h3>
        Owners<Button>Add Owner</Button>
      </h3>
      <div>
        <h4>
          Owner #1<Button>Remove This Owner</Button>
        </h4>
        <Field
          name="ownerName"
          label="owner Name"
          component={renderTextInput}
        />
      </div>
      <Button primary>Save</Button>
      <Button>Cancel</Button>
    </Form>
  </div>
);

export default reduxForm({
  form: "appform" //unique string for state
})(Component);
