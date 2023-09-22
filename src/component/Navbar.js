import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ListFantasy from '../pages/ListFantasy';
import ListReasoning from '../pages/ListReasoning';
import ListSf from '../pages/ListSf';

const Navbar = () => {
    const menuList = [
        "전체",
        "판타지",
        "추리",
        "SF"
      ];
      const navigate = useNavigate();
      const search = (e) => {

        if (e.key === "Enter"){
          //입력한 검색어 읽어오기
          let keyword = e.target.value;
    
          //url을 변경
          navigate(`/?q=${keyword}`)
        }
      }
  return (
    <>
      <div class="logo">
          <Link to='/'>
            <img src="https://image.aladin.co.kr/img/header/2023/aladin_logo.jpg" alt="로고" />
          </Link>
      </div>
      <div className='menu-area'>
          <ul class="menu-list">
            {/* {
              menuList.map(
                (menu, idx) => (<li key={idx}><a href="#">{menu}</a></li>
              ))
            } */}
            <li>
              <Link to='/'>전체</Link>
              <Link to='/fantasy' element={<ListFantasy />}>판타지</Link>
              <Link to='/reasoning' element={<ListReasoning />}>추리</Link>
              <Link to='/sf' element={<ListSf />}>SF</Link>
            </li>
          </ul>
          <div className='search-area'>
          <input type="text" placeholder='상품검색' onKeyDown={(e) => search(e)}/>
          </div>
      </div>

    </>
  )
}

export default Navbar