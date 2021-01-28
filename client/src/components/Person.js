import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import Input from "./shared/Input";
import Button from "./shared/Button";
import Modal from "./shared/Modal";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 200px;
  width: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -200px;
`;

const StyledInput = styled(Input)`
  padding: 18.5px 14px;
  border-radius: 1px;
  width: 200px;
  margin-right: 10px;
`;

const getPersonQuery = gql`
  query Person($id: ID!) {
    person(id: $id) {
      facility {
        val3
      }
      exposure {
        val5
      }
    }
  }
`;

const Person = () => {
  const [id, setId] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [modaltext, setModaltext] = useState("");
  const [getPerson, { loading, error, data }] = useLazyQuery(getPersonQuery, {
    variables: { id },
    onCompleted: (data) => {
      if (data) {
        const { person } = data;
        const { val3 } = person.facility;
        const { val5 } = person.exposure;
        if (val5 && val3) {
          setModaltext(parseInt(val5) * parseInt(val3));
        }
      }
    },
  });

  const buttonHandler = () => {
    getPerson();
    setIsVisible(true);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;

  return (
    <StyledDiv>
      <Modal
        isVisible={isVisible}
        text={modaltext}
        closeModal={() => setIsVisible(false)}
      />
      <StyledInput
        name="person-id"
        placeholder="Enter 1 to 10"
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Button
        disable={id < 1 || id > 10}
        label="Click!"
        buttonClick={buttonHandler}
      />
    </StyledDiv>
  );
};

export default Person;
