import styled from 'styled-components'

export const StyledHero = styled.div`
         position: absolute;
         width: 100%;
         height: calc(100% - 103px);
         bottom: 0;
         left: 0;
         background-color: #000000;
         opacity: 0.5;
         z-index: 100;
         button {
           text-transform: uppercase;
           /* color: pink; */
         }
       `
      export  const HeaderWrapper = styled.div`
         position: absolute;
         left: 50%;
         top: 50%;
         transform: translate(-50%, -50%);
         text-align: center;
         h2 {
           color: #fff;
         }
       `
