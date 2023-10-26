import styled from 'styled-components';

export const WorkStyles = styled.div`
    .work {
        padding: 3rem;
    }
    h2 {
        color: var(--text-color);
        display: block;
        margin: auto;
        text-align: center;
        font-family: 'Garamond';
        font-size: 3.5rem;
        text-transform: uppercase;
        text-decoration: underline;
    }
    @media only screen and (max-width: 768px) {
        h2 {
            font-size: 3.6rem;
        }
    }
    .swiper-wrapper {
        margin: auto;
        padding-top: 6rem;
        max-width: 500px;
    }
    .swiper-button-prev, .swiper-button-next {
        color: var(--text-color);
        width: 50%;
        z-index: 10;
        transform: translateY(50%);
    }
    .swiper-button-next {
        right: 0;
    }
    .swiper-button-prev::after, .swiper-button-next::after {
        font-size: 1.2rem;
    }
    @media only screen and (max-width: 768px) {
        .work-items {
            flex-direction: column;
            max-width: 400px;
            margin: 0 auto;
            gap: 5rem;
    }
}
`