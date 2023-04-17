import styled from 'styled-components';

export const Item = styled.li`
  list-style: none;
  padding: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);

    :not(:last-child) {
        margin-bottom: 15px;
    }
`;

export const MessageReviews = styled.p`
margin-top: 20px;
`