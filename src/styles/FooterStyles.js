import styled from 'styled-components';

export const FooterStyles = styled.div`
    .footer {
        display: flex;
    }
    @media only screen and (max-width: 768px) {
        .footer {
            flex-direction: column;
        }
    }
`