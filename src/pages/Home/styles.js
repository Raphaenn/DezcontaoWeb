import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px auto auto auto;
    max-width: 1400px;
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
        flex-direction: column;
        width: 300px;
        height: 100px;
        background: rgba(242, 244, 250, 0.2);
        border-radius: 4px;
        justify-content: center;
        align-items: left;
        padding-left: 30px;

        strong {
            font-size: .7375rem;
            color: rgba(242, 244, 250, 1);
        }

        small {
            font-size: 1.5rem;
            color: #fff;
            font-weight: bold;
            margin-top: 2px;
        }
    }
`;

export const Middle = styled.div`
    display: flex;
`;
