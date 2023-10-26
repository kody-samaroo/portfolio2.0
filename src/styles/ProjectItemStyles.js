import styled from 'styled-components';

export const ProjectItemStyles = styled.div`
    .project-item-img {
        width: 100%;
        height: 300px;
        border-radius: 12px;
        display: inline-block;
        border: 3px solid var(--accent-color-2);
        text-align: center;;
        max-height: 300px;
        max-width: 500px;
    }
    @media only screen and (max-width: 768px) {
        text-align: center;
        width: 100%;
        height: 100%;
    }
    .project-item-info {
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
    .project-item-title {
        font-size: 2.2rem;
    }
    .project-links {
        width: 25px;
        white-space: nowrap;
    }
    h3,h5 {
        color: var(--text-color);
    }
    .project-item-desc {
        font-size: 1.6rem;
        font-family: 'Times New Roman';
        margin-top: 1rem;
        color: var(--text-color);
        word-wrap: normal;
    }
    @media only screen and (max-width: 768px) {
        .project-item-img, {
            height: 350px;
        }
    }
`;