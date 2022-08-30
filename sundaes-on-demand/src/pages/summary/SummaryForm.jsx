import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SummaryForm() {
  const [disable, setDisable] = useState(true);

  return (
    <div>
      <Form>
        <div className="mb-3">
          <Form.Check
            type="checkbox"
            id="default-checkbox"
            label="default-checkbox"
            onClick={(e) => setDisable(!disable)}
          />
          <Button disabled={disable} variant="primary">
            Confirm order
          </Button>{" "}
        </div>
      </Form>
    </div>
  );
}
