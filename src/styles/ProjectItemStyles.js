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
        background-color: var(--accent-color-3);
        padding: 1rem;
        border-radius: 12px;
        max-width: 500px;
        font-family: 'Garamond';
    }
    @media only screen and (max-width: 768px) {
        text-align: center;
        width: 100%;
        height: 100%;
    }
    .project-item-title {
        font-size: 2.2rem;
        font-family: 'Garamond';
    }
    .project-links {
        width: 25px;
        white-space: nowrap;
        font-family: 'Garamond';
    }
    h3,h5 {
        color: var(--text-color);
        font-family: 'Garamond';
    }
    .project-item-desc {
        font-size: 1.6rem;
        margin-top: 1rem;
        color: var(--text-color);
        word-wrap: normal;
        font-family: 'Garamond';
    }
    
    @media only screen and (max-width: 768px) {
        .project-item-img, {
            height: 350px;
        }
    }
`;