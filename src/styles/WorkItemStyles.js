import styled from 'styled-components';

export const WorkItemStyles = styled.div`
    .work-item-img {
        width: 100%;
        height: 300px;
        border-radius: 12px;
        display: inline-block;
        border: 3px solid var(--accent-color-2);
        text-align: center;
        max-height: 300px;
        max-width: 500px;
    }
    @media only screen and (max-width: 768px) {
        text-align: center;
        width: 100%;
        height: 100%;
    }
    .work-item-info {
        margin-top: 1rem;
        background-color: var(--bg-color);
        padding: 1rem;
        border-radius: 12px;
        max-width: 500px;
    }
    @media only screen and (max-width: 768px) {
        text-align: center;
        width: 100%;
        height: 100%;
    }
    .work-item-date {
        font-size: 1.6rem;
    }
    .work-item-title {
        color: var(--text-color);
    }
    .work-item-desc {
        color: var(--text-color);
        font-size: 1.6rem;
        font-family: 'Times New Roman';
        margin-top: 1rem;
        word-wrap: normal;
    }
    @media only screen and (max-width: 768px) {
        .work-item-img, {
            height: 350px;
        }
    }
`