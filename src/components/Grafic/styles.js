import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-top: 60px;
    background: #fff;
    height: 600px;
    width: 900px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

export const SearchBar = styled.input`
    width: 200px;
    height: 40px;
    background: rgba(241, 243, 250, 0.9);
    border-radius: 4px;
    color: #666666;
    margin: 8px 0;
    box-sizing: border-box;
    padding: 10px;
    
    ::placeholder {
        color: #666666;
    }
`;
