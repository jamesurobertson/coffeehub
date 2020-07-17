import React from "react";
import styled from "styled-components";

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  margin: 20px auto;
  padding: 20px 0;
  border: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.bgSecondary};

  .pure-table {
      margin: 0 30px;
  }
`

const Chart = () => {
  return(
  <ChartWrapper>
      <table class='pure-table pure-table-horizontal'>
          <tbody>
              <tr>
                  <td>Minute</td>
                  <td>7</td>
                  <td>10</td>
                  <td>12</td>
                  <td>15</td>
                  <td>15.5</td>
              </tr>
              <tr>
                  <td>Fan Speed</td>
                  <td>1</td>
                  <td>2</td>
                  <td>2</td>
                  <td>4</td>
                  <td>4</td>
              </tr>
              <tr>
                  <td>Power</td>
                  <td>10</td>
                  <td>10</td>
                  <td>5</td>
                  <td>2</td>
                  <td>4</td>
              </tr>
          </tbody>
      </table>
      <table class='pure-table pure-table-horizontal'>
          <tbody>
              <tr>
                  <td>Total Time</td>
                  <td>16</td>
              </tr>
              <tr>
                  <td>Ambient Temp</td>
                  <td>73</td>

              </tr>
              <tr>
                  <td>Load</td>
                  <td>250g</td>

              </tr>
              <tr>
                  <td>Yield</td>
                  <td>217g</td>

              </tr>
              <tr>
                  <td>FC</td>
                  <td>10</td>

              </tr>
              <tr>
                  <td>SC</td>
                  <td>13</td>

              </tr>
          </tbody>
      </table>
  </ChartWrapper>
  )
};

export default Chart;
