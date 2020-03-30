import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    margin: 60px auto;
    background: #fff;
    width: 1000px;
    height: 580px;
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
    flex: 1;
    margin: 5px;
    border-radius: 15px;  

    h1 {
        font-size: 18px;
        color: #282828;
        margin-top: 20px;
        margin-left: 20px;
    }
`;

export const List = styled(PerfectScrollbar)`
    border: 1px solid rgba(235, 235, 235);
    border-radius: 15px;
    width: 100%;
    max-width: 360px;
    max-height: 500px;
    margin-top: 10px;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: row;
    border-radius: 4px;
    padding: 15px;
    border-bottom: 1px solid rgba(235, 235, 235, 0.2);

`;

export const ListItemAvatar = styled.div``;

export const Avatar = styled.div`
    padding: 8px;
    border-radius: 20px;
    background: rgba(189, 189, 189, 0.8);
`;

export const ListItemText = styled.p`
    margin-top: 3px;
    margin-left: 12px;
    font-size: 16px;
`;

export const ListItemText2 = styled.p`
    margin-left: 14px;
    margin-top: 5px;
    font-size: 14px;
    color: #666666;
`;

//**************************************** RIGHT ************************************** */

export const Right = styled.div`
    flex: 3;
    border: 1px solid rgba(235, 235, 235);
    border-radius: 20px;
    margin: 5px;

    h1 {
        font-size: 18px;
        color: #282828;
        margin-top: 20px;
        margin-left: 20px;
    }
`;

export const SpaceGrafc = styled.div`
    display: flex;
    margin-top: 5px;
    width: 100%;
    height: 70%;
    background: red;
`;

export const Divisor = styled.div`
    margin-top: 10px;
    border-top: 1px dashed rgba(235, 235, 235);
`;

export const Footer = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 600px;
    margin: 20px 0px 0px 30px;

    h2 {
        position: absolute;
        font-size: 16px;
        color: #666666;
        margin: -25px 0 0 0px;
    }
`;

export const ButtonField = styled.button`
    width: 150px;
    background: #3b9eff;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
        background: ${darken(0.03, '#3b9eff')}
    }
`;

