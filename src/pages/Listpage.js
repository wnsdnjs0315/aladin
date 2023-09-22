import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const Listpage = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async() => {
    let url = 'http://localhost:5000/products/'
    let searchQuery = query.get('q')||"";
    let response = await fetch(url);
    let data = await response.json();
     setProductList(data)
  }
  useEffect(()=> {
    getProducts()
  }, [query])
    
  return (
    <Container>
      <Row>{
        productList.map((menu, idx) => (
          <Col lg={3} key={idx}>
              <ProductCard item={menu} />
          </Col>
        ))
        }
      </Row>
    </Container>
  )
}

export default Listpage