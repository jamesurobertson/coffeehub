import styled from 'styled-components'

const FeedCard = styled.div`
  padding: 20px 0;
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.bgSecondary};

  .feed-card-1 {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    flex: 0;
  }

  .feed-card-2 {
    width: 100%;
    max-width: 950px;
    padding-left: 15px;
    display: flex;
    flex-flow: column;

    a {
      font-weight: bold;
    }
  }

  .feed-card-inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-top: 10px;
    padding: 20px;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 5px;
    background-color: white;
  }

  .user-details__username {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.secondaryColor};
  }

  .feed-card__data-details {
    display: flex;
    align-items: center;
    margin-top: 20px;

    div {
      font-size: 12px;
      text-align: center;
      color: ${(props) => props.theme.secondaryColor};
    }
  }

  .feed-card-inner__user-details {
    margin-left: 15px;
    display: flex;
    flex-flow: column;
  }
`
export default FeedCard
