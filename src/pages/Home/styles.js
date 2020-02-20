import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 20px;
`;


export const Top = styled.div`
    display: block;
    border-bottom: 1px solid rgba(242, 244, 250, 0.5);
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-right: 12px;
    padding-left: 12px;
    width: 100%;
    max-width: 95%;
    margin-right: auto;
    margin-left: auto;
`;

export const Title = styled.strong`
    font-size: 2em;
    color: #fff;
    font-weight: bold;
    letter-spacing: -.02em;    
`;

export const First = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 1.5rem;
    
    padding-right: 12px;
    padding-left: 12px;
    width: 100%;
    max-width: 95%;
    margin: 10px auto 10px auto;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        width: 300px;
        height: 100px;
        background: rgba(242, 244, 250, 0.5);
        margin-bottom: 1.5rem;
        border-radius: 4px;
        align-items: center;
    }
`;
