import * as React from 'react';
import * as S from './style';
import MainImage from './MainImage.png';
import Calc from './Calculator.png';
import { Link } from 'react-router-dom';

function Main() {
    const [scroll, handleScroll] = React.useState(0);

    React.useEffect(() => {
        window.addEventListener("scroll", onScroll)
        window.addEventListener("scroll", isScroll)

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("scroll", isScroll);
        }
    });

    const onScroll = () => {
        handleScroll(document.documentElement.scrollTop);
        console.log(scroll);
    }
    
    
    return(
        <S.MainPlace onScroll={isScroll}>
            <S.MainPageImg src={MainImage}/>
            <S.TextPlace>
                돈관리가 힘드신가요?
                <S.SubText>
                    나만의 가계부를 통해 지출, 수입을 한 눈에<br/>
                    알아보고 돈을 체계적으로 관리할 수 있어요!
                </S.SubText>
                <S.StartBtn>
                    <Link to="/fe" style={{textDecoration: 'none', color: 'white'}}>지금 시작하기</Link>                   
                </S.StartBtn>
            </S.TextPlace>
            <S.SecMain>
                <S.Title id="up_on_scroll">
                    Free&nbsp;Service
                </S.Title>      
            </S.SecMain>
        </S.MainPlace>
    )
}
const isElementUnderBottom = (elem: any, triggerDiff: any) => {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
}

const isScroll = () => {
    const elems = document.querySelectorAll<HTMLElement>('#up_on_scroll');
    
    elems.forEach(elem => {
        console.log(elem);
      if (isElementUnderBottom(elem, -400)) {
        elem.style.transform = 'translateX(90px)';
      } else {
        elem.style.transform = 'translateX(-90px)';
      }
    })
}


export default Main;