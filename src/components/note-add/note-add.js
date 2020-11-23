import React, { useState } from 'react';
import styled from 'styled-components';
import {Input,
        InputGroup,
        InputGroupAddon,
        Button,
        InputGroupText 
} from 'reactstrap';

const NoteBody = styled.div`
    height: 300px;
    background: lightblue;
    padding: 10px;
    margin-top: 20px;
`;

const NoteItemWrapper = styled.div`
    margin-top: 30px;
`;

const NoteItem = () => {
    return(
        <NoteItemWrapper>
        <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Check it out" />
        </InputGroup>
    </NoteItemWrapper>
    )
}

const Note = () => {
    return (
        <div className="col-lg-3 px-md-5">
            <NoteBody>
                <Input className="note-name" placeholder="Add note name"></Input>
                <div className="note-item-adder">
                        <Input placeholder="Add new list item">
                        <InputGroup>
                        <InputGroupAddon addonType="prepend"><Button>Add text</Button></InputGroupAddon>
                        <Input />
                        </InputGroup>
                        </Input>
                </div>
                <NoteItem></NoteItem>
                <div className="note-buttons-group"></div>
            </NoteBody>
        </div>
    )
}

export default Note;