import React from 'react';
import {Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText 
} from 'reactstrap';
import styled from 'styled-components';

const NoteItemWrapper = styled.div`
    margin-top: 30px;
`;

const NoteItem = () => {
    return(
        <NoteItemWrapper>
        <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for following text input" className=""/>
                </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Check it out" value=""/>
        </InputGroup>
    </NoteItemWrapper>
    )
}

export default NoteItem;