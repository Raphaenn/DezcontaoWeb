import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    flex: 1;
    align-self: center;
    background: linear-gradient(-90deg, #7159C1, #ab59c1);
    margin: 60px auto;
    width: 1300px;
    height: 780px;
    border-radius: 15px;
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
`;

export const Body = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-width: 500px;
    margin: 10px;
`;

export const Left = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 5px;
    margin: 10px;
    border-radius: 15px;
    background: #fff;

    h1 {
        margin-top: 20px;
        margin-left: 20px;
        color: #25293F;
        font: 22px 'Nunito', sans-serif;
    }
`;

export const TitleLeft = styled.div`
    height: 80px;
`;

export const ListLeft = styled(PerfectScrollbar)`
    max-height: 650px;
`;

export const ListItem = styled.li`
    display: flex;
    height: 80px;
    flex-direction: row;
    padding: 15px;
    border-bottom: 1px solid rgba(235, 235, 235, 0.8);

    &:hover {
        background: ${darken(0.03, 'rgba(235, 235, 235, 0.3)')}
    }

    div {
        width: 180px;
    }

`;

export const ListItemAvatar = styled.div`
    max-width: 40px;
    align-items: center;
    justify-content: center;
`;

export const Plus = styled.button`
    display: flex;
    background: rgba(189, 189, 189, 0);
    width: 70px;
    height: 30px;
    border: none;
    align-self: center;
    margin-left: 90px;
    justify-content: center;

    span {
        font: 16px 'Nunito', sans-serif;
        font-weight: bold;
        color: #25293F;
    }
`;

export const Avatar = styled.div`
    padding: 8px;
    max-width: 40px;
    border-radius: 20px;
    align-items: center;
    background: rgba(255, 255, 255, 0);
`;

export const ListItemText = styled.p`
    margin-top: 3px;
    margin-left: 12px;
    font: 18px 'Nunito', sans-serif;
    color: #25293F;
    font-weight: bold;
`;

export const ListItemText2 = styled.p`
    margin-left: 14px;
    width: 150px;
    font: 16px 'Nunito', sans-serif;
    color: rgba(37,41,63, 0.8);
`;


/*********************************** Direita *****************************/

export const Right = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    background: #fff;
    margin: 10px;
    border-radius: 15px;

    h1 {
        margin-top: 20px;
        margin-left: 20px;
        color: #25293F;
        font: 22px 'Nunito', sans-serif;
    }
`;

export const TitleRight = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
`;

export const Top = styled.div`
    height: 400px;
    width: 100%;
`;

export const Base = styled.div`
    flex: 1;
    background: green;
`;

export const Bar = styled.div`
    display: flex;
    max-height: 400px;
`;