import styled from 'styled-components'

export const StyledSecondaryPages = styled.section`
height: 100vh;

display: flex;
justify-content: center;
align-items: center;

.page-container {
    margin-bottom: 0;
    width: 100%;
    
    display: flex;
    
    background-color: #FFFBFA;
    border-radius: 20px;
    
    transform: translateY(30px);
    
    > .lateral-img {
        height: 100%;
    }
    
    > .container-cards {
        padding: 5%;
    }
}

.container-cards {
    height: 675px;
    width: 640px;
    overflow-y: scroll;
}

.cards-list {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
}

.title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 36px;
}

.btn-add {
    width: 40px;
    height: 40px;
    color: #925946;
    border: 1px solid #EBDFD4;
    border-radius: 10px;
    text-decoration: none;
    text-align: center;
    font-size: 20px;
}

.btn-add:hover {
    background-color: #925946;
    color: white;
    cursor: pointer;
    transition: all 0.6s ease;
}
`