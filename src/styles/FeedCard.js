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

    a {
      font-weight: bold;
    }
  }

  .feed-card-inner {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
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

    .roast-detail {
        padding-right: 6px;
    }
  }

  .feed-card-inner__user-details {
    margin-left: 15px;
    display: flex;
    flex-flow: column;
  }

  .feed-card-inner-right {
    display: "flex";
     max-width: '80%';
  }

  button {
      width: 87px;
  }

  @media screen and (max-width: 830px) {
      padding: 20px 10px;
      position: relative;

      button {
          display: flex;
          width: 60px;
          flex-flow: column;
          align-items: center;
          right: 17px;
          bottom: 30px;
          font-size: 14px;
          position: absolute;

      }

      .feed-card-inner-right {
          max-width: 100%;
      }
  }
`
export default FeedCard
